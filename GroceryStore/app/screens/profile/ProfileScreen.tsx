import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'posts' | 'favorites'>('posts');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View /> 
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.iconButton}>
            <Feather name="bell" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconButton}>
            <Feather name="more-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* User Info */}
        <View style={styles.profileHeader}>
          <View>
            <Text style={styles.name}>Jane Cooper</Text>
            <Text style={styles.status}>Активный пользователь</Text>
            
            <View style={styles.statsContainer}>
              <Text style={styles.statNumber}>12 <Text style={styles.statLabel}>посты</Text></Text>
              <Text style={styles.statNumber}>10 <Text style={styles.statLabel}>подтверждения</Text></Text>
            </View>
          </View>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }} 
            style={styles.avatar} 
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'posts' && styles.activeTab]} 
            onPress={() => setActiveTab('posts')}
          >
            <Text style={[styles.tabText, activeTab === 'posts' && styles.activeTabText]}>Мои посты</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'favorites' && styles.activeTab]} 
            onPress={() => setActiveTab('favorites')}
          >
            <Text style={[styles.tabText, activeTab === 'favorites' && styles.activeTabText]}>Избранное</Text>
          </TouchableOpacity>
        </View>

        {/* Content (Mock Post based on image) */}
        <View style={styles.postCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1558961363-fa99a70e8bc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }} // Macarons
            style={styles.postImage}
          />
          <Text style={styles.postText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10 },
  headerIcons: { flexDirection: 'row', gap: 15 },
  iconButton: { padding: 5 },
  content: { paddingHorizontal: 20, paddingTop: 20 },
  profileHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  name: { fontSize: 28, fontWeight: 'bold', marginBottom: 5 },
  status: { fontSize: 14, color: '#888', marginBottom: 20 },
  statsContainer: { flexDirection: 'row', gap: 20 },
  statNumber: { fontSize: 16, fontWeight: 'bold' },
  statLabel: { fontSize: 14, fontWeight: 'normal', color: '#888' },
  avatar: { width: 80, height: 80, borderRadius: 25 }, // Rounded square/squircle style
  
  tabsContainer: { flexDirection: 'row', backgroundColor: '#F4F4F4', borderRadius: 12, padding: 4, marginBottom: 20 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  activeTab: { backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  tabText: { fontSize: 14, color: '#888' },
  activeTabText: { color: '#000', fontWeight: '600' },

  postCard: { marginBottom: 20 },
  postImage: { width: '100%', height: 200, borderRadius: 16, marginBottom: 12 },
  postText: { fontSize: 14, lineHeight: 20, color: '#111' },
});