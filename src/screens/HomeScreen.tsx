import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyAppointments = [
  { id: '1', service: 'Haircut', date: '2023-05-15', time: '14:00' },
  { id: '2', service: 'Manicure', date: '2023-05-17', time: '10:30' },
  { id: '3', service: 'Massage', date: '2023-05-20', time: '16:00' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Appointments</Text>
      <FlatList
        data={dummyAppointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentItem}>
            <Text style={styles.serviceName}>{item.service}</Text>
            <Text>{item.date} at {item.time}</Text>
          </View>
        )}
      />
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
  appointmentItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

