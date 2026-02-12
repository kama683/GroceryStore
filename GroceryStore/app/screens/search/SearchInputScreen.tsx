import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Platform, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SEARCH_SUGGESTIONS } from '../../data/mockData';

export const SearchInputScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState('');

  const handleTagPress = useCallback((tag: string) => {
    navigation.navigate('SearchMain', { categoryTitle: tag });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Поиск"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          autoFocus
          returnKeyType="search"
        />
        <TouchableOpacity
          onPress={() => {
            setQuery('');
            Keyboard.dismiss();
          }}
          style={styles.clearBtn}
        >
          <Ionicons name="close-circle" size={22} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.suggestions}>
        <Text style={styles.suggestionsLabel}>Популярные запросы</Text>
        <View style={styles.tagsRow}>
          {SEARCH_SUGGESTIONS.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={styles.tag}
              onPress={() => handleTagPress(tag)}
              activeOpacity={0.7}
            >
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.resultsArea}>
        {query.length > 0 ? (
          <Text style={styles.resultsHint}>Результаты по запросу «{query}»</Text>
        ) : (
          <Text style={styles.resultsPlaceholder}>Введите запрос для поиска</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 35 : 0 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerLeft: { padding: 4, marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: '#000', paddingVertical: 8 },
  clearBtn: { padding: 4 },
  suggestions: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  suggestionsLabel: { fontSize: 14, color: '#888', marginBottom: 12 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tag: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  tagText: { fontSize: 15, color: '#333', fontWeight: '500' },
  resultsArea: { flex: 1, padding: 16, justifyContent: 'flex-start' },
  resultsPlaceholder: { fontSize: 15, color: '#999' },
  resultsHint: { fontSize: 15, color: '#666' },
});
