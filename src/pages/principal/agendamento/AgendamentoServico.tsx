import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import Local from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_API_KEY } from '../../../../environments';
import styles from './StyleAgendamentoServico';
import CalendarioComponent from '../../../components/calendario/CalendarioComponent';
import { useRoute, useNavigation } from '@react-navigation/native';
import { propsStack, AgendamentoServicoParams } from '../../../routes/stack/models/model';
import { SolicitacaoDTO } from '../../../dtos/SolicitacaoDTO';
import { solicitarServico } from '../../../service/solicitacaoService/solicitacaoService';
import { useUser } from '../../../context/AuthContext';

export default function () {
  Geocoder.init(GOOGLE_API_KEY);
  const [horaAgendamento, setHoras] = useState('00:00');
  const [mostraSelecaoHorario, setSelecaoHorario] = useState(false);
  const [diaSelecionado, setDiaSelecionado] = useState();
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [observacao, setObservacao] = useState("");

  const { user } = useUser();
  const params = useRoute();
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
        timeout: 12000,
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

  const solicitar = () => {
    //TO DO - criar processo para pegar dia selecionado calendario
    const usuarioSolicitante = !!user ? user.id : "";
    const servico = servicoSelecionado.servicoSelecionado;
    const latitudeString = latitude.toString();
    const longitudeString = longitude.toString();
    const solicitacaoDTO: SolicitacaoDTO = {
      usuarioSolicitante,
      servico,
      diaSelecionado: "2023-04-25",
      horarioSolicitado: horaAgendamento,
      observacao,
      latitude: latitudeString,
      longitude: longitudeString,
      endereco: location
    };
    solicitarServico(solicitacaoDTO);
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textNome}>{servicoSelecionado.servicoSelecionado}</Text>
        <View style={styles.viewCalendario}>
          <Text style={styles.textGeral}>Qual dia gostaria de agendar:</Text>
          <CalendarioComponent
            diaSelecionado={setDiaSelecionado}
          ></CalendarioComponent>
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
              onChangeText={setObservacao}
            />
          </View>
        </View>
        <View style={styles.formEndereco}>
          <Text style={styles.textGeral}>Selecione o endereço para realização do serviço:</Text>
          <View style={styles.formInputObservacao}>
            <TextInput
              style={styles.textEndereco}
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
          <TouchableOpacity onPress={solicitar} style={styles.buttonSolicitacao}>
            <Text style={styles.textFinalizacao}>SOLICITAR PROFISSIONAL</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

