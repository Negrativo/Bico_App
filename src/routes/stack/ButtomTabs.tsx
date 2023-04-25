
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Perfil from '../../pages/principal/perfil/Perfil';
import CategoriasServico from '../../pages/principal/categoriasServico/CategoriasServico';
import { propsNavigationStack } from './models/model';

const { Navigator, Screen } = createMaterialBottomTabNavigator<propsNavigationStack>();

export default function BottomTabs() {
  return (
    <Navigator barStyle={{ backgroundColor: '#000000' }}>
      <Screen
        name="CategoriaServico"
        component={CategoriasServico}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"#EDEDED"} size={26} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={"#EDEDED"} size={26} />
          ),
        }}
      />
    </Navigator>
  )
}