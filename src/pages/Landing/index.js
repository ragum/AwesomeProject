/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button} from 'react-native';

const Landing  = ({navigation}) => {
  return (
    <View>
      <Button
          title="Login"
          onPress={() =>
            navigation.navigate('Login')
          }
        />
  </View>
  );
};

export default Landing;
