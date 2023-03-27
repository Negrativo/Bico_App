import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CategoriaProps } from './CategoriaEmpregoProps';
import styles from './StylesCategoriasEmpregos';

export default function categoriasEmpregos(props: CategoriaProps) {
  // {!!props.foto && <Image source={require(props.foto)} style={styles.fotoCategoria} />}
  return (
    <>
      {props?.nome &&
        <View style={styles.containerView}>
          <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.containerImagem}>

            </View>
            <View style={styles.containerTexto}>
              <Text style={styles.Texto}>{props.nome}</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
    </>
  )
}
