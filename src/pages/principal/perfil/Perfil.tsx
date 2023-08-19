import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './StylePerfil';
import { useUser } from '../../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../routes/stack/models/model';

export default function () {
  const { user, setUser, LogoutUser } = useUser();
  const navigation = useNavigation<propsStack>();

  function EditarUser(): void {
    throw new Error('Function not implemented.');
  }

  function solicitacaoUser(): void {
    navigation.navigate('SolicitacoesServico');
  }

  function logoutUser(): void {
    LogoutUser();
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.formCabecalhoPerfil}>
          <Text style={styles.textNome}>{user?.nome}</Text>
        </View>
        <Text style={styles.Text}>__________________________</Text>
        <View style={styles.scrollContainer}>
          <View style={styles.formBottons}>
            {(!!user && user?.servicos.length > 0)
              ?
              <TouchableOpacity style={styles.buttonCadastro} onPress={() => solicitacaoUser()}>
                <Text style={styles.textBottom}>Solicitações de serviço</Text>
              </TouchableOpacity>
              :
              <></>
            }
            <TouchableOpacity style={styles.buttonCadastro}>
              <Text style={styles.textBottom}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastro} onPress={() => logoutUser()}>
              <Text style={styles.textBottom}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
