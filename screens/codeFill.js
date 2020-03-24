import React, {useCallback, useContext} from 'react';
import {AuthService} from '../services';
import {Page} from '../components/page';
import {Input} from '../components/input';
import {DataContext} from '../dataContext';
import {routes} from '../constants';
import {challenges} from '../constants/auth';
import {selectAttributes} from '../selectors/userProfile';
import TextBtn from '../components/textBtn';
import Btn from '../components/btn';

export const CodeFillScreen = ({navigation}) => {
  const {
    code,
    setCode,
    username,
    setProfile,
    challengeType,
    setChallengeType,
    loginSession,
    setLoginSession,
    withLoading,
  } = useContext(DataContext.context);
  const resendOtpLoadingKey = 'resendSignInOtp';
  const submitLoadingKey = 'submitCodeFill';

  const onSubmitChallengeCode = useCallback(
    withLoading(
      async () => {
        let result;
        switch (challengeType) {
          case challenges.SIGN_UP:
            result = await AuthService.confirmSignUp({code, username});
            break;
          case challenges.PASSWORDLESS:
            result = await AuthService.customChallengeAnswer({
              user: loginSession,
              answer: code,
            });
        }

        console.log(JSON.stringify(result, null, 2));

        setProfile(selectAttributes(result));
        setChallengeType(null);
        navigation.navigate(routes.home);
      },
      {key: submitLoadingKey},
    ),
    [
      withLoading,
      challengeType,
      setProfile,
      setChallengeType,
      navigation,
      code,
      username,
      loginSession,
    ],
  );

  const onResendOtp = withLoading(
    async () => {
      console.log(username);
      const result = await AuthService.signIn({username});

      setLoginSession(result);
    },
    {
      key: resendOtpLoadingKey,
    },
  );

  return (
    <Page>
      <Input label="Confirmation code" onChange={setCode} />
      <TextBtn
        loadingKey={resendOtpLoadingKey}
        title="Resend OTP"
        onPress={onResendOtp}
        style={{paddingTop: 15, paddingBottom: 45}}
      />
      <Btn
        loadingKey={submitLoadingKey}
        title="Submit"
        onPress={onSubmitChallengeCode}
      />
    </Page>
  );
};
