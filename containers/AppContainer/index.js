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
import Loader from '../../components/loader';

const {Navigator, Screen} = createStackNavigator();

export default () => {
  const {user, loading} = useContext(NativeAuthContext.context);
  console.log(loading);
  return (
    <>
      <Loader show={loading} />
      <Navigator initialRouteName="HomeScreen">
        {!user ? (
          <>
            <Screen name={routes.home} component={HomeScreen} />
            <Screen name={routes.signUp} component={SignUpScreen} />
            <Screen name={routes.signIn} component={SignInScreen} />
            <Screen name={routes.codeFill} component={CodeFillScreen} />
            <Screen name={routes.sso} component={SSOScreen} />
          </>
        ) : (
          <Screen name={routes.profile} component={ProfileScreen} />
        )}
      </Navigator>
    </>
  );
};
