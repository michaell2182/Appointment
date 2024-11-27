import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const dummyTimeSlots = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
];

export default function BookingScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    console.log('Booking for:', selectedDate, selectedTime);
    // Implement booking logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#007AFF' },
        }}
      />
      {selectedDate && (
        <View style={styles.timeSlotContainer}>
          <Text style={styles.subtitle}>Available Time Slots</Text>
          <FlatList
            data={dummyTimeSlots}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeSlot,
                  selectedTime === item && styles.selectedTimeSlot,
                ]}
                onPress={() => handleTimeSelect(item)}
              >
                <Text style={styles.timeSlotText}>{item}</Text>
              </TouchableOpacity>
            )}
            horizontal
          />
        </View>
      )}
      {selectedDate && selectedTime && (
        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  timeSlotContainer: {
    marginTop: 20,
  },
  timeSlot: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedTimeSlot: {
    backgroundColor: '#007AFF',
  },
  timeSlotText: {
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

