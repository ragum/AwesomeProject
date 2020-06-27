/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {useNavigation} from '@react-navigation/native';
import sty from '../../asset/assesment/final';

const CATEGORY = gql`
  query product($id: String!) {
    categoryList(filters: {ids: {eq: $id}}) {
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

const Plp = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useQuery(CATEGORY, {
    variables: {id: id},
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  console.log(data);
  const navigation = useNavigation();
  const categoryDetail = data.categoryList[0];
  const description = categoryDetail.description;
  const itemProduct = categoryDetail.products.items;
  return (
    <ScrollView>
      <View>
        <Text>{categoryDetail.name}</Text>

        <Image style={sty.image}
          source={{
            uri: categoryDetail.image_path,
          }}
        />
      </View>
      <View style={sty.inline}>
      {itemProduct.map((items) => (
        <View key={items.id}>
          <View className="product_image">
            <Image style={sty.image}
              alt={items.small_image.label}
              source={{
                uri: items.small_image.url,
              }}
            />
          </View>
          <View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Pdp', {url_key: items.url_key})
                }>
                <Text>{items.name}</Text>
              </TouchableOpacity>
            </View>
            <View>
              {items.price_range.minimum_price.final_price.value !=
              items.price_range.minimum_price.regular_price.value ? (
                <View>
                  <Text>
                    {items.price_range.minimum_price.regular_price.currency}{' '}
                    {items.price_range.minimum_price.regular_price.value}
                  </Text>
                </View>
              ) : null}
              <View>
                <Text>
                  {items.price_range.minimum_price.final_price.currency}{' '}
                  {items.price_range.minimum_price.final_price.value}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
        </View>
    </ScrollView>
  );
};

export default Plp;
