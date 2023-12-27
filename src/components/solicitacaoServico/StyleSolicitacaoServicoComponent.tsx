import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    shadowColor: 'black',
    marginVertical: 25,
  },

  containerView: {
    margin: 10,
  },

  alinhamentoTexto: {
    flexDirection: 'row',
  },

  textoNegrito: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#000000',
  },

  containerImagem: {
    marginBottom: 10,
  },

  Texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
  },

  fotoCategoria: {
    width: 150,
    height: 150,
    borderWidth: 0.2,
    borderRadius: 15,
  },

  containerBotoes: {
    marginTop: 30,
    flexDirection: 'row',
  },

  botao: {
    backgroundColor: '#000000',
    width: 100,
    height: 25,
    borderWidth: 0.2,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  textoBotao: {
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;