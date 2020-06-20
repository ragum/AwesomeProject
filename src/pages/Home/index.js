/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../asset/todo/style';

const Home = ({route, navigation}) => {
const { email } = route.params;
  const gotoLanding = () => {
    navigation.navigate('Landing');
  };
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      // remove error
    }
    gotoLanding();
    console.log('Done.');
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.h1}>Sukses Login!!</Text>
            <Text style={styles.welcome}>Welcome {email}</Text>
          </View>
		  <TouchableOpacity style={styles.buttonLogout} onPress={logOut}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
