import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getProductById } from '../../data/mockData';

export const ProductDetailsScreen = ({ route, navigation }: any) => {
  const { shopId, productId } = route?.params || {};
  const product = getProductById(shopId, productId);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" onPress={() => navigation.goBack()} />
        <Ionicons name="bookmark-outline" size={24} color="#000" />
      </View>

      <Image source={{ uri: product?.image }} style={styles.image} resizeMode="contain" />
      
      <View style={styles.centerInfo}>
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.price}>{product?.price} ₸ <Text style={styles.unit}>/ {product?.unit}</Text></Text>
        
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.btnText}>Добавить</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descBlock}>
        <Text style={styles.blockTitle}>Описание</Text>
        <Text style={styles.descText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 40 },
  image: { width: '100%', height: 250, marginBottom: 20 },
  centerInfo: { alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 24, color: '#2ECC71', fontWeight: 'bold', marginBottom: 20 },
  unit: { fontSize: 16, color: '#888', fontWeight: 'normal' },
  addButton: { backgroundColor: '#2ECC71', paddingVertical: 14, paddingHorizontal: 60, borderRadius: 12, width: '100%', alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  descBlock: { padding: 20 },
  blockTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  descText: { color: '#666', lineHeight: 22 }
});