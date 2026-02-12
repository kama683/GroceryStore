import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const StartScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.centerContent}>
        <Text style={styles.logoText}>habar.im</Text>
      </View>

      <SafeAreaView style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Вход</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerButtonText}>Регистрация</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1DBF73', justifyContent: 'center' }, // Зеленый цвет бренда
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoText: { fontSize: 42, fontWeight: 'bold', color: '#FFF', letterSpacing: -1 },
  
  bottomContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  loginButton: { 
    backgroundColor: '#FFF', 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 15 
  },
  loginButtonText: { color: '#1DBF73', fontSize: 16, fontWeight: 'bold' },
  
  registerButton: { 
    backgroundColor: 'transparent', 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: '#FFF' 
  },
  registerButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});