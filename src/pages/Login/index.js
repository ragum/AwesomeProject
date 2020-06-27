/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import {mutate} from '../../services/graphql/api';
import {gql} from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../asset/todo/style';
import styless from '../../asset/style';

import {connect} from 'react-redux';
import AUTH_ACTION from '../../stores/actions/auth';

const Login = ({navigation, setSign}) => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);
	const getData = async () => {
		let response = null;

		try {
			response = await AsyncStorage.getItem('token');
			response = response !== null ? response : null;
		} catch (error) {
			console.log(error);
		}
		return response;
	};
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (error) {
      console.log(error);
    }
  };
  const postLogin = () => {
    let schema = gql`
      mutation generateCustomerTokenCustom($email: String!, $pass: String!) {
        generateCustomerTokenCustom(username: $email, password: $pass) {
          token
        }
      }
    `;
    let params = {email: username, pass: password};
    mutate(schema, params).then((res) => {
      const {data} = res;
      let user = data.generateCustomerTokenCustom;
      console.log('user ' + user);
      storeData(user.token);
      let dataFormat = {
        type: 'login',
        token: user.token,
      };
      setSign(dataFormat);
	  if (user.token !== null) {
		navigation.navigate('Home', {email: username});
	  }
    });
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styless.box}>
            <Text style={styless.label}> Username</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => {
                setUsername(text);
              }}
            />
            <View />
            <Text style={styless.label}> password</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
            />
            <View />
            <TouchableOpacity style={styles.button} onPress={() => postLogin()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getData}>
              <Text>get token Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSign: (data) => dispatch(AUTH_ACTION.setToken(data)),
});
export default connect(null, mapDispatchToProps)(Login);
