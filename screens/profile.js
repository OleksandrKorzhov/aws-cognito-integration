import React, {useContext} from 'react';
import {Page} from '../components/page';
import {Button, Text} from 'react-native';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import {Divider} from '../components/divider';

const ProfileScreen = () => {
  const {user, logout} = useContext(NativeAuthContext.context);

  return (
    <Page>
      <Text>{user?.username}</Text>
      <Divider />
      <Button title="Sign Out" onPress={logout} />
    </Page>
  );
};

ProfileScreen.propTypes = {};

export default ProfileScreen;
