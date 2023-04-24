import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import Local from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import api from '../../../service/api';

import ValidateCadastroFone from '../../../components/schema/CadastroFoneSchema';
import Pesquisa from '../../../components/barraPesquisa/BarraPesquisaComponent';
import TagInputSelecionado from '../../../components/tagInput/tagInputSelecionado/TagInputEmpregoSelecionado';

import styles from './StyleCadastroFinal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CadastroFinalParams, propsStack } from '../../../routes/stack/models/model';
import { GOOGLE_API_KEY } from '../../../../environments';
import { empregos } from '../../../data/empregos';
import Modal from 'react-native-modal';
import { atualizarUsuario, findById } from '../../../service/usuarioService/UsuarioService';
import { login } from '../../../service/loginService/LoginService';
import { UsuarioByIdDTO } from '../../../dtos/UsuarioDTO';

export default function () {
  const params = useRoute();
  const navigation = useNavigation<propsStack>();
  const paramsCadastroFinal: CadastroFinalParams = params.params as unknown as CadastroFinalParams;
  Geocoder.init(GOOGLE_API_KEY);

  const usuarioCriado = paramsCadastroFinal?.usuarioId;
  let usuarioById: UsuarioByIdDTO;

  const [EmpregosSelecionados, setEmpregosSelecionados] = useState(['']);
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [mensagemModal, setMensagemModal] = useState('');

  const empregosSelecionaveis = empregos.flatMap(empregos => empregos.Servicos);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const getLocate = async () => {
    Geocoder.init(GOOGLE_API_KEY);
    Local.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        Geocoder.from({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
          .then(addressJson => {
            const endereco = addressJson.results[0].formatted_address;
            setLocation(endereco);
          })
          .catch(error => console.warn(error));
      },
      (error) => {
        console.log('Error location: ' + error);
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 1000
      }
    )
  }


  const adicionarProfissao = (empregoSelecionado: string) => {
    if (EmpregosSelecionados.filter((emprego) => emprego !== empregoSelecionado)) {
      setEmpregosSelecionados([...EmpregosSelecionados, empregoSelecionado]);
    }
  };

  const removerProfissao = (empregoSelecionado: string) => {
    setEmpregosSelecionados(EmpregosSelecionados.filter((emprego) => emprego !== empregoSelecionado));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{}}
        validationSchema={ValidateCadastroFone}
        onSubmit={async (values, { setErrors }) => {
          //usuarioById = await findById(usuarioCriado);
          const usuarioCadastrado = await atualizarUsuario(usuarioCriado, latitude.toString(), longitude.toString(), location, EmpregosSelecionados);
          if (!!usuarioCadastrado) {
            setMensagemModal('Cadastrado com sucesso!')
            showModal();
            navigation.navigate('Login');
          }
        }}
      >
        {(props) => (
          <View style={styles.formTela}>

            <Modal isVisible={isModalVisible}>
              <View style={styles.modal}>
                <Text>{mensagemModal}</Text>
                <Button title="Fechar" onPress={hideModal} />
              </View>
            </Modal>

            <View>
              <Text style={styles.textNome}>{usuarioById?.nome}</Text>
            </View>
            <View style={styles.formDescricao}>
              <View style={styles.form} >
                <Text style={styles.label}>Endereço</Text>
                <View style={styles.formEndereco}>
                  <TextInput style={styles.textEndereco}
                    multiline={false}
                    placeholder={"Adicionar endereço"}
                    placeholderTextColor={"#FFFFFF"}
                    maxLength={200}
                  >
                    {location}
                  </TextInput>
                </View>
                <TouchableOpacity onPress={getLocate}>
                  <Text style={styles.textAdicionarEndereco} >Buscar localização</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.formCategorias}>
              <Text style={styles.textPesquisaEmprego}>Quais são suas experiências profissionais?</Text>
              <Pesquisa Lista={empregosSelecionaveis} placeholder={"Empregos"} selecionaProfissao={adicionarProfissao} />
              <View style={styles.formEmpregosSelecionados}>
                {(EmpregosSelecionados.length > 0) &&
                  EmpregosSelecionados.filter(emprego => emprego.length > 1) &&
                  <FlatList
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={EmpregosSelecionados}
                    keyExtractor={(item, EmpregosSelecionados) => EmpregosSelecionados.toString()}
                    renderItem={({ item }) => {
                      return (
                        <TagInputSelecionado emprego={item} removeProfissao={removerProfissao} />
                      )
                    }}
                  />
                }
              </View>
            </View>
            <TouchableOpacity onPress={props.handleSubmit} style={styles.buttonCadastro}>
              <Text style={styles.textCadastrar}>FINALIZAR CADASTRO</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}