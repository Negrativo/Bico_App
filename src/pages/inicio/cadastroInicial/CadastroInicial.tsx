import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Formik } from 'formik';

import api from '../../../service/api';

import ValidateCadastro from '../../../components/schema/CadastroSchema';

import styles from './StyleCadastroInicial';
import { propsStack } from '../../../routes/stack/models/model';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../../service/loginService/LoginService';
import { Button } from 'react-native';
import { UsuarioByIdDTO } from '../../../dtos/UsuarioDTO';

export default function ({ }) {
  const logo = require('../../../../assets/BICO-3.png');
  const navigation = useNavigation<propsStack>();
  const [mensagemModal, setMensagemModal] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };


  function cadastrarUsuario(nome: string, email: string, telefone: string, senha: string) {

    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>

      <Formik
        initialValues={{ nome: '', email: '', senha: '', senha2: '', telefone: '', error: '' }}
        validationSchema={ValidateCadastro}
        onSubmit={(values, { setErrors }) => {
          const nome = values.nome;
          const email = values.email;
          const telefone = values.telefone;
          const senha = values.senha;
          const usuario = login(email, senha) as unknown as UsuarioByIdDTO;
          console.log(usuario)
          if (!!usuario.nome) {
            console.log('Usuario já cadastrado');
            setMensagemModal('Usuário já cadastrado');
            showModal()
          } else {
            cadastrarUsuario(nome, email, telefone, senha);
            setMensagemModal('Cadastrado com sucesso');
            showModal();
            navigation.navigate('Login');
          };
        }}
      >
        {(props) => (
          <View style={styles.image}>

            <Image
              source={logo}
              style={styles.logo}
            />

            <Modal isVisible={isModalVisible}>
              <View>
                <Text>{mensagemModal}</Text>
                <Button title="Fechar" onPress={hideModal} />
              </View>
            </Modal>

            <View style={styles.form} >
              <Text style={styles.label}>NOME</Text>
              <TextInput
                style={styles.input}
                textAlign="center"
                textContentType='emailAddress'
                placeholder="Nome completo"
                placeholderTextColor="#D9DBDC"
                autoCapitalize="none"
                autoCorrect={false}
                value={props.values.nome}
                onChangeText={text => props.setFieldValue('nome', text)}
              />
              {props.dirty && props.errors.nome && <Text style={styles.errors}>{props.errors.nome}</Text>}
            </View>


            <View style={styles.form} >
              <Text style={styles.label}>E-MAIL</Text>
              <TextInput
                style={styles.input}
                textAlign="center"
                textContentType='emailAddress'
                placeholder="E-mail"
                placeholderTextColor="#D9DBDC"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect={false}
                value={props.values.email}
                onChangeText={text => props.setFieldValue('email', text)}
              />
              {props.dirty && props.errors.email && <Text style={styles.errors}>{props.errors.email}</Text>}
            </View>


            <View style={styles.form} >
              <Text style={styles.label}>SENHA</Text>
              <TextInput
                style={styles.input}
                textAlign="center"
                textContentType='password'
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#D9DBDC"
                autoComplete="password"
                autoCapitalize="none"
                autoCorrect={false}
                value={props.values.senha}
                onChangeText={text => props.setFieldValue('senha', text)}
              />
              {props.dirty && props.errors.senha && <Text style={styles.errors}>{props.errors.senha}</Text>}
            </View>


            <View style={styles.form} >
              <Text style={styles.label}>CONFIRMAR SENHA SENHA</Text>
              <TextInput
                style={styles.input}
                textAlign="center"
                textContentType='password'
                secureTextEntry={true}
                placeholder="Confirmar Senha"
                placeholderTextColor="#D9DBDC"
                autoComplete="password"
                autoCapitalize="none"
                autoCorrect={false}
                value={props.values.senha2}
                onChangeText={text => props.setFieldValue('senha2', text)}
              />
              {props.dirty && props.errors.senha2 && <Text style={styles.errors}>{props.errors.senha2}</Text>}
            </View>

            {props.errors.error && <Text style={styles.errorCadastro}>{props.errors.error}</Text>}
            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.cadastrar}>CADASTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.labelCadastro}>Ao clicar em cadastrar você concorda com os
              <TouchableOpacity>
                <Text style={styles.labelBold}>TERMOS DE USO</Text>
              </TouchableOpacity>
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}