import React, {useContext, useEffect} from 'react';
import {Button, View} from 'react-native';
import {Page} from '../components/page';
import {routes} from '../constants';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import Btn from '../components/btn';
import {asyncActions} from '../sh-universal-user-auth/native/constants';

const Divider = () => <View style={{marginVertical: 5}} />;

export const HomeScreen = ({navigation}) => {
  const {checkSession, isLoggedIn, logout, checkLoadingById} = useContext(
    NativeAuthContext.context,
  );

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Page>
      <Btn
        isLoading={checkLoadingById(asyncActions.checkSession)}
        title="Passwordless login"
        onPress={() => navigation.navigate(routes.signIn)}
      />
      <Divider />
      {isLoggedIn ? (
        <Btn
          isLoading={checkLoadingById(asyncActions.logout)}
          title="Logout"
          onPress={logout}
        />
      ) : null}
    </Page>
  );
};
