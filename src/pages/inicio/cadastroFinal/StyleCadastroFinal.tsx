import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FCFCFC',
    flex: 1,
  },

  formFotoPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },

  formTela: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  formDescricao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },

  formEndereco: {
    backgroundColor: "#000000",
    width: 320,
    maxHeight: 150,
    borderWidth: 0.5,
    borderRadius: 50,
    marginVertical: 5,
    padding: 5,
    justifyContent: 'center'
  },

  formInputDescricao: {
    backgroundColor: "#000000",
    height: 200,
    width: 350,
    borderWidth: 0.5,
    borderRadius: 40,
    margin: 5,
  },

  formCategorias: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 200,
    margin: 10,
  },

  formBarraPesquisa: {
    backgroundColor: '#434343',
    borderWidth: 0.2,
    borderRadius: 50,
    width: 350,
    height: 40,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },

  modal: {
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#00000F',
  },

  formEmpregosSelecionados: {
    height: 150,
    width: 300,
    flex: 1,
    flexWrap: 'wrap'
  },

  inputDescricao: {
    color: "#FFFFFF",
    textAlignVertical: 'top',
    margin: 20
  },

  backgroudFotoPerfil: {
    backgroundColor: '#C4C4C4',
    resizeMode: "cover",
    width: 150,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 80,
    margin: 10
  },

  fotoPerfil: {
    backgroundColor: '#C4C4C4',
    resizeMode: "cover",
    width: 150,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 80,
  },

  iconPesquisa: {
    resizeMode: "cover",
    alignItems: 'center',
    width: 40,
    height: 40,
    right: 10
  },

  bottomFoto: {
    backgroundColor: "#000000",
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 150,
    borderWidth: 0.5,
    borderRadius: 50,
  },

  textFoto: {
    color: "#FFFFFF"
  },

  textNome: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: 'uppercase',
    margin: 5
  },

  textCadastrar: {
    color: 'white'
  },

  textPesquisaEmprego: {
    fontSize: 14,
    margin: 5
  },

  textAdicionarEndereco: {
    fontSize: 16,
    textDecorationLine: 'underline'
  },

  buttonCadastro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 100,
    backgroundColor: '#00000F',
    borderWidth: 0.2,
    borderRadius: 50,
    width: 300,
    height: 50
  },

  barraPesquisa: {
    backgroundColor: '#434343',
    width: 290,
    color: 'white'
  },

  textEndereco: {
    color: 'white',
    textAlign: 'center'
  },

  input: {
    backgroundColor: '#00000F',
    borderWidth: 0.2,
    borderRadius: 50,
    width: 250,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },

  form: {
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40
  },

  label: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;