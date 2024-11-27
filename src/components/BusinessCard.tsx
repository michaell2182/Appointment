import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';

interface BusinessCardProps {
  business: {
    id: string;
    name: string;
    category: string;
    rating: number;
    distance: string;
    image: string;
    priceRange: string;
  };
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}
      style={styles.businessCard}
    >
      <Image
        source={{ uri: business.image }}
        style={styles.businessImage}
      />
      <View style={styles.businessInfo}>
        <View style={styles.businessHeader}>
          <Text style={styles.businessName}>{business.name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{business.rating}</Text>
          </View>
        </View>
        <Text style={styles.category}>{business.category}</Text>
        <View style={styles.businessFooter}>
          <Text style={styles.price}>{business.priceRange}</Text>
          <Text style={styles.distance}>{business.distance}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  businessCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  businessImage: {
    width: '100%',
    height: 200,
  },
  businessInfo: {
    padding: 12,
  },
  businessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  businessName: {
    fontSize: 18,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  businessFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  distance: {
    fontSize: 14,
    color: '#666',
  },
});

