import React, {useContext, useEffect} from 'react';
import {Button} from 'react-native';
import {Page} from '../components/page';
import {routes} from '../constants';
import {NativeAuthContext} from '@yaradigitallabs/sh-universal-user-auth/native';
import {Divider} from '../components/divider';
import withAuth from '../components/withAuth';

export const HomeScreen = withAuth(({navigation}) => {
  const {checkSession} = useContext(NativeAuthContext.context);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <Page>
      <Button
        title="Passwordless login"
        onPress={() => navigation.navigate(routes.signIn)}
      />
      <Divider />
      {/* FOR NOW IT DOSN'T WORK! */}
      {/*<Btn*/}
      {/*  isLoading={checkLoadingById(asyncActions.loginViaGoogle)}*/}
      {/*  title="Sign in with google"*/}
      {/*  color="red"*/}
      {/*  onPress={loginWithGoogle}*/}
      {/*/>*/}
    </Page>
  );
});
