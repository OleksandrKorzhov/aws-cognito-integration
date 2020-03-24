import React, {useContext, useState} from 'react';
import {routes} from '../constants';
import {Page} from '../components/page';
import {Input} from '../components/input';
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
      <Input type="default" label="Email address" onChange={setUsername} />
      <Btn title="Sign In" onPress={onSignIn} />
    </Page>
  );
};
