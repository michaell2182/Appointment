import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

interface CategoryButtonProps {
  category: { id: string; name: string };
  isSelected: boolean;
  onPress: () => void;
}

export default function CategoryButton({ category, isSelected, onPress }: CategoryButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MotiView
        animate={{
          backgroundColor: isSelected ? '#007AFF' : '#f0f0f0',
          scale: isSelected ? 1.05 : 1,
        }}
        transition={{ type: 'timing', duration: 300 }}
        style={styles.categoryButton}
      >
        <Text style={[
          styles.categoryText,
          isSelected && styles.selectedCategoryText
        ]}>
          {category.name}
        </Text>
      </MotiView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: '600',
  },
});

