import React, { useState } from 'react';
import { View, Button, StyleSheet, Platform, Image, Alert } from 'react-native';
import Webcam from 'react-webcam';

const CameraComponent = () => {
  const [image, setImage] = useState(null);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          style={styles.camera}
          onUserMediaError={() => Alert.alert('Error', 'Camera not accessible')}
        />
        <Button
          title="Capture Photo"
          onPress={() => Alert.alert('Web Camera Capture Not Implemented')}
        />
      </View>
    );
  }

  return <View><Text>Native Camera Placeholder</Text></View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%' },
});

export default CameraComponent;
