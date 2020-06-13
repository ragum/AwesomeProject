/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Alert,
  View,
  Image,
} from 'react-native';
import styles from './asset/style';
import ActivityForm from './component/TodoForm';
import ActivityList from './component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const dataActivityParent = (data) => {
    setTodos(todos.concat(data));
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.title}>PEER</Text>
      </View>
      <View style={styles.box}>
        <ActivityForm dataActivity={dataActivityParent} />
      </View>

      <View style={styles.box}>
        <ActivityList ListTodo={todos} />
      </View>
    </SafeAreaView>
  );
};

export default App;
