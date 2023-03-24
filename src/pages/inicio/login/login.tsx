/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import {Formik} from 'formik';
import styles from './styleLogin';

import ValidateLogin from '../../../components/schema/LoginSchema';
// import {useAuth} from '../../../context/AuthContext';

const Login = () => {
  // const navigation = useNavigation<propsStack>();
  // const {Login} = useAuth();

  async function handleSubmitCadastro() {
    // navigation.navigate('Cadastro');
  }

  // function handleLogin(email: string, senha: string) {
  //   Login(email, senha);
  // }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: '', error: ''}}
        validationSchema={ValidateLogin}
        onSubmit={(values, {}) => {
          let email = values.email;
          let senha = values.senha;
          console.log(email, senha);
          // handleLogin(email, senha);
        }}>
        {props => (
          <View style={styles.image}>
            <Video
              source={require('../../../../assets/fundofinal.mp4')}
              style={styles.video}
              resizeMode="cover"
              repeat={true}
              muted={true}
            />
            <Image
              source={require('../../../../assets/BICO-3.png')}
              style={styles.logo}
            />
            <View style={styles.formLogin}>
              <Text style={styles.label}>LOGIN</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  textContentType="emailAddress"
                  placeholder="E-mail"
                  placeholderTextColor="#FFFFFF"
                  keyboardType="email-address"
                  autoComplete="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={props.values.email}
                  onChangeText={text => props.setFieldValue('email', text)}
                />
                {props.dirty && props.errors.email && (
                  <Text style={styles.errors}>{props.errors.email}</Text>
                )}
              </View>

              <Text style={styles.label}>SENHA</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  textContentType="password"
                  secureTextEntry={true}
                  placeholder="Senha"
                  placeholderTextColor="#D9DBDC"
                  autoComplete="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={props.values.senha}
                  onChangeText={text => props.setFieldValue('senha', text)}
                />
                {props.dirty && props.errors.senha && (
                  <Text style={styles.errors}>{props.errors.senha}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                {props.errors.error && (
                  <Text style={styles.errors}>{props.errors.error}</Text>
                )}
                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={styles.button}>
                  <Text style={styles.labelEntrar}>ENTRAR</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.labelBorder}>
                <Text style={styles.labelEntrar}>Esqueceu sua senha?</Text>
              </TouchableOpacity>

              <Text style={styles.labelCadastro}>
                Ainda não possui cadastro? Crie um
                <Text onPress={handleSubmitCadastro} style={styles.labelBold}>
                  {' '}
                  clicando aqui
                </Text>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
