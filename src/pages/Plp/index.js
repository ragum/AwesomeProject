/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const CATEGORY = gql`
    query product($id: String!){
		categoryList (filters: {ids: {eq: $id}}){
            id
            name
            image_path
            description
			products {
                items {
                    id
                    name
                    sku
                    url_key
                    price_range {
                        minimum_price {
                          regular_price {
                            currency
                            value
                          }
                          final_price {
                            currency
                            value
                          }
                        }
                      }
                    small_image {
                        url
                        label
                    }
                }
            }
		}
  	}
`;

const Plp = ({navigation}) => {
    const {data} = useQuery(CATEGORY, {
        variables: {id: '533'},
    });
    const categoryDetail = data.categoryList[0];
    const description = categoryDetail.description;
    const itemProduct = categoryDetail.products.items;
  return (
    <View>
        <View>
            <Text>{categoryDetail.name}</Text>
            <View><Image source={categoryDetail.image_path}/></View>
        </View>
  </View>
  );
};

export default Plp;
