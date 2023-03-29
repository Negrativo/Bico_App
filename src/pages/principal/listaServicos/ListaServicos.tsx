import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { AgendamentoServicoParams, CadastroFinalParams, ListaServicosParams, propsStack } from '../../../routes/stack/models/model';
import navigation from '../../../routes/stack/navigation';
import styles from './StyleListaServicos';


export default function () {
  const iconPesquisa = require('../../../../assets/pesquisar.png');
  const params = useRoute();
  const navigation = useNavigation<propsStack>();

  const ListaServicos: ListaServicosParams = params.params as unknown as ListaServicosParams;

  function toAgendamentoServico(servicoSelecionado: string) {
    navigation.navigate('AgendamentoServico', { servicoSelecionado });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textoCategorias}>Serviços da categoria selecionada</Text>
      <View style={styles.formBarraPesquisa}>
        <TextInput
          style={styles.barraPesquisa}
          textAlign="left"
          placeholderTextColor="#000000"
          placeholder="Pesquisar">
        </TextInput>
        <Image source={iconPesquisa} style={styles.imagem} />
      </View>

      <SafeAreaView style={styles.formNavegacaoPrincipal}>
        <FlatList
          data={ListaServicos.listaServicos}
          keyExtractor={dadosLista => dadosLista}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toAgendamentoServico(item)} style={styles.containerListaServicos}>
              <View style={styles.contornoDadosLista}>
                <Text style={styles.Text}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>

    </SafeAreaView>
  );

}