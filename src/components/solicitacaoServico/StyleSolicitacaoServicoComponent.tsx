import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    height: 100,
    shadowColor: 'black',
    marginVertical: 25
  },

  containerView: {
    margin: 10,
  },

  alinhamentoTexto: {
    flexDirection: "row",
  },

  textoNegrito: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#000000'
  },

  containerImagem: {
    marginBottom: 10
  },

  Texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000'
  },

  fotoCategoria: {
    width: 150,
    height: 150,
    borderWidth: 0.2,
    borderRadius: 15,
  },

});

export default styles;