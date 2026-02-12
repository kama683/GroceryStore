import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const STORES = [
  { name: 'Супермаркет "ВкусМарт"', address: 'ул. Кенесары, 14' },
  { name: 'Magnum Cash&Carry', address: 'пр. Туран, 18' },
  { name: 'Променад маркет', address: 'пр. Мангилик Ел, 53' },
];

export const SelectStoreScreen = () => {
  const navigation = useNavigation<any>();

  const handleSelect = (storeName: string) => {
    navigation.navigate({
      name: 'CreatePost',
      params: { selectedStore: storeName },
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
          <Text style={styles.headerTitle}>Добавить место</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {STORES.map((store, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handleSelect(store.name)}>
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.storeAddress}>{store.address}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  headerTitleContainer: { alignItems: 'center' },
  dragHandle: { width: 40, height: 4, backgroundColor: '#CCC', borderRadius: 2, marginBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  
  list: { paddingHorizontal: 20 },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 10 },
  storeName: { fontSize: 16, fontWeight: '500', marginBottom: 4 },
  storeAddress: { fontSize: 12, color: '#999' },
});