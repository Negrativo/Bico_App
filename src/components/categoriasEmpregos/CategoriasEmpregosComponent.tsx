import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CategoriaProps } from './CategoriaEmpregoProps';
import styles from './StylesCategoriasEmpregos';

export default function categoriasEmpregos(props: CategoriaProps) {
  // 
  return (
    <>
      {props?.nome &&
        <View style={styles.containerView}>
          <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.containerImagem}>
              <Image source={props.foto} style={styles.fotoCategoria} />
            </View>
            <View>
              <Text style={styles.Texto}>{props.nome}</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
    </>
  )
}
