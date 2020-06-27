/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Button, Text, FlatList, ScrollView} from 'react-native';
import {gql} from 'apollo-boost';
import sty from '../../asset/assesment/final';
import {query} from '../../services/graphql/api';

const CUSTOMER_NOTIF = gql`
  query {
    customerNotificationList {
      items {
        content
        entityId
        subject
        unread
        createdAt
      }
      totalUnread
    }
  }
`;

const Notif = ({route}) => {
  const [notif, setNotif] = useState([]);
  const [loading, setIsLoading] = useState(true);
  query(CUSTOMER_NOTIF).then((res) => {
    const notification = res.data.customerNotificationList.items;
    console.log(notification);
    setNotif(notification);
    setIsLoading(false);
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  const Notification = ({data}) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#F0F0F0',
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text>{data.item.subject}</Text>
        <Text>{data.item.unread ? 'Read' : ''}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#FFF',
        margin: 20,
        marginBottom: 0,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 32,
          marginBottom: 20,
          paddingBottom: 20,
          borderBottomColor: '#F0F0F0',
          borderBottomWidth: 1,
        }}>
        Notification
      </Text>
      <FlatList
        data={notif}
        keyExtractor={(item) => item.entityId}
        renderItem={(item) => <Notification data={item} />}
      />
    </View>
  );
};

export default Notif;
