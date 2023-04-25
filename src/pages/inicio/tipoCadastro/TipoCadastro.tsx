/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../routes/stack/models/model';
import styles from './StyleTipoCadastro';

const TipoCadastro = () => {
  const video = require('../../../../assets/fundofinal.mp4');
  const logo = require('../../../../assets/BICO-3.png');
  const navigation = useNavigation<propsStack>();

  async function navigateCadastroSemProfissao() {
    navigation.navigate('CadastroInicial', { isCadastroProfissional: false });
  }

  function navigateCadastroProfissional() {
    navigation.navigate('CadastroInicial', { isCadastroProfissional: true });
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Video
          source={video}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          muted={true}
        />
        <Image
          source={logo}
          style={styles.logo}
        />
        <View style={styles.formLogin}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={navigateCadastroSemProfissao}
              style={styles.button}>
              <Text style={styles.labelEntrar}>Estou buscando um profissional</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={navigateCadastroProfissional}
              style={styles.button}>
              <Text style={styles.labelEntrar}>Sou prestador de serviço</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TipoCadastro;
