import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../constants';
import {SignUpScreen} from '../../screens/signUp';
import {SignInScreen} from '../../screens/signIn';
import {CodeFillScreen} from '../../screens/codeFill';
import {HomeScreen} from '../../screens/home';
import ProfileScreen from '../../screens/profile';
import SSOScreen from '../../screens/sso';
import {NativeAuthContext} from '../../sh-universal-user-auth/native';

const Stack = createStackNavigator();

export default () => {
  const {isLoggedIn} = useContext(NativeAuthContext.context);

  return (
    <Stack.Navigator initialRouteName={routes.home}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name={routes.signUp} component={SignUpScreen} />
          <Stack.Screen name={routes.signIn} component={SignInScreen} />
          <Stack.Screen name={routes.codeFill} component={CodeFillScreen} />
          <Stack.Screen name={routes.home} component={HomeScreen} />
          <Stack.Screen name={routes.sso} component={SSOScreen} />
        </>
      ) : (
        <Stack.Screen name={routes.profile} component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};
