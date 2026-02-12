import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SEARCH_CATEGORIES } from '../../data/mockData';

export const CategoriesListScreen = ({ navigation }: any) => {
  const renderCategory = ({ item }: any) => (
    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.7}>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBtn}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Все категории</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchInput')}
          style={styles.headerBtn}
        >
          <Feather name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={SEARCH_CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 35 : 0 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerBtn: { padding: 4 },
  title: { fontSize: 20, fontWeight: '700', color: '#000' },
  list: { padding: 16, paddingBottom: 24 },
  categoryCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryName: { fontSize: 16, fontWeight: '600', color: '#000' },
});
