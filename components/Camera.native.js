import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraComponent = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const [photo, setPhoto] = useState(null);

  if (!device) {
    return <View style={styles.container}><Text>Loading Camera...</Text></View>;
  }

  const capturePhoto = async () => {
    try {
      const permission = await Camera.requestCameraPermission();
      if (permission === 'denied') {
        Alert.alert('Permission Denied', 'Camera access is required.');
        return;
      }
      const photo = await device.takePhoto();
      setPhoto(photo.path);
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo.');
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} device={device} isActive={true} />
      <Button title="Capture Photo" onPress={capturePhoto} />
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%' },
  photo: { width: 200, height: 200, marginTop: 10 },
});

export default CameraComponent;
