import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../constants';
import {SignInScreen} from '../../screens/signIn';
import {CodeFillScreen} from '../../screens/codeFill';
import {HomeScreen} from '../../screens/home';
import ProfileScreen from '../../screens/profile';
import {NativeAuthContext} from '@yaradigitallabs/sh-universal-user-auth-native';

const {Navigator, Screen} = createStackNavigator();

export default () => {
  const {user, loading, isLoggedIn} = useContext(NativeAuthContext.context);

  return (
    <Navigator initialRouteName={routes.home}>
      <Screen name={routes.home} component={HomeScreen} />
      <Screen name={routes.signIn} component={SignInScreen} />
      <Screen name={routes.codeFill} component={CodeFillScreen} />
      <Screen name={routes.profile} component={ProfileScreen} />
    </Navigator>
  );
};
