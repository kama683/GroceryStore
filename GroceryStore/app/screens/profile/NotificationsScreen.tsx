import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const NotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Уведомления</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Сегодня</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            Код подтверждения: 64991. Никому не давайте код, даже если его требуют от имени
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.item}>
          <Text style={styles.itemText}>
            Если Вы не запрашивали код для входа, проигнорируйте это сообщение.
          </Text>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Вчера</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            If this was not you, you can terminate that session in Settings &gt; Devices (or Privacy & Security &gt; Active Sessions).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' }, // Чуть серый фон как на скрине
  header: { paddingHorizontal: 20, paddingTop: 10, marginBottom: 10 },
  title: { fontSize: 32, fontWeight: 'bold', paddingHorizontal: 20, marginBottom: 20 },
  content: { paddingHorizontal: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#111' },
  item: { marginBottom: 15 },
  itemText: { fontSize: 15, lineHeight: 22, color: '#333' },
  separator: { height: 1, backgroundColor: '#E0E0E0', marginBottom: 15 },
});