/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

import Home from '../Home';
import Login from '../Login';
import Landing from '../Landing';
import Pdp from '../Pdp';
import Plp from '../Plp';

const Stack = createStackNavigator();

const Navi = ({auth}) => {
  const StackAuth = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name="Landing"
            component={Landing}
            options={{title: 'Please login'}}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
        />

        <Stack.Screen
            name="Pdp"
            component={Pdp}
            options={{title: 'PDP'}}
        />

        <Stack.Screen
            name="Plp"
            component={Plp}
            options={{title: 'PLP'}}
        />
      </Stack.Navigator>
    );
  };

  const StackLogined = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
        />

        <Stack.Screen
            name="Pdp"
            component={Pdp}
            options={{title: 'PDP'}}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {auth.user !== null ? <StackLogined /> : <StackAuth />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Navi);
