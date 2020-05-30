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
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>testing</Text>
        <View style={{borderWidth: 1}} />
        <TextInput placeholder="test" style={styles.test} />
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    borderWidth: 1,
  },
});

export default App;
