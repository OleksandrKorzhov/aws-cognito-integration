/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DataContext} from './dataContext';
import {routes} from './constants';
import {SignUpScreen} from './screens/signUp';
import {SignInScreen} from './screens/signIn';
import {CodeFillScreen} from './screens/codeFill';
import {HomeScreen} from './screens/home';
import ProfileScreen from './screens/profile';
import SSOScreen from './screens/sso';
import {NativeAuthContext} from './sh-universal-user-auth/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeAuthContext
      config={{
        region: 'us-west-2',
        userPoolId: 'us-west-2_LPqThY0kQ',
        userPoolWebClientId: '5s287ac5cj8gbcjp2lq0ll6elo',
      }}>
      <DataContext>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={routes.home}>
            <Stack.Screen name={routes.signUp} component={SignUpScreen} />
            <Stack.Screen name={routes.signIn} component={SignInScreen} />
            <Stack.Screen name={routes.codeFill} component={CodeFillScreen} />
            <Stack.Screen name={routes.home} component={HomeScreen} />
            <Stack.Screen name={routes.profile} component={ProfileScreen} />
            <Stack.Screen name={routes.sso} component={SSOScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </DataContext>
    </NativeAuthContext>
  );
};

export default App;
