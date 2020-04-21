import React, {useContext} from 'react';
import {Page} from '../components/page';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import {Divider} from '../components/divider';
import Btn from '../components/btn';
import {asyncActions} from '../sh-universal-user-auth/native/constants';
import withAuth from '../components/withAuth';

const ProfileScreen = withAuth(({navigation}) => {
  const {user, logout, checkLoadingById} = useContext(
    NativeAuthContext.context,
  );

  return (
    // <Page navigation={navigation}>
    <Page>
      {/*<Text>{user?.username}</Text>*/}
      <Divider />
      <Btn
        isLoading={checkLoadingById(asyncActions.logout)}
        title="Sign Out"
        onPress={logout}
      />
    </Page>
  );
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
