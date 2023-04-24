import React from 'react';
import Login from '../../pages/inicio/login/Login';
import CadastroInicial from '../../pages/inicio/cadastroInicial/CadastroInicial';
import CadastroFinal from '../../pages/inicio/cadastroFinal/CadastroFinal';
import TelaInicial from '../../pages/inicio/telaInicial/TelaInicial';
import ListaServicos from '../../pages/principal/listaServicos/ListaServicos';
import AgendamentoServico from '../../pages/principal/agendamento/AgendamentoServico';
import { propsNavigationStack } from './models/model';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './ButtomTabs';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TelaInicial" component={TelaInicial} />
      <Screen name="Login" component={Login} />
      <Screen name="CadastroInicial" component={CadastroInicial} />
      <Screen name="CadastroFinal" component={CadastroFinal} />
      <Screen
        name="Home"
        children={BottomTabs}
        options={{
          headerLeft: () => null,
          headerShown: false
        }}
      />
      <Screen name="ListaServicos" component={ListaServicos} />
      <Screen name="AgendamentoServico" component={AgendamentoServico} />
    </Navigator>
  );
}
