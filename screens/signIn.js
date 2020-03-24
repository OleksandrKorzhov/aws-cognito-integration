import React, {useContext, useEffect} from 'react';
import {Alert, Button} from 'react-native';
import {AuthService} from '../services';
import {routes} from '../constants';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {DataContext} from '../dataContext';
import {challenges} from '../constants/auth';
import Btn from '../components/btn';

export const SignInScreen = ({navigation}) => {
  const {
    username,
    setUsername,
    setChallengeType,
    withLoading,
    setLoginSession,
  } = useContext(DataContext.context);
  const loadingKey = 'signIn';

  const onSignIn = withLoading(
    async () => {
      const currentUser = await AuthService.signIn({username});
      setLoginSession(currentUser);
      setChallengeType(challenges.PASSWORDLESS);

      navigation.navigate(routes.codeFill);
    },
    {
      silentErrors: true,
      key: loadingKey,
    },
  );

  return (
    <Page>
      <Input label="Phone number" onChange={setUsername} />
      <Btn loadingKey={loadingKey} title="Sign In" onPress={onSignIn} />
    </Page>
  );
};
