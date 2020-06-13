/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from '../../asset/todo/style';

const TodoList = ({ListTodo}) => {
  console.log(ListTodo);
  if (ListTodo.length) {
    return (
        <View>
            <Text style={styles.todoTitle}>TO DO LIST</Text>
        	{/* <View style={styles.sparator} /> */}

          {ListTodo.map((item) => (
            <View key={item.todo} style={styles.box}>
              <Text style={styles.text}>
				<Text style={styles.textLabel}>todo: </Text>
				<Text>{item.todo}</Text>
              </Text>
              <Text style={styles.text}>
				<Text style={styles.textLabel}>status: </Text>
				<Text>{item.status}</Text>
              </Text>
            </View>
          ))}
        </View>
      );
  } else {
    return (
        <Text style={styles.notodo}>
          belum ada todo list{' '}
        </Text>
      );
  }

};

export default TodoList;
