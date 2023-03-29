import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from './models/model';

import Login from '../../pages/inicio/login/Login';
import CadastroInicial from '../../pages/inicio/cadastroInicial/CadastroInicial';
import CadastroFinal from '../../pages/inicio/cadastroFinal/CadastroFinal';
import TelaInicial from '../../pages/inicio/telaInicial/TelaInicial';
import CategoriasServico from '../../pages/principal/categoriasServico/CategoriasServico';
import ListaServicos from '../../pages/principal/listaServicos/ListaServicos';
import AgendamentoServico from '../../pages/principal/agendamento/AgendamentoServico';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="TelaInicial" component={TelaInicial} />
      <Screen name="Login" component={Login} />
      <Screen name="CadastroInicial" component={CadastroInicial} />
      <Screen name="CadastroFinal" component={CadastroFinal} />
      <Screen name="CategoriaServico" component={CategoriasServico} />
      <Screen name="ListaServicos" component={ListaServicos} />
      <Screen name="AgendamentoServico" component={AgendamentoServico} />
    </Navigator>
  );
}
