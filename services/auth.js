import {Auth} from 'aws-amplify';
import {withReports} from '../utils';

const USER_EMAIL = 'williepart3@gmail.com';
const USER_PASSWORD = '11111111Bb@';

export const signIn = ({username}) => withReports(() => Auth.signIn(username));

export const signUp = ({username}) =>
  withReports(() =>
    Auth.signUp({
      username,
      password: USER_PASSWORD,
      attributes: {
        email: USER_EMAIL,
      },
    }),
  );

// Confirm email/phone_number verification via code
export const confirmSignUp = ({username, code}) =>
  withReports(() => Auth.confirmSignUp(username, code));

// Confirm passing challenges during the sign in
export const confirmSignIn = ({username, code}) =>
  withReports(() => Auth.confirmSignIn(username, code));

export const signOut = () => withReports(() => Auth.signOut({global: true}));

// Will get the profile or a currently authenticated user or throw an error
export const getUserProfile = () =>
  withReports(() => Auth.currentAuthenticatedUser());

export const forgotPassword = ({username}) =>
  withReports(() => Auth.forgotPassword(username));

// Will refresh id_token and access_token if these tokens are expired and there is a valid refresh_token
export const checkSession = () => withReports(() => Auth.currentSession());

export const customChallengeAnswer = ({user, answer}) =>
  withReports(() => Auth.sendCustomChallengeAnswer(user, answer));
