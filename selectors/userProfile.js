const selectSignInSession = data => data.signInUserSession;

export const selectAccessToken = data => selectSignInSession(data).accessToken;

export const selectIdToken = data => selectSignInSession(data).idToken;

export const selectRefreshToken = data =>
  selectSignInSession(data).refreshToken;

export const selectAttributes = data => data.attributes;
