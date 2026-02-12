import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Картинки для слайдера (заглушки)
const SLIDES = [
  { id: 1, image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop', title: 'Свежие фрукты' },
  { id: 2, image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=800&auto=format&fit=crop', title: 'Овощи с грядки' },
  { id: 3, image: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=800&auto=format&fit=crop', title: 'Натуральные продукты' },
];

export const OnboardingScreen = () => {
  const navigation = useNavigation<any>();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < SLIDES.length - 1) {
      setStep(step + 1);
    } else {
      // Это был последний слайд, переходим в главное приложение
      finishOnboarding();
    }
  };

  const finishOnboarding = () => {
    // Сбрасываем стек навигации и ставим MainTab как корень
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTab' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Добро{"\n"}пожаловать</Text>

        <View style={styles.imageContainer}>
          <Image source={{ uri: SLIDES[step].image }} style={styles.image} resizeMode="cover" />
        </View>
        
        {/* Индикаторы (точки) */}
        <View style={styles.dotsContainer}>
          {SLIDES.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.dot, 
                index === step ? styles.dotActive : styles.dotInactive
              ]} 
            />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.skipButton} onPress={finishOnboarding}>
          <Text style={styles.skipText}>Пропустить</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Далее</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { padding: 20 },
  content: { flex: 1, paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 30, color: '#000' },
  imageContainer: { 
    flex: 1, backgroundColor: '#FFF', borderRadius: 20, marginBottom: 20,
    overflow: 'hidden', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10
  },
  image: { width: '100%', height: '100%' },
  
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 4 },
  dotActive: { backgroundColor: '#1DBF73' },
  dotInactive: { backgroundColor: '#CCC', borderWidth: 1, borderColor: '#1DBF73' }, // Пустые кружочки как на скрине

  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 30 },
  skipButton: { padding: 15, backgroundColor: '#E0E0E0', borderRadius: 12 },
  skipText: { fontWeight: '600', color: '#000' },
  nextButton: { paddingHorizontal: 30, paddingVertical: 15, backgroundColor: '#1DBF73', borderRadius: 12 },
  nextText: { fontWeight: 'bold', color: '#FFF' },
});