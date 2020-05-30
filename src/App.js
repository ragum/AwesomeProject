/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './asset/style';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>Username</Text>
          <TextInput placeholder="Username" style={styles.inputText} />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('monggo')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
