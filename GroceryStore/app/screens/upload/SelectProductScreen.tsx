import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CATEGORIES = [
  'Фрукты', 'Молочная продукция', 'Хозяйственные товары', 'Напитки',
  'Овощи', 'Мясо', 'Крупы', 'Мучные изделия', 'Алкоголь'
];

export const SelectProductScreen = () => {
  const navigation = useNavigation<any>();

  const handleSelect = (category: string) => {
    navigation.navigate({
      name: 'CreatePost',
      params: { selectedCategory: category },
      merge: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <View style={styles.dragHandle} />
          <Text style={styles.headerTitle}>Выбор товара</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Поиск товара и категории" style={styles.searchInput} placeholderTextColor="#999"/>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {CATEGORIES.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.card, index % 2 === 0 ? { marginRight: 10 } : {}]} // Чередование отступов
            onPress={() => handleSelect(item)}
          >
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Добавить свое</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 10 },
  headerTitleContainer: { alignItems: 'center' },
  dragHandle: { width: 40, height: 4, backgroundColor: '#CCC', borderRadius: 2, marginBottom: 10 },
  headerTitle: { fontSize: 28, fontWeight: 'bold' },
  
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', marginHorizontal: 20, borderRadius: 12, paddingHorizontal: 15, height: 50, marginBottom: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },

  grid: { paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 100 },
  card: { 
    width: '48%',
    height: 100, 
    backgroundColor: '#FFF', 
    borderRadius: 16, 
    padding: 15, 
    justifyContent: 'flex-end', 
    marginBottom: 15,
    shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 5, elevation: 2
  },
  cardText: { fontSize: 14, fontWeight: '600', color: '#000' },

  footerButton: { position: 'absolute', bottom: 30, alignSelf: 'center' },
  footerButtonText: { fontSize: 16, fontWeight: '600', color: '#000' }
});