import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TagInputProps } from '../TagInputProps';
import styles from './StyleTagInputEmpregoSelecionado';

export default function tagInput(props: TagInputProps) {

  return (
    <TouchableOpacity style={styles.formRecomendacao}>
      <Text style={styles.text}>{props.emprego}</Text>
    </TouchableOpacity>
  )
}