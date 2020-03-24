import {Button, Alert} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {AuthService} from '../services';
import {DataContext} from '../dataContext';
import {routes} from '../constants';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {challenges} from '../constants/auth';

export const SignUpScreen = ({navigation}) => {
  const {username, setUsername, setProfile, setChallengeType} = useContext(
    DataContext.context,
  );

  const onSignUp = useCallback(async () => {
    try {
      setProfile(await AuthService.signUp({username}));
      setChallengeType(challenges.SIGN_UP);

      navigation.navigate(routes.codeFill);
    } catch (e) {
      Alert.alert(e.name, e.message);
    }
  }, [setChallengeType, navigation, setProfile, username]);

  return (
    <Page>
      <Input label="Username" onChange={setUsername} />
      <Button title="Sign up" onPress={onSignUp} />
    </Page>
  );
};
