import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const Profile = ({ navigation }) => {
  const userName = 'User';

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {userName} to your wall</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Address and Location"
          onPress={() => navigation.navigate('BrowserFeature')}
          color="#007BFF"
        />
        <Button
          title="Camera"
          onPress={() => navigation.navigate('Camera')}
          color="#28A745"
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
          color="#FFC107"
        />
        <Button title="Log Out" onPress={handleLogout} color="#DC3545" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default Profile;
