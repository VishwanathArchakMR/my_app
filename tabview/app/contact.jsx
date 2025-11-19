import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const contacts = [
  {
    name: 'GitHub',
    value: 'VishwanathArchakMR',
    url: 'https://github.com/VishwanathArchakMR'
  },
  {
    name: 'LinkedIn',
    value: 'in/vishwanatharchakmr',
    url: 'https://linkedin.com/in/vishwanath-archak-m-r' // update with actual LinkedIn handle if available
  },
  {
    name: 'Instagram',
    value: 'vishwanath.archak', // update if you have a different username
    url: 'https://instagram.com/fuelup_with_mr.archak'
  },
  {
    name: 'X (Twitter)',
    value: 'v_archak',
    url: 'https://x.com/ArchakR59598'
  },
  {
    name: 'YouTube',
    value: 'Vishwanath Archak',
    url: 'https://www.youtube.com/@FuelupwithMr.Archak' // update with actual channel
  },
  {
    name: 'Email',
    value: 'vishwanatharchakmr@gmail.com',
    url: 'mailto:vishwanath.archakmr@gmail.com'
  }
];

export default function Contact() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.header}>Contact Me</Text>
        {contacts.map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.item} onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.label}>{item.name}:</Text>
            <Text style={styles.value}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 24,
  },
  header: {
    fontSize: 28,
    color: '#0b67df',
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center'
  },
  item: {
    marginBottom: 24,
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 16,
    flexDirection: "column",
    shadowColor: '#222',
    shadowOpacity: 0.07,
    shadowRadius: 7,
    elevation: 2,
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: '#333'
  }
});
