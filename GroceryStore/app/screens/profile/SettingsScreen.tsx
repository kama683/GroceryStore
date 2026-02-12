import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Modal Handle */}
      <View style={styles.handleContainer}>
        <View style={styles.handle} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={26} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
           <Feather name="more-horizontal" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Настройки</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionHeader}>Профиль</Text>
        
        <View style={styles.card}>
          <Text style={styles.label}>Имя пользователя</Text>
          <Text style={styles.value}>Nurlan Almasuly</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>7@nurla.kz</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Дата рождения</Text>
          <Text style={styles.value}>7 августа 1990</Text>
        </View>

        <Text style={styles.sectionHeader}>Безопасность и конфиденциальность</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="key" size={22} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Сменить пароль</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="lock" size={22} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Конфиденциальность</Text>
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Дополнительно</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="maximize" size={22} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Посмотреть список цен</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2' },
  handleContainer: { alignItems: 'center', paddingTop: 10, paddingBottom: 5 },
  handle: { width: 40, height: 4, backgroundColor: '#CCC', borderRadius: 2 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 },
  title: { fontSize: 32, fontWeight: 'bold', paddingHorizontal: 20, marginBottom: 20 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  sectionHeader: { fontSize: 14, fontWeight: '600', color: '#111', marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 10 },
  label: { fontSize: 12, color: '#999', marginBottom: 4 },
  value: { fontSize: 16, color: '#000' },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  menuIcon: { marginRight: 15 },
  menuText: { fontSize: 16, color: '#333' },
});