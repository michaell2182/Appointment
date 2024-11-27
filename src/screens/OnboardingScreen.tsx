import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useAuth } from '../contexts/AuthContext';

const UserTypeScreen = ({ onSelect }) => (
  <Animated.View 
    entering={FadeIn}
    exiting={FadeOut}
    style={styles.screen}
  >
    <Text style={styles.title}>How will you use the app?</Text>
    <TouchableOpacity 
      style={styles.optionButton}
      onPress={() => onSelect('business')}
    >
      <Text style={styles.optionTitle}>Business Owner</Text>
      <Text style={styles.optionDescription}>I want to manage appointments for my business</Text>
    </TouchableOpacity>

    <TouchableOpacity 
      style={styles.optionButton}
      onPress={() => onSelect('professional')}
    >
      <Text style={styles.optionTitle}>Independent Professional</Text>
      <Text style={styles.optionDescription}>I provide services and want to manage my bookings</Text>
    </TouchableOpacity>

    <TouchableOpacity 
      style={styles.optionButton}
      onPress={() => onSelect('client')}
    >
      <Text style={styles.optionTitle}>Client</Text>
      <Text style={styles.optionDescription}>I want to book services</Text>
    </TouchableOpacity>
  </Animated.View>
);

const BusinessTagsScreen = ({ onComplete }) => {
  const tags = [
    'Barbershop', 'Hair Salon', 'Spa', 'Nail Salon',
    'Fitness Studio', 'Medical Clinic', 'Dental Office',
    'Restaurant', 'Other'
  ];

  return (
    <Animated.View 
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.screen}
    >
      <Text style={styles.title}>Select your business type</Text>
      <ScrollView style={styles.tagsContainer}>
        {tags.map((tag) => (
          <TouchableOpacity 
            key={tag}
            style={styles.tagButton}
            onPress={() => onComplete(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(null);
  const { login } = useAuth();

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    if (type === 'client') {
      completeOnboarding('client');
    } else {
      setStep(2);
    }
  };

  const completeOnboarding = async (businessType) => {
    await login({
      userType,
      businessType,
      onboardingComplete: true
    });
  };

  return (
    <View style={styles.container}>
      {step === 1 && <UserTypeScreen onSelect={handleUserTypeSelect} />}
      {step === 2 && <BusinessTagsScreen onComplete={completeOnboarding} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  optionDescription: {
    color: '#666',
  },
  tagsContainer: {
    flex: 1,
  },
  tagButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 16,
    textAlign: 'center',
  },
}); 