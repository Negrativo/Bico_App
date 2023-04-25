import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';

import styles from './StylePerfil';
import { useUser } from '../../../context/AuthContext';

export default function () {
  const { user, setUser } = useUser();

  function EditarUser(): void {
    throw new Error('Function not implemented.');
  }

  function solicitacaoUser(): void {
    throw new Error('Function not implemented.');
  }

  function logoutUser(): void {
    setUser(null);
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
