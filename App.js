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

import Amplify, {Auth} from 'aws-amplify';
import awsConfig from './aws-exports';
import {DataContext} from './dataContext';
import {routes} from './constants';
import {SignUpScreen} from './screens/signUp';
import {SignInScreen} from './screens/signIn';
import {CodeFillScreen} from './screens/codeFill';
import {HomeScreen} from './screens/home';
import ProfileScreen from './screens/profile';
import SSOScreen from './screens/sso';

const uniqueEmailAppConfig = {
  region: 'us-east-1',
  userPoolId: 'us-east-1_DyLBFDQnp',
  userPoolWebClientId: '3vtk8sj2a769u4ptur61nharac',
};

const uniquePhoneAppConfig = {
  region: 'us-east-1',
  userPoolId: 'us-east-1_LTazfysaE',
  userPoolWebClientId: '5n186j03ngrdlgfppu0s2mm0e8',
};

Amplify.configure(awsConfig);

console.log(Auth.configure());

const Stack = createStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;
