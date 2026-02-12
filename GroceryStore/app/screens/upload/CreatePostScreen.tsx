import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export const CreatePostScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // Состояния формы
  const [product, setProduct] = useState('');
  const [store, setStore] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState(['#овощи', '#молочнаяпродукция']);
  const [images, setImages] = useState<string[]>([]);
  const [rating, setRating] = useState(0);

  // Слушаем возвращение данных с других экранов
  useEffect(() => {
    if (route.params?.selectedCategory) {
      setProduct(route.params.selectedCategory);
    }
    if (route.params?.selectedStore) {
      setStore(route.params.selectedStore);
    }
    if (route.params?.newPhoto) {
      setImages(prev => [...prev, route.params.newPhoto]);
    }
  }, [route.params]);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const removeImage = (indexToRemove: number) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}>
          <Feather name="x" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
           <View style={styles.dragHandle} />
           <Text style={styles.title}>Добавить пост</Text>
        </View>
        <TouchableOpacity>
           <Feather name="more-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Выбрать товар */}
        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate('SelectProduct')}>
          <Text style={product ? styles.inputText : styles.placeholder}>
            {product || 'Выбрать товар'}
          </Text>
          <Feather name="chevron-right" size={20} color="#CCC" />
        </TouchableOpacity>

        {/* Цена */}
        <View style={styles.inputContainer}>
           <TextInput 
            placeholder="Цена" 
            style={styles.textInput} 
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
           />
        </View>

        {/* Описание */}
        <View style={[styles.inputContainer, styles.textAreaContainer]}>
           <TextInput 
            placeholder="Описание" 
            style={[styles.textInput, styles.textArea]} 
            multiline 
            value={description}
            onChangeText={setDescription}
           />
        </View>

        {/* Магазин */}
        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate('SelectStore')}>
           <Text style={store ? styles.inputText : styles.placeholder}>
            {store || 'Магазин'}
          </Text>
          <Feather name="chevron-right" size={20} color="#CCC" />
        </TouchableOpacity>

        {/* Теги */}
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag} onPress={() => removeTag(tag)}>
              <View style={styles.tagRemoveIcon}>
                 <Feather name="x" size={10} color="#fff" />
              </View>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Фотографии */}
        <View style={styles.mediaContainer}>
          <TouchableOpacity style={styles.addPhotoButton} onPress={() => navigation.navigate('Camera')}>
            <Feather name="camera" size={24} color="#999" />
          </TouchableOpacity>
          
          {images.map((img, index) => (
            <View key={index} style={styles.thumbnailWrapper}>
              <Image source={{ uri: img }} style={styles.thumbnail} />
              <TouchableOpacity style={styles.removePhotoIcon} onPress={() => removeImage(index)}>
                <Feather name="x" size={12} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
          
          {/* Пустые плейсхолдеры для красоты, если фото мало */}
          {images.length < 2 && (
             <View style={styles.emptyPlaceholder} />
          )}
        </View>

        {/* Рейтинг */}
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Feather 
                name="star" 
                size={28} 
                color={star <= rating ? "#2ECC71" : "#E0E0E0"} 
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* Кнопка публикации */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishButtonText}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15 },
  headerCenter: { alignItems: 'center' },
  dragHandle: { width: 40, height: 4, backgroundColor: '#555', borderRadius: 2, marginBottom: 10 }, // Темная полоска как на скрине
  title: { fontSize: 32, fontWeight: 'bold' },

  content: { paddingHorizontal: 20 },
  
  inputContainer: { 
    backgroundColor: '#FFF', 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: { fontSize: 16, color: '#000' },
  placeholder: { fontSize: 16, color: '#999' }, // Цвет плейсхолдера как "Выбрать товар"
  textInput: { flex: 1, fontSize: 16, color: '#000', padding: 0 },
  textAreaContainer: { height: 120, alignItems: 'flex-start' },
  textArea: { textAlignVertical: 'top' },

  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20, marginTop: 5 },
  tag: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF', 
    borderRadius: 20, 
    paddingVertical: 6, 
    paddingHorizontal: 10, 
    marginRight: 10, 
    alignItems: 'center',
    marginBottom: 5
  },
  tagRemoveIcon: { 
    width: 16, height: 16, borderRadius: 8, backgroundColor: '#999', 
    justifyContent: 'center', alignItems: 'center', marginRight: 6 
  },
  tagText: { fontSize: 14, color: '#555' },

  mediaContainer: { flexDirection: 'row', marginBottom: 25 },
  addPhotoButton: { 
    width: 80, height: 80, backgroundColor: '#FFF', borderRadius: 12, 
    justifyContent: 'center', alignItems: 'center', marginRight: 10 
  },
  thumbnailWrapper: { width: 80, height: 80, marginRight: 10, position: 'relative' },
  thumbnail: { width: '100%', height: '100%', borderRadius: 12 },
  removePhotoIcon: { 
    position: 'absolute', top: -5, right: -5, width: 20, height: 20, 
    backgroundColor: '#999', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#F2F2F2'
  },
  emptyPlaceholder: { width: 80, height: 80, backgroundColor: '#FFF', borderRadius: 12, marginRight: 10 },

  ratingContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },

  footer: { padding: 20, paddingBottom: 30 },
  publishButton: { 
    backgroundColor: '#2ECC71', 
    paddingVertical: 16, 
    borderRadius: 12, 
    alignItems: 'center',
    shadowColor: "#2ECC71", shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.3, shadowRadius: 5
  },
  publishButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});