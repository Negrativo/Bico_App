/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../routes/stack/models/model';
import styles from './StyleTelaInicial';

const Login = () => {
  const video = require('../../../../assets/fundofinal.mp4');
  const logo = require('../../../../assets/BICO-3.png');
  const navigation = useNavigation<propsStack>();

  async function navigateLogin() {
    navigation.navigate('Login');
  }

  function navigateCadastro() {
    navigation.navigate('CadastroInicial');
  }

  function navigateEscolhaServico() {
    navigation.navigate('CadastroInicial');
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
              onPress={navigateEscolhaServico}
              style={styles.button}>
              <Text style={styles.labelEntrar}>Preciso de um profissional</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={navigateLogin}
              style={styles.button}>
              <Text style={styles.labelEntrar}>Sou prestador de serviço</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
};

export default Login;
