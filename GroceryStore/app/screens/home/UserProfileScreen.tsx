import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { MOCK_USER, getUserById } from '../../data/mockData';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export const UserProfileScreen = ({ navigation, route }: any) => {
  const userId = route?.params?.userId;
  const user = getUserById(userId);
  const posts = user?.posts || [];

  const renderPost = ({ item }: any) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('PostDetails', { postId: item.id })}
      style={styles.gridItem}
    >
      <Image source={{ uri: item.image }} style={styles.gridImage} />
      <Text style={styles.gridText} numberOfLines={2}>{item.content || 'Amet minim mollit non deserunt...'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Info */}
      <View style={styles.header}>
        <View style={{flex: 1}}>
           {/* Кнопка закрытия/назад */}
          <Ionicons name="close" size={24} color="#000" onPress={() => navigation.goBack()} style={{marginBottom: 10}}/>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.role}>{user.role}</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statNum}>{user.stats?.posts ?? 0} <Text style={styles.statLabel}>посты</Text></Text>
            <Text style={styles.statNum}><Text style={{marginLeft: 15}}>{user.stats?.confirmations ?? 0}</Text> <Text style={styles.statLabel}>подтвержения</Text></Text>
          </View>
        </View>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>

      <Text style={styles.sectionTitle}>Посты</Text>

      <FlatList 
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        numColumns={1} // На скрине список вертикальный с большими фото
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 40 },
  name: { fontSize: 28, fontWeight: 'bold' },
  role: { fontSize: 14, color: '#888', marginBottom: 10 },
  statsRow: { flexDirection: 'row', gap: 20 },
  statNum: { fontWeight: 'bold', fontSize: 16 },
  statLabel: { fontWeight: 'normal', color: '#888' },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  gridItem: { marginBottom: 20 },
  gridImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 8 },
  gridText: { fontSize: 14, color: '#333' }
});