import React from 'react';
import {Button, View} from 'react-native';
import {Page} from '../components/page';
import {routes} from '../constants';

const Divider = () => <View style={{marginVertical: 5}} />;

export const HomeScreen = ({navigation}) => (
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
  </Page>
);
