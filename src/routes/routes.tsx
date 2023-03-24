import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './stack/navigation';

export default function () {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
