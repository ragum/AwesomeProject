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
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Category from '../Category';
import styles from '../../asset/todo/style';
import {connect} from 'react-redux';

const Home = ({route, navigation, auth}) => {
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
  function Item({title}) {
    // const {user} = auth;
    // console.log(user);
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
  const notification = [
    {
      __typename: 'DataNotification',
      content: 'template is not found',
      createdAt: '2020-06-13 05:03:04',
      entityId: '0',
      subject: 'Welcome to lotte mart Indonesia',
      unread: 'false',
    },
    {
      __typename: 'DataNotification',
      content: 'template is not found',
      createdAt: '2020-06-13 05:03:04',
      entityId: '1',
      subject: 'Welcome to lotte mart Indonesia',
      unread: 'false',
    },
    {
      __typename: 'DataNotification',
      content: 'template is not found',
      createdAt: '2020-06-13 05:03:04',
      entityId: '2',
      subject: 'Welcome to lotte mart Indonesia',
      unread: 'false',
    },
    {
      __typename: 'DataNotification',
      content: 'template is not found',
      createdAt: '2020-06-13 05:03:04',
      entityId: '3',
      subject: 'Welcome to lotte mart Indonesia',
      unread: 'false',
    },
  ];
  const listNotification = () => {
    return (
      <FlatList
        data={notification}
        renderItem={({item}) => <Item title={item.content} />}
        keyExtractor={(item) => item.entityId}
      />
    );
  };
  return (
    <>
      <SafeAreaView>
          <View>
            <Text style={styles.h1}>Sukses Login!!</Text>
          </View>
          <Category />
          <TouchableOpacity style={styles.buttonLogout} onPress={logOut}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Home);
