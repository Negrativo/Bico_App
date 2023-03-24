import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from './models/model';

import Login from '../../pages/inicio/login/login';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
