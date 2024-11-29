import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const BrowserFeature = () => {
  const [location, setLocation] = useState(null);

  const getLiveLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        Alert.alert('Error', 'Unable to retrieve location. Check your settings.');
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location and Address Finder</Text>
      <Button title="Get Live Location" onPress={getLiveLocation} color="#007BFF" />
      {location && (
        <View style={styles.locationContainer}>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  locationContainer: {
    marginTop: 20,
  },
});

export default BrowserFeature;
