import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions, SafeAreaView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SEARCH_GRID_ITEMS } from '../../data/mockData';

const { width } = Dimensions.get('window');
const COLS = 3;
const GAP = 8;
const PADDING = 16;
const TILE_SIZE = (width - PADDING * 2 - GAP * (COLS - 1)) / COLS;

export const SearchMainScreen = ({ navigation, route }: any) => {
  const categoryTitle = route?.params?.categoryTitle || 'Фрукты';

  const renderGridItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate('CategoriesList', { categoryId: item.id })}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image }} style={styles.gridImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBtn}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{categoryTitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchInput')}
          style={styles.headerBtn}
        >
          <Feather name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={SEARCH_GRID_ITEMS}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={COLS}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ gap: GAP }}
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
  grid: { padding: PADDING, paddingBottom: 24, gap: GAP },
  gridItem: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gridImage: { width: '100%', height: '100%' },
});
