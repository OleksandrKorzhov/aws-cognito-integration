import React, {useContext, useState} from 'react';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {routes} from '../constants';
import TextBtn from '../components/textBtn';
import Btn from '../components/btn';
import {NativeAuthContext} from '../sh-universal-user-auth/packages/univeral-user-auth-native';
import {asyncActions} from '../sh-universal-user-auth/packages/univeral-user-auth-native/constants';

export const CodeFillScreen = ({navigation, route}) => {
  const [code, setCode] = useState();
  const {
    confirmPasswordlessLogin,
    retryPasswordlessLogin,
    isLoading,
  } = useContext(NativeAuthContext.context);

  const onSubmitChallengeCode = async () => {
    await confirmPasswordlessLogin({
      answer: code,
    });

    navigation.push(routes.home);
  };

  const onResendOtp = () => retryPasswordlessLogin();

  return (
    <Page>
      <Input label="Confirmation code" onChange={setCode} />
      <TextBtn
        title="Resend OTP"
        onPress={onResendOtp}
        style={{paddingTop: 15, paddingBottom: 45}}
      />
      <Btn
        isLoading={isLoading}
        title="Submit"
        onPress={onSubmitChallengeCode}
      />
    </Page>
  );
};
