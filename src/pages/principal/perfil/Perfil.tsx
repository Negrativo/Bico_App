import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { UserSignedIn } from '../../../service/auth';

import styles from './StylePerfil';
import { UsuarioDTO } from '../../../dtos/UsuarioDTO';

export default function () {
  const [dadosLista, setDados] = useState('');
  const [hasErros, setHasErros] = useState(false);

  let User = UserSignedIn() as unknown as UsuarioDTO;

  function EditarUser(): void {
    throw new Error('Function not implemented.');
  }

  function solicitacaoUser(): void {
    throw new Error('Function not implemented.');
  }

  function logoutUser(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.formCabecalhoPerfil}>
          <Text style={styles.textNome}>{User?.nome}</Text>
        </View>
        <Text>__________________________</Text>
        <View style={styles.scrollContainer}>
          <View style={styles.formBottons}>
            <TouchableOpacity style={styles.buttonCadastro} onPress={() => EditarUser()}>
              <Text style={styles.textBottom}>Atualizar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastro} onPress={() => solicitacaoUser()}>
              <Text style={styles.textBottom}>Solicitações de serviço</Text>
            </TouchableOpacity>
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
