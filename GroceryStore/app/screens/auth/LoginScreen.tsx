import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [phone, setPhone] = useState('+7 700 900 8000');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Вход</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Телефон</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Пароль" placeholderTextColor="#999" secureTextEntry />
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Onboarding')} 
        >
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
           <Text style={styles.linkText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { padding: 20 },
  content: { flex: 1, paddingHorizontal: 20, paddingBottom: 30 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 30 },
  inputContainer: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 15 },
  label: { fontSize: 12, color: '#999', marginBottom: 5 },
  input: { fontSize: 16, fontWeight: '500', color: '#000' },
  button: { backgroundColor: '#1DBF73', paddingVertical: 18, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  linkButton: { alignItems: 'center' },
  linkText: { color: '#000', fontSize: 16, fontWeight: '500' }
});
