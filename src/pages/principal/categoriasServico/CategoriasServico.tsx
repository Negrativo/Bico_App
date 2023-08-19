import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, FlatList, SafeAreaView } from 'react-native';
import { propsStack } from '../../../routes/stack/models/model';
import { empregos } from '../../../data/empregos';
import CategoriasEmpregosComponent from '../../../components/categoriasEmpregos/CategoriasEmpregosComponent';
import styles from './StyleCategoriaServico';

export default function () {
  const iconPesquisa = require('../../../../assets/pesquisar.png');
  const reformaReparo = require('../../../../assets/icon_empregos/reformas-reparos.png');
  const suporteTecnico = require('../../../../assets/icon_empregos/assistencia-tecnica.png');
  const servicoDomestico = require('../../../../assets/icon_empregos/servicos-domesticos.png');
  const consultoria = require('../../../../assets/icon_empregos/consultoria.png');
  const autos = require('../../../../assets/icon_empregos/mecanica.png');
  const eventos = require('../../../../assets/icon_empregos/eventos.png');

  const navigation = useNavigation<propsStack>();

  function getImagemCategoria(image: string) {
    switch (image) {
      case "reformaReparo":
        return reformaReparo;
      case "suporteTecnico":
        return suporteTecnico;
      case "servicoDomestico":
        return servicoDomestico;
      case "consultoria":
        return consultoria;
      case "autos":
        return autos;
      case "eventos":
        return eventos;
      default:
        return require('../../../../assets/pesquisar.png');
    }
  }

  function acessaServicos(listaServicos: string[]) {
    navigation.navigate('ListaServicos', { listaServicos });
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
              foto={getImagemCategoria(item.imagem)}
            />
          )}
        />
      </SafeAreaView>

    </SafeAreaView>
  );

}