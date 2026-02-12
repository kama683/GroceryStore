import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { PostCard } from '../../components/PostCard';
import { MOCK_FEED } from '../../data/mockData';
import { Feather } from '@expo/vector-icons';

const HomeHeader = ({ onSearchPress }: { onSearchPress: () => void }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.logoText}>habar.im</Text>
    <TouchableOpacity style={styles.searchContainer} onPress={onSearchPress} activeOpacity={0.8}>
      <Feather name="search" size={16} color="#888" style={{ marginRight: 8 }} />
      <TextInput
        placeholder="Поиск"
        style={styles.searchInput}
        placeholderTextColor="#999"
        editable={false}
        pointerEvents="none"
      />
    </TouchableOpacity>
  </View>
);

export const FeedScreen = ({ navigation }: any) => {
  const handleSearchPress = () => navigation.navigate('SearchMain', { categoryTitle: 'Фрукты' });

  const renderItem = ({ item }: any) => (
    <PostCard 
      data={item} 
      onPress={() => navigation.navigate('PostDetails', { postId: item.id })} 
      onUserPress={() => navigation.navigate('UserProfile', { userId: item.user?.id })} 
      onShopPress={() => navigation.navigate('ShopDetails', { shopId: item.shop?.id })} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HomeHeader onSearchPress={handleSearchPress} />
      <FlatList
        data={MOCK_FEED} // Исправлено здесь
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 35 : 0 },
  headerContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  logoText: { fontSize: 22, fontWeight: '800', color: '#000', marginRight: 16, letterSpacing: -0.5 },
  searchContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 8, paddingHorizontal: 10, height: 36 },
  searchInput: { flex: 1, fontSize: 15, color: '#000', paddingVertical: 0 },
});