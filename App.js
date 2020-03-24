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

import {NativeAuthContext} from './sh-universal-user-auth/native';
import {DataContext} from './dataContext';
import AppContainer from './containers/AppContainer';


const App = () => {
  return (
    <NativeAuthContext
      // config={{}}
      useSocialLogin={true}>
      <DataContext>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </DataContext>
    </NativeAuthContext>
  );
};

export default App;
