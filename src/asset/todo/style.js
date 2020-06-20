/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingRight: 10,
    marginBottom: 20,
  },
  h1: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20,
    marginTop: 20,
  },

  welcome: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },

  inputText: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    paddingLeft: 12,
    textAlign: 'left',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  buttonLogout: {
    borderRadius: 5,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: 9,
  },
  notodo: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  todoTitle: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sparator: {
    borderWidth: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  textLabel: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingRight: 100,
  },
  box: {
    borderWidth: 1,
    marginBottom: 5,
    padding: 10,
  },
});

export default styles;
