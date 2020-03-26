import React, {useContext, useState} from 'react';
import {routes} from '../constants';
import {Page} from '../components/page';
import {Input} from '../components/input';
import Btn from '../components/btn';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import {asyncActions} from '../sh-universal-user-auth/native/constants';
import withAuth from '../components/withAuth';

export const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const {startPasswordlessLogin, checkLoadingById} = useContext(
    NativeAuthContext.context,
  );

  const onSignIn = async () => {
    await startPasswordlessLogin({
      phoneNumber: username,
    });

    navigation.navigate(routes.codeFill);
  };

  return (
    <Page>
      <Input type="default" label="Phone number" onChange={setUsername} />
      <Btn
        isLoading={checkLoadingById(asyncActions.startPasswordlessLogin)}
        title="Sign In"
        onPress={onSignIn}
      />
    </Page>
  );
};
