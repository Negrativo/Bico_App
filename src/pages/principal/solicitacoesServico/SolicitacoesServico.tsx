import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';

import styles from './StyleSolicitacoesServico';

export default function () {
  const [dadosLista, setDados] = useState('');
  const [hasErros, setHasErros] = useState(true);


  return (
    <View style={styles.container}>
      <Text>Solicitações de serviços</Text>
      <View>
        {(hasErros === false)
          ?
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dadosLista}
            keyExtractor={dadosLista => dadosLista.toString()}
            renderItem={({ item }) => (
              <>
              </>
            )}
          />
          :
          <View>
            <Text style={styles.Text}>Não encontrado histórico</Text>
          </View>
        }
      </View>
    </View>
  );
}