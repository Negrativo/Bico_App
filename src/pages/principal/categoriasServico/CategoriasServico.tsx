import { useNavigation } from '@react-navigation/native';
import React, { useState, useLayoutEffect } from 'react';
import { View, Image, Text, TextInput, FlatList, SafeAreaView } from 'react-native';
import CategoriasEmpregosComponent from '../../../components/categoriasEmpregos/CategoriasEmpregosComponent';

import { useAuth } from '../../../context/AuthContext';
import { propsStack } from '../../../routes/stack/models/model';
import api from '../../../service/api';
import styles from './StyleCategoriaServico';


export default function () {
  const iconPesquisa = require('../../../../assets/pesquisar.png');
  const empregos = require('../../../data/empregos');

  const navigation = useNavigation<propsStack>();

  function acessaServicos(servicosCategoria: any) {
    // navigation.navigate('Lista Serviços', { servicosCategoria });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formBarraPesquisa}>
        <TextInput
          style={styles.barraPesquisa}
          textAlign="left"
          placeholderTextColor="#000000"
          placeholder="Pesquisar">
        </TextInput>
        <Image source={iconPesquisa} style={styles.imagem} />
      </View>

      <Text style={styles.textoCategorias}>Categorias</Text>

      <SafeAreaView style={styles.formNavegacaoPrincipal}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={empregos}
          keyExtractor={dadosLista => dadosLista._id}
          maxToRenderPerBatch={10}
          renderItem={({ item }) => (
            <CategoriasEmpregosComponent
              onPress={() => acessaServicos(item.Servicos)}
              nome={item.nome}
              foto={item.imagem}
            />
          )}
        />
      </SafeAreaView>

    </SafeAreaView>
  );

}