import React, {useCallback, useContext} from 'react';
import {DataContext} from '../dataContext';
import {Page} from '../components/page';
import {Alert, Button, Text} from 'react-native';
import {AuthService} from '../services';
import {routes} from '../constants';

const ProfileScreen = ({navigation}) => {
  const {profile} = useContext(DataContext.context);

  console.log(profile);

  const onSignOut = useCallback(async () => {
    try {
      await AuthService.signOut();

      navigation.navigate(routes.home);
    } catch (e) {
      Alert.alert(e.name, e.message);
    }
  }, [navigation]);

  return (
    <Page>
      <Text>{profile.user.username}</Text>
      <Button title="Sign Out" onPress={onSignOut} />
    </Page>
  );
};

ProfileScreen.propTypes = {};

export default ProfileScreen;
