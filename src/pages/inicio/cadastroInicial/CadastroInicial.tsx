import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Formik } from 'formik';
import styles from './StyleCadastroInicial';
import { TipoCadastroParams, propsStack } from '../../../routes/stack/models/model';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'react-native';
import { cadastrarUsuario } from '../../../service/usuarioService/UsuarioService';
import MaskInput, { Masks } from 'react-native-mask-input';

import ValidateCadastro from '../../../components/schema/CadastroSchema';

export default function ({ }) {
  const logo = require('../../../../assets/BICO-3.png');
  const navigation = useNavigation<propsStack>();
  const params = useRoute();
  const tipoCadastro: TipoCadastroParams = params.params as unknown as TipoCadastroParams;

  const [mensagemModal, setMensagemModal] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ nome: '', email: '', senha: '', senha2: '', telefone: '', error: '' }}
        validationSchema={ValidateCadastro}
        onSubmit={async (values, { setErrors }) => {
          const nome = values.nome;
          const email = values.email;
          const telefone = values.telefone;
          const senha = values.senha;
          if (nome.length > 0 && email.length > 0 && senha.length > 0) {
            const usuarioCriado = await cadastrarUsuario(nome, email, telefone, senha);
            if (tipoCadastro.isCadastroProfissional === true) {
              navigation.navigate('CadastroFinal', { usuarioId: usuarioCriado });
            } else {
              navigation.navigate('Login');
            }
          }
        }}
      >
        {(props) => (
          <View style={styles.image}>

            <Modal isVisible={isModalVisible}>
              <View style={styles.modal}>
                <Text>{mensagemModal}</Text>
                <Button title="Fechar" onPress={hideModal} />
              </View>
            </Modal>

            <Image
              source={logo}
              style={styles.logo}
            />

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
              <Text style={styles.label}>Numero para contato profissional</Text>
              <MaskInput
                style={styles.input}
                value={props.values.telefone}
                onChangeText={(masked, unmasked, obfuscated) => props.setFieldValue('telefone', unmasked)}
                mask={Masks.BRL_PHONE}
                textAlign="center"
                textContentType='telephoneNumber'
                placeholder="Telefone"
                placeholderTextColor="#FFFFFF"
                autoComplete='tel-device'
              />
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