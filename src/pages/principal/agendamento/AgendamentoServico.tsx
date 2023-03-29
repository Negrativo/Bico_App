import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

import { useAuth } from '../../../context/AuthContext';
import styles from './StyleAgendamentoServico';
import CalendarioComponent from '../../../components/calendario/CalendarioComponent';
import { useRoute, useNavigation } from '@react-navigation/native';
import { propsStack, AgendamentoServicoParams } from '../../../routes/stack/models/model';

export default function () {
  const [horaAgendamento, setHoras] = useState('00:00');
  const [mostraSelecaoHorario, setSelecaoHorario] = useState(false);
  const [location, setLocation] = useState(null);

  const params = useRoute();
  const navigation = useNavigation<propsStack>();

  const servicoSelecionado: AgendamentoServicoParams = params.params as unknown as AgendamentoServicoParams;


  // onPress={getLocate}
  // const getLocate = async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status === 'granted') {
  //     let location = await Location.getCurrentPositionAsync({});
  //     console.log(location)
  //     setLocation(location.coords);
  //   }
  // }

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
            <Button title="Buscar localização"

            />
          </View>
          <TouchableOpacity>
            <Text style={styles.textAdicionarEndereco} >Adicionar endereço</Text>
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
