import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Stack from './stack/navigation';
import { UserProvider } from '../context/AuthContext';

export default function () {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack />
        <Toast />
      </NavigationContainer>
    </UserProvider>

  );
}
