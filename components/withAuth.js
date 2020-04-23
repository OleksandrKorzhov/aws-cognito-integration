import React from 'react';
import {useContext, useEffect} from 'react';
import {NativeAuthContext} from '../sh-universal-user-auth/packages/univeral-user-auth-native';
import {routes} from '../constants';

export default Component =>
  React.memo(({navigation, ...props}) => {
    const {isLoggedIn} = useContext(NativeAuthContext.context);
    //
    useEffect(() => {
      console.log('+', isLoggedIn);
      if (isLoggedIn) {
        navigation.navigate(routes.profile);
      } else {
        navigation.navigate(routes.home);
      }
    }, [isLoggedIn, navigation]);

    return <Component {...props} navigation={navigation} />;
  });
