/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button, Text} from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const PRODUCT_QUERY = gql`
query getProduct($urlKey: String!) {
    products(selectedStore: 1, filter: { url_key: { eq: $urlKey } }) {
        items {
            name
            sku
            stock_status
            description {
                html
            }
            image {
                url
                label
            }
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
        }
    }
}
`;

const Pdp  = ({navigation}) => {

    const {loading, data, error} = useQuery(PRODUCT_QUERY, {
        variables: {urlKey: 'gaga-100-extra-pedas-goreng-jalapeno-85-gr'},
    });
    if (loading){
		return <Text>Loading...</Text>;
    }
    if (error){
		return <Text>Error</Text>;
    }
    console.log(error);
    console.log(data);
    const product = data.products.items[0];
    const productDescription = product.description.html;
  return (
    <View>
      <View>
        <Text>{product.name}</Text>
      </View>
      <View>
        <Text>{product.sku}</Text>
        <View>{product.stock_status == 'IN_STOCK' ? (
            <Text>STATUS: IN STOCK</Text>
        ) : (<Text>STATUS: OUT OF STOCK</Text>)}</View>
      </View>
      <View className="price">
            {product.price_range.minimum_price.final_price.value != product.price_range.minimum_price.regular_price.value ? (
                <View className="regular_price">
                    <Text>
                        {product.price_range.minimum_price.regular_price.currency} {product.price_range.minimum_price.regular_price.value}
                    </Text>
                </View>
            ) : null}
            <View className="final_price">
            <Text>{product.price_range.minimum_price.final_price.currency} {product.price_range.minimum_price.final_price.value}</Text>
            </View>
        </View>
        {productDescription != '' ? (
            <View className="product_description">{productDescription}</View>
        ) : null}
  </View>
  );
};

export default Pdp;
