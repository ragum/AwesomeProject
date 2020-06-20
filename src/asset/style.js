/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 1,
    padding: 20,
    margin: 20,
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
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingRight: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    padding: 9,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default styles;
