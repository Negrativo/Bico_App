import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formComponent: {
    backgroundColor: '#000000',
    width: 130,
    height: 25,
    borderWidth: 0.2,
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },

  text: {
    color: 'white',
    marginLeft: 10,
    flex: 5
  },

  remover: {
    color: 'white',
    fontSize: 15,
    flex: 1,
  }
});

export default styles;
