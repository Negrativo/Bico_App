import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    marginTop: -50,
    width: 200,
    height: 180,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#00000F',
  },

  container: {
    backgroundColor: '#FCFCFC',
    flex: 1,
    justifyContent: 'center',
  },

  cadastrar: {
    color: 'white',
  },

  input: {
    backgroundColor: '#00000F',
    borderWidth: 0.2,
    borderRadius: 50,
    width: 250,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

  form: {
    width: 300,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
  },

  label: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#00000F',
    borderWidth: 0.2,
    borderRadius: 50,
    width: 280,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: -5,
  },

  labelCadastro: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },

  labelBold: {
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    textDecorationLine: 'underline',
  },

  errors: {
    color: 'red',
  },

  errorCadastro: {
    marginBottom: -20,
  },
});

export default styles;
