import React, {useContext, useEffect, useState} from 'react';
import {Alert, Button} from 'react-native';
import {AuthService} from '../services';
import {routes} from '../constants';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {DataContext} from '../dataContext';
import {challenges} from '../constants/auth';
import Btn from '../components/btn';
import {NativeAuthContext} from '../sh-universal-user-auth/native';

export const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const {startPasswordlessLogin} = useContext(NativeAuthContext.context);

  const onSignIn = async () => {
    await startPasswordlessLogin({
      phoneNumber: username,
    });

    navigation.navigate(routes.codeFill);
  };

  return (
    <Page>
      <Input label="Phone number" onChange={setUsername} />
      <Btn title="Sign In" onPress={onSignIn} />
    </Page>
  );
};
