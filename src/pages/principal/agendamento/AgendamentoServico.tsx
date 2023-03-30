import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import Local from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_API_KEY } from '../../../../environments';

import { useAuth } from '../../../context/AuthContext';
import styles from './StyleAgendamentoServico';
import CalendarioComponent from '../../../components/calendario/CalendarioComponent';
import { useRoute, useNavigation } from '@react-navigation/native';
import { propsStack, AgendamentoServicoParams } from '../../../routes/stack/models/model';

export default function () {
  Geocoder.init(GOOGLE_API_KEY);
  const [horaAgendamento, setHoras] = useState('00:00');
  const [mostraSelecaoHorario, setSelecaoHorario] = useState(false);
  const [location, setLocation] = useState("");

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


  const params = useRoute();
  const navigation = useNavigation<propsStack>();

  const servicoSelecionado: AgendamentoServicoParams = params.params as unknown as AgendamentoServicoParams;

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
            const _location = addressJson.results[0].formatted_address;
            setLocation(_location);
          })
          .catch(error => console.warn(error));
      },
      (error) => {
        console.log('Error location: ' + error);
      },
      {
        enableHighAccuracy: true,
        timeout: 120000,
        maximumAge: 1000
      }
    )
  }

  const onChange = (event: any, selectedDate: any) => {
    if (event.type === "set") {
      let currentDate = selectedDate.toString();
      currentDate = currentDate.slice(16, 21);
      setHoras(currentDate);
    }
    setSelecaoHorario(!mostraSelecaoHorario);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textNome}>{servicoSelecionado.servicoSelecionado}</Text>
        <View style={styles.viewCalendario}>
          <Text style={styles.textGeral}>Qual dia gostaria de agendar:</Text>
          <CalendarioComponent></CalendarioComponent>
        </View>
        <View style={styles.viewHorario}>
          <Text style={styles.textGeral}>Qual o melhor horário para a realização do serviço:</Text>
          <TouchableOpacity onPress={() => setSelecaoHorario(true)} style={styles.horarioInput}>
            <Text style={styles.textHoraSelecionada} >{horaAgendamento}</Text>
          </TouchableOpacity>
          {mostraSelecaoHorario &&
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={'time'}
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
          }
        </View>
        <View style={styles.formObservacao}>
          <Text style={styles.textGeral}>Deseja adicionar alguma observação?</Text>
          <View style={styles.formInputObservacao}>
            <TextInput style={styles.inputObservacao}
              multiline={true}
              placeholder={"Observação"}
              placeholderTextColor={"#FFFFFF"}
              maxLength={200}
            />
          </View>
        </View>
        <View style={styles.formEndereco}>
          <Text style={styles.textGeral}>Selecione o endereço para realização do serviço:</Text>
          <View style={styles.formInputObservacao}>
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
        <View>
          <TouchableOpacity style={styles.buttonSolicitacao}>
            <Text style={styles.textFinalizacao}>SOLICITAR PROFISSIONAL</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

