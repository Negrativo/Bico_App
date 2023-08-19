import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SolicitacaoServicoProps } from './SolicitacaoServicoProps';
import styles from './StyleSolicitacaoServicoComponent';

export default function SolicitacaoServico(props: SolicitacaoServicoProps) {
  return (
    <>
      {props?.usuarioSolicitante &&
        <View style={styles.containerView}>
          <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View>
              <Text style={styles.Texto}>{props?.usuarioSolicitante}</Text>
            </View>
            <View>
              <Text style={styles.Texto}>{props?.servico}</Text>
            </View>
            <View>
              <Text style={styles.Texto}>{props?.diaSelecionado}</Text>
            </View>
            <View>
              <Text style={styles.Texto}>{props?.horarioSolicitado}</Text>
            </View>
            <View>
              <Text style={styles.Texto}>{props?.endereco}</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
    </>
  )
}
