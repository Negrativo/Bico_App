import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TagInputProps } from '../TagInputProps';
import styles from './StyleTagInputEmpregoSelecionado';

export default function tagInputSelecionado(props: TagInputProps) {

  function removerProfissao(nome: string) {
    props.removeProfissao(nome);
  };

  return (
    <TouchableOpacity style={styles.formComponent} onPress={() => removerProfissao(props.emprego)}>
      <Text style={styles.text}>{props.emprego}</Text>
      <Text style={styles.remover}>X</Text>
    </TouchableOpacity>
  )
}