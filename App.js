import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import Profile from './components/Profile';
import BrowserFeature from './components/BrowserFeature';
import DataList from './components/DataList';
import Settings from './components/Settings';
import Camera from './components/Camera.web';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BrowserFeature" component={BrowserFeature} />
        <Stack.Screen name="DataList" component={DataList} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
