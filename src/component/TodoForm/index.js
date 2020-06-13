/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../asset/todo/style';

const TodoForm = ({dataActivity}) => {
  const [todo, setTodo] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    const data = {todo, status};
    dataActivity(data);
  };

  return (
    <View>
      <Text style={styles.title}>Todo Form</Text>
      {/* <Text>Todo</Text> */}
      <TextInput
	  style={styles.inputText}
        placeholder="to do"
        onChangeText={text => setTodo(text)}
      />
      {/* <Text>Status</Text> */}
      <TextInput
	  style={styles.inputText}
	  placeholder="status"
        onChangeText={text => setStatus(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
