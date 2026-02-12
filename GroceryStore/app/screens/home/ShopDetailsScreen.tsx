import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MOCK_SHOP, getShopById } from '../../data/mockData';
import { Ionicons, Feather } from '@expo/vector-icons';

export const ShopDetailsScreen = ({ navigation, route }: any) => {
  const shopId = route?.params?.shopId;
  const shop = getShopById(shopId);
  const renderProduct = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', { shopId: shop?.id, productId: item.id })}
    >
      <Feather name="bookmark" size={20} color="#888" style={styles.bookmarkIcon} />
      <Image source={{ uri: item.image }} style={styles.prodImage} />
      <Text style={styles.prodName}>{item.name}</Text>
      <Text style={styles.prodPrice}>{item.price} ₸ <Text style={{color:'#888', fontWeight:'normal'}}>/ {item.unit}</Text></Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" onPress={() => navigation.goBack()} />
        <Ionicons name="search" size={24} color="#000" />
      </View>
      
      <View style={styles.shopInfo}>
        <Text style={styles.shopName}>{shop.name} <Ionicons name="checkmark-circle" size={20} color="#2ECC71"/></Text>
        <Text style={styles.shopMeta}>{shop.type}  {shop.address}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Ionicons name="star" size={16} color="#ccc" />
          <Text style={{marginLeft: 5, fontWeight: 'bold'}}>{shop.rating}</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <View style={styles.activeTab}><Text style={{fontWeight: 'bold'}}>Продукция</Text></View>
        <View style={styles.inactiveTab}><Text style={{color: '#888'}}>Аналитика</Text></View>
      </View>

      <FlatList 
        data={shop.products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginBottom: 20 },
  shopInfo: { marginBottom: 20 },
  shopName: { fontSize: 24, fontWeight: 'bold' },
  shopMeta: { fontSize: 14, color: '#888', marginTop: 5 },
  tabs: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#fff', padding: 4, borderRadius: 8 },
  activeTab: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 8, borderRadius: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  inactiveTab: { flex: 1, alignItems: 'center', padding: 8 },
  productCard: { backgroundColor: '#fff', width: '48%', borderRadius: 12, padding: 12, marginBottom: 16, alignItems: 'center' },
  bookmarkIcon: { position: 'absolute', right: 10, top: 10, zIndex: 1 },
  prodImage: { width: 80, height: 80, marginBottom: 10 },
  prodName: { fontWeight: 'bold', marginBottom: 5 },
  prodPrice: { color: '#2ECC71', fontWeight: 'bold' }
});