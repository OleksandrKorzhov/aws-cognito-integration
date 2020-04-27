import React, {useContext} from 'react';
import {Page} from '../components/page';
import {NativeAuthContext} from '@yaradigitallabs/sh-universal-user-auth-native';
import {Divider} from '../components/divider';
import Btn from '../components/btn';
import withAuth from '../components/withAuth';

const ProfileScreen = withAuth(({navigation}) => {
  const {logout, isLoading} = useContext(NativeAuthContext.context);

  return (
    <Page>
      <Divider />
      <Btn isLoading={isLoading} title="Sign Out" onPress={logout} />
    </Page>
  );
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
