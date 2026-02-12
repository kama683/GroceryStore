import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/Root'; // Проверь, что путь правильный!

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      
      <RootNavigator />
    </View>
  );
}