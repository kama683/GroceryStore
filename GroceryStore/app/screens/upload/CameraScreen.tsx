import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const CameraScreen = () => {
  const navigation = useNavigation<any>();

  const takePicture = () => {
    // Имитация снимка: возвращаем рандомную картинку
    const mockImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    
    // Возвращаемся назад и передаем фото
    navigation.navigate({
      name: 'CreatePost',
      params: { newPhoto: mockImage },
      merge: true,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Верхняя панель */}
      <SafeAreaView style={styles.topControls}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Feather name="x" size={30} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Область видоискателя (пустая, черная) */}
      <View style={styles.cameraArea} />

      {/* Нижняя панель управления */}
      <View style={styles.bottomControls}>
        <TouchableOpacity style={styles.galleryButton}>
          <Feather name="image" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
          <View style={styles.shutterInner} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.flashButton}>
          <Feather name="zap-off" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  topControls: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  iconButton: { padding: 10 },
  cameraArea: { flex: 1 },
  bottomControls: { 
    height: 150, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    paddingBottom: 20 
  },
  galleryButton: { padding: 15 },
  flashButton: { padding: 15 },
  shutterButton: {
    width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center'
  },
  shutterInner: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#000', backgroundColor: '#fff' }
});