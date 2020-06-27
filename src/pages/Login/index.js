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

  const gotoHome = () => {
    navigation.navigate('Home', {email: username});
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        console.log(value);
        gotoHome();
      }
    } catch (e) {
      // error reading value
    }
  };
  const storeData = async (value) => {
    try {
      let dataFormat = {
        type: 'login',
        token: value,
      };
      const jsonValue = JSON.stringify(dataFormat);
      await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
      // saving error
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
      const user = data.generateCustomerTokenCustom;
      console.log(user);
      let dataFormat = {
        type: 'login',
        token: user.token,
      };
      setSign(dataFormat);
      gotoHome();
        // storeData(user.token);
      // getData();
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
