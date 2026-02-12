// src/components/PostCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Используем стандартные иконки

const { width } = Dimensions.get('window');

interface PostCardProps {
  data: any; // В реальном проекте здесь будет интерфейс Post
  onPress: () => void;
  onUserPress?: () => void;
  onShopPress?: () => void;
}

export const PostCard = ({ data, onPress, onUserPress, onShopPress }: PostCardProps) => {
  return (
    <View style={styles.cardContainer}>
      {/* 1. Header: Avatar + Name — клик ведёт на профиль */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.userInfo} 
          onPress={onUserPress} 
          activeOpacity={0.7}
          disabled={!onUserPress}
        >
          <Image source={{ uri: data.user.avatar }} style={styles.avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.userName}>{data.user.name}</Text>
            <Text style={styles.timeAgo}>{data.user.timeAgo || data.timeAgo || '3 мин назад'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* 2. Content Text */}
      <Text style={styles.contentText} numberOfLines={2}>
        {data.content}
      </Text>

      {/* 3. Main Image */}
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <Image source={{ uri: data.image }} style={styles.productImage} />
      </TouchableOpacity>

      {/* 4. Product Info Block */}
      <View style={styles.detailsContainer}>
        <View style={styles.rowBetween}>
          <Text style={styles.productName}>{data.product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currency}>{data.product.currency}</Text>
            <Text style={styles.priceValue}>{data.product.price}</Text>
            <Text style={styles.unit}> / {data.product.unit}</Text>
          </View>
        </View>
        
        <Text style={styles.category}>{data.product.category}</Text>
        
        <TouchableOpacity onPress={onShopPress} activeOpacity={0.7} disabled={!onShopPress}>
          <Text style={styles.shopName}>{data.shop.name}</Text>
        </TouchableOpacity>
      </View>

      {/* 5. Footer Stats */}
      <View style={styles.footer}>
        <View style={styles.statItem}>
          <Ionicons name="chatbubble-outline" size={20} color="#666" />
          <Text style={styles.statText}>{data.stats.comments}</Text>
        </View>
        
        <View style={styles.statItem}>
          <Feather name="thumbs-up" size={20} color="#666" />
          <Text style={styles.statText}>{data.stats.likes}</Text>
        </View>

        <View style={styles.statItem}>
          <Feather name="thumbs-down" size={20} color="#666" />
          <Text style={styles.statText}>{data.stats.dislikes}</Text>
        </View>

        <View style={[styles.statItem, { marginLeft: 'auto' }]}>
           {/* Иконка галочки в квадрате как на скрине */}
          <Feather name="check-square" size={20} color="#666" /> 
          <Text style={styles.statText}>{data.stats.views}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 16,
    borderBottomWidth: 1, // Легкое разделение постов
    borderBottomColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  timeAgo: {
    fontSize: 12,
    color: '#888',
  },
  contentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 12, // Скругление как на макете
    marginBottom: 12,
  },
  detailsContainer: {
    marginBottom: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2ECC71', // Фирменный зеленый цвет цены
  },
  priceValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2ECC71',
    marginHorizontal: 2,
  },
  unit: {
    fontSize: 16,
    color: '#888',
    fontWeight: '400',
  },
  category: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  shopName: {
    fontSize: 14,
    color: '#2ECC71', // Зеленый цвет магазина
    marginTop: 8,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  statText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
});