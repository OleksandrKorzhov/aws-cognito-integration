import React, {useContext, useEffect} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import {routes} from '../constants';

export const Page = ({children, navigation, route}) => {
  const {checkLoadingById, isLoggedIn} = useContext(NativeAuthContext.context);

  useEffect(() => {
    console.log('+', isLoggedIn);
    if (!navigation) {
      return;
    }

    navigation.navigate(isLoggedIn ? routes.profile : routes.home);
  }, [isLoggedIn, navigation, route]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal: 20,
        }}>
        <View style={{zIndex: 0}}>{children}</View>
        {/*{isLoading ? (*/}
        {/*  <Spinner isActive={isLoading} />*/}
        {/*) : (*/}
        {/*  <View style={{zIndex: 0}}>{children}</View>*/}
        {/*)}*/}
      </View>
    </TouchableWithoutFeedback>
  );
};
