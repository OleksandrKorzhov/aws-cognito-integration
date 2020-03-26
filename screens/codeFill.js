import React, {useContext, useState} from 'react';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {routes} from '../constants';
import TextBtn from '../components/textBtn';
import Btn from '../components/btn';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import {asyncActions} from '../sh-universal-user-auth/native/constants';
import withAuth from '../components/withAuth';

export const CodeFillScreen = ({navigation, route}) => {
  const [code, setCode] = useState();
  const {
    confirmPasswordlessLogin,
    retryPasswordlessLogin,
    checkLoadingById,
  } = useContext(NativeAuthContext.context);

  const onSubmitChallengeCode = async () => {
    await confirmPasswordlessLogin({
      answer: code,
    });

    navigation.push(routes.home);
  };

  const onResendOtp = () => retryPasswordlessLogin();

  return (
    // <Page route={route}>
    <Page>
      <Input label="Confirmation code" onChange={setCode} />
      <TextBtn
        isLoading={checkLoadingById(asyncActions.retryPasswordlessLogin)}
        title="Resend OTP"
        onPress={onResendOtp}
        style={{paddingTop: 15, paddingBottom: 45}}
      />
      <Btn
        isLoading={checkLoadingById(asyncActions.confirmPasswordlessLogin)}
        title="Submit"
        onPress={onSubmitChallengeCode}
      />
    </Page>
  );
};
