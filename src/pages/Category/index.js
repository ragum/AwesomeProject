/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import { useNavigation } from '@react-navigation/native';

function Item({title}) {
  // const {user} = auth;
  // console.log(user);
  return (
    <View>
      <TouchableOpacity>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const CATEGORY_QUERY = gql`
 query {
    categoryList {
      id
      name
      children {
        id
        name
        children {
          id
          name
          children {
            id
            name
          }
        }
      }
    }
  }
`;

const Category = () => {
  const {loading, error, data} = useQuery(CATEGORY_QUERY);
  console.log(data);
  const categories = data.categoryList[0].children;
  const navigation = useNavigation();
  if (loading){
  return <Text>Loading...</Text>;
  }
  if (error){
  return <Text>Error</Text>;
  }
  console.log('error ' + error);
  const listNotification = () => {
    return (
      <ScrollView>
      {categories.map((catLvl1) => (
        <View key={catLvl1.id}>
          <TouchableOpacity onPress={() => navigation.navigate('Plp', {id: catLvl1.id})}>
            <Text>{catLvl1.name}</Text>
          </TouchableOpacity>
          <View>
            {catLvl1.children.map((catLvl2) => (
              <View key={catLvl2.id}>
                <TouchableOpacity onPress={() => navigation.navigate('Plp', {id: catLvl2.id})}>
                  <Text>{catLvl2.name}</Text>
                </TouchableOpacity>
                <View>
                  {catLvl2.children.map((catLvl3) => (
                    <View key={catLvl3.id}>
                      <TouchableOpacity onPress={() => navigation.navigate('Plp', {id: catLvl3.id})}>
                        <Text>{catLvl3.name}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
      </ScrollView>
    );
  };
  return <View>{listNotification()}</View>;
};

export default Category;
