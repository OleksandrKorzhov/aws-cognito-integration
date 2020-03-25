import React, {useContext, useEffect} from 'react';
import {Button, View} from 'react-native';
import {Page} from '../components/page';
import {routes} from '../constants';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import Btn from '../components/btn';
import {asyncActions} from '../sh-universal-user-auth/native/constants';
import {Divider} from '../components/divider';

export const HomeScreen = ({navigation}) => {
  const {
    loginWithGoogle,
    checkSession,
    isLoggedIn,
    logout,
    checkLoadingById,
  } = useContext(NativeAuthContext.context);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  //   return (
  //     <Page>
  //       <Btn
  //         isLoading={checkLoadingById(asyncActions.checkSession)}
  //         title="Passwordless login"
  //         onPress={() => navigation.navigate(routes.signIn)}
  //       />
  //       <Divider />
  //       {isLoggedIn ? (
  //         <Btn
  //           isLoading={checkLoadingById(asyncActions.logout)}
  //           title="Logout"
  //           onPress={logout}
  //         />
  //       ) : null}
  //     </Page>
  //   );
  // };
  return (
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
      <Divider />
      <Button
        title="Sign in with google"
        color="red"
        onPress={loginWithGoogle}
      />
    </Page>
  );
};
