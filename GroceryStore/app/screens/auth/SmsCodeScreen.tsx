import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const SmsCodeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Введите смс-код</Text>

        <View style={styles.codeContainer}>
          <View style={styles.codeBox}><Text style={styles.codeText}>6</Text></View>
          <View style={styles.codeBox}><Text style={styles.codeText}>4</Text></View>
          <View style={[styles.codeBox, styles.emptyBox]} />
          <View style={[styles.codeBox, styles.emptyBox]} />
        </View>

        <Text style={styles.timerText}>Отправить смс-код повторно через 00:30 секунд</Text>

        <View style={{ flex: 1 }} />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Onboarding')}
        >
          <Text style={styles.buttonText}>Далее</Text>
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
  codeContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  codeBox: { width: 70, height: 80, backgroundColor: '#FFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  emptyBox: { backgroundColor: '#FFF' },
  codeText: { fontSize: 32, fontWeight: '500' },
  timerText: { color: '#999', fontSize: 13, textAlign: 'center' },
  button: { backgroundColor: '#1DBF73', paddingVertical: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});