import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { getPostById, getUserById, getShopById } from '../../data/mockData';

export const PostDetailsScreen = ({ navigation, route }: any) => {
  const postId = route?.params?.postId;
  const post = getPostById(postId);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Ionicons name="close" size={24} color="#000" onPress={() => navigation.goBack()} />
        <Feather name="more-horizontal" size={24} color="#000" />
      </View>

      <View style={{padding: 16}}>
        <TouchableOpacity 
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}} 
          onPress={() => post?.user?.id && navigation.navigate('UserProfile', { userId: post.user.id })}
          activeOpacity={0.7}
        >
           <Image source={{uri: post.user?.avatar}} style={{width: 40, height: 40, borderRadius: 20}} />
           <Text style={{marginLeft: 10, fontWeight: 'bold'}}>{post.user?.name}</Text>
        </TouchableOpacity>

        <Text style={{marginBottom: 15}}>{post.content}</Text>
        <Image source={{uri: post.image}} style={{width: '100%', height: 250, borderRadius: 12, marginBottom: 15}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{post.product?.name}</Text>
                {post.shop?.id && (
                  <TouchableOpacity onPress={() => navigation.navigate('ShopDetails', { shopId: post.shop.id })} activeOpacity={0.7}>
                    <Text style={{color: '#2ECC71', fontSize: 16, marginTop: 5}}>{post.shop.name}</Text>
                  </TouchableOpacity>
                )}
            </View>
            <View style={{backgroundColor: '#E8E8E8', padding: 8, borderRadius: 8}}>
                <Text style={{fontWeight: 'bold'}}>Подтверждено {post.product.price} ₸</Text>
            </View>
        </View>

        {/* Action Buttons */}
        <View style={{flexDirection: 'row', marginTop: 20, gap: 20}}>
            <Feather name="message-circle" size={24} color="#000" />
            <Feather name="upload" size={24} color="#000" />
            <Feather name="bookmark" size={24} color="#000" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 40 }
});