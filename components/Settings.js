import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Settings = ({ navigation }) => {
  const [name, setName] = useState('User');
  const [newName, setNewName] = useState('');

  const handleNameChange = () => {
    if (newName.trim() === '') {
      Alert.alert('Validation Error', 'Name cannot be empty');
      return;
    }
    setName(newName);
    setNewName('');
    Alert.alert('Success', 'Name updated successfully!');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Welcome, {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new name"
        value={newName}
        onChangeText={setNewName}
      />
      <Button title="Save Name" onPress={handleNameChange} color="#28A745" />
      <Button title="Logout" onPress={handleLogout} color="#DC3545" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Settings;
