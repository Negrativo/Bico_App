import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SolicitacaoServicoProps } from './SolicitacaoServicoProps';
import styles from './StyleSolicitacaoServicoComponent';

export default function SolicitacaoServico(props: SolicitacaoServicoProps) {
  return (
    <>
      {props?.usuarioSolicitante && (
        <View style={styles.containerView}>
          <View style={styles.container}>
            <View style={styles.alinhamentoTexto}>
              <Text style={styles.textoNegrito}>Usuario solicitante: </Text>
              <Text style={styles.Texto}>{props?.usuarioSolicitante}</Text>
            </View>
            <View style={styles.alinhamentoTexto}>
              <Text style={styles.textoNegrito}>Serviço solicitado: </Text>
              <Text style={styles.Texto}>{props?.servico}</Text>
            </View>
            <View style={styles.alinhamentoTexto}>
              <Text style={styles.textoNegrito}>Dia solicitado: </Text>
              <Text style={styles.Texto}>{props?.diaSelecionado}</Text>
            </View>
            <View style={styles.alinhamentoTexto}>
              <Text style={styles.textoNegrito}>Horário solicitado:</Text>
              <Text style={styles.Texto}>{props?.horarioSolicitado}</Text>
            </View>
            <View style={styles.alinhamentoTexto}>
              <Text style={styles.textoNegrito}>Endereço: </Text>
              <Text style={styles.Texto}>{props?.endereco}</Text>
            </View>
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botao}
              onPress={props.onPressAceite}>
              <Text style={styles.textoBotao}>Aceitar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botao}
              onPress={props.onPressRecusar}>
              <Text style={styles.textoBotao}>Recusar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
