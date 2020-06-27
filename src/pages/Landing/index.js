/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import sty from '../../asset/assesment/final';

const Landing  = ({navigation}) => {
  return (
    <View>
      	<Button
          title="Login"
          onPress={() =>
            navigation.navigate('Login')
          }
        />
		<TouchableOpacity style={sty.button} onPress={() => navigation.navigate('Plp')}>
            <Text style={sty.buttonText}>PLP</Text>
		</TouchableOpacity>
		<TouchableOpacity style={sty.button} onPress={() => navigation.navigate('Pdp')}>
            <Text style={sty.buttonText}>PDP</Text>
		</TouchableOpacity>
  </View>
  );
};

export default Landing;
