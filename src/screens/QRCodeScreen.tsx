import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useAuth } from '../contexts/AuthContext'; // Assume you have an auth context

export default function QRCodeScreen() {
  const { user } = useAuth();
  const bookingUrl = `https://yourbookingapp.com/book/${user.id}`; // Replace with your actual booking URL

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Booking QR Code</Text>
      <View style={styles.qrContainer}>
        <QRCode
          value={bookingUrl}
          size={200}
        />
      </View>
      <Text style={styles.instructions}>
        Show this QR code to your clients for quick booking access.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
  },
}); 