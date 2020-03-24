import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {Page} from '../components/page';
import {routes} from '../constants';
import {NativeAuthContext} from '../sh-universal-user-auth/native';

const Divider = () => <View style={{marginVertical: 5}} />;

export const HomeScreen = ({navigation}) => {
  const {loginWithGoogle} = useContext(NativeAuthContext.context);

  const onSignInWithGoogle = async () => {
    await loginWithGoogle();
  };

  return (
    <Page>
      <Button
        title="Passwordless login"
        onPress={() => navigation.navigate(routes.signIn)}
      />
      <Divider />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(routes.signUp)}
      />
      <Divider />
      <Button title="SSO" onPress={() => navigation.navigate(routes.sso)} />
      <Divider />
      <Button
        title="Sign in with google"
        color="red"
        onPress={onSignInWithGoogle}
      />
    </Page>
  );
};
