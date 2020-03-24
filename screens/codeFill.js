import React, {useCallback, useContext, useState} from 'react';
import {AuthService} from '../services';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {DataContext} from '../dataContext';
import {routes} from '../constants';
import {challenges} from '../constants/auth';
import {selectAttributes} from '../selectors/userProfile';
import TextBtn from '../components/textBtn';
import Btn from '../components/btn';
import {NativeAuthContext} from '../sh-universal-user-auth/native';

export const CodeFillScreen = ({navigation}) => {
  const [code, setCode] = useState();
  const {confirmPasswordlessLogin, retryPasswordlessLogin} = useContext(
    NativeAuthContext.context,
  );

  const onSubmitChallengeCode = async () => {
    await confirmPasswordlessLogin({
      answer: code,
    });

    navigation.navigate(routes.home);
  };

  const onResendOtp = () => retryPasswordlessLogin();

  return (
    <Page>
      <Input label="Confirmation code" onChange={setCode} />
      <TextBtn
        // loadingKey={resendOtpLoadingKey}
        title="Resend OTP"
        onPress={onResendOtp}
        style={{paddingTop: 15, paddingBottom: 45}}
      />
      <Btn
        // loadingKey={submitLoadingKey}
        title="Submit"
        onPress={onSubmitChallengeCode}
      />
    </Page>
  );
};
