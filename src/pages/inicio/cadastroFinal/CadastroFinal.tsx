import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Formik } from 'formik';
import MaskInput, { Masks } from 'react-native-mask-input';
import { launchImageLibrary } from 'react-native-image-picker';

import api from '../../../service/api';

import ValidateCadastroFone from '../../../components/schema/CadastroFoneSchema';
import Pesquisa from '../../../components/barraPesquisa/BarraPesquisaComponent';
import TagInputSelecionado from '../../../components/tagInput/tagInputSelecionado/TagInputEmpregoSelecionado';

import styles from './StyleCadastroFinal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CadastroFinalParams, propsStack } from '../../../routes/stack/models/model';

export default function () {
  const params = useRoute();
  const navigation = useNavigation<propsStack>();

  const paramsCadastroFinal: CadastroFinalParams = params.params as unknown as CadastroFinalParams;
  const nome = paramsCadastroFinal?.nome;
  const email = paramsCadastroFinal?.email;
  const senha = paramsCadastroFinal?.senha;

  const [Empregos, setEmpregos] = useState([]);
  const [FotoPerfil, setFoto] = useState('');
  const [EmpregosSelecionados, setEmpregosSelecionados] = useState(['']);


  // async function permissao() {
  //     if (Platform.OS !== 'web') {
  //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //         if (status !== 'granted') {
  //         alert('É necessario permissão para selecionar!');
  //         }
  //     }
  // }


  // useEffect(() => {
  //     let mounted = true;
  //     if(mounted){
  //         api.get('/pesquisa/cargos', {})
  //         .then(response => {
  //             if(mounted)
  //                 setEmpregos(response.data);
  //         })
  //         .catch(error => {
  //             console.log(error);
  //         });
  //     }
  //     return () => mounted = false;
  // }, [Empregos]); 


  async function openGaleria() {
    const result = await launchImageLibrary({
      mediaType: 'photo'
    });

    if (result.assets) {
      setFoto(`data:image/png,${result}`);
    }

  };


  const adicionarProfissao = (empregoSelecionado: string) => {
    setEmpregosSelecionados([...EmpregosSelecionados, empregoSelecionado]);
  };

  const removerProfissao = (empregoSelecionado: string) => {
    setEmpregosSelecionados(EmpregosSelecionados.filter((emprego) => emprego !== empregoSelecionado));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ telefone: '' }}
        validationSchema={ValidateCadastroFone}
        onSubmit={(values, { setErrors }) => {
          let fotoPerfil = FotoPerfil;
          let empregos = EmpregosSelecionados;
          let telefone = values.telefone;
          api.post('/usuario/cadastro', {
            nome, email, senha,
            fotoPerfil, empregos, telefone
          })
            .then(res => {
              console.log('Cadastro completo!');
              navigation.navigate('Login');
            })
            .catch(error => {
              console.log(error);
            });
        }}
      >
        {(props) => (
          <View style={styles.formTela}>
            <View style={styles.formFotoPerfil}>
              <View style={styles.backgroudFotoPerfil}>
                <View>
                  {FotoPerfil !== '' &&
                    <Image source={{ uri: FotoPerfil }} style={styles.fotoPerfil} />
                  }
                </View>
              </View>
              <TouchableOpacity onPress={() => openGaleria()} style={styles.bottomFoto}>
                <Text style={styles.textFoto}>Selecionar foto</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textNome}>{nome}</Text>
            </View>
            <View style={styles.formDescricao}>
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
            </View>
            <View style={styles.formCategorias}>
              <Text style={styles.textPesquisaEmprego}>Quais são suas experiências  profissionais?</Text>
              <Pesquisa Lista={Empregos} placeholder={"Empregos"} selecionaProfissao={adicionarProfissao} />
              <View style={styles.formEmpregosSelecionados}>
                {(EmpregosSelecionados.length > 0) &&
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