import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import { ListaEmpregoDTO } from '../../dtos/ListaEmpregosDTO';
import { BarraPesquisaProps } from './BarraPesquisaProps';
import styles from './StyleBarraPesquisaComponent';

export default function Pesquisa(props: BarraPesquisaProps) {
  const iconPesquisa = require('../../../assets/pesquisar.png');
  const [Search, setSearch] = useState('');
  const listaEmpregos = props.Lista;
  const placeholder = props.placeholder;

  function selecionado(nome: string) {
    props.selecionaProfissao(nome);
  }

  return (
    <View style={styles.formComponente}>
      <View style={styles.formBarraPesquisa}>
        <TextInput
          style={styles.barraPesquisa}
          onChangeText={setSearch}
          placeholder={placeholder}
        />
        <Image source={iconPesquisa} style={styles.iconPesquisa} />
      </View>
      <ScrollView>
        {
          !(Search === '')
          && listaEmpregos
            .filter((list: ListaEmpregoDTO) =>
              list.nome
                .toLowerCase()
                .includes(Search.toLowerCase()))
            .map((list: ListaEmpregoDTO, index: number) => (
              <View key={index} style={styles.itensPesquisa}>
                <TouchableOpacity key={index} style={styles.botaoSelecao} onPress={() => selecionado(list.nome)}>
                  <Text style={styles.textoOpcao}>{list.nome}</Text>
                </TouchableOpacity>
              </View>
            ))
        }
      </ScrollView>
    </View>

  );
}