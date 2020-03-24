import React, {createContext, useCallback, useMemo, useState} from 'react';

const ctxFactory = ({
  username,
  setUsername,
  code,
  setCode,
  profile,
  setProfile,
  challengeType,
  setChallengeType,
  withLoading,
  isLoading,
  loginSession,
  setLoginSession,
  refreshToken,
  setRefreshToken,
  idToken,
  setIdToken,
  accessToken,
  setAccessToken,
  hasLoadingByKey,
} = {}) => ({
  username,
  setUsername,
  code,
  setCode,
  profile,
  setProfile,
  challengeType,
  setChallengeType,
  withLoading,
  isLoading,
  loginSession,
  setLoginSession,
  refreshToken,
  setRefreshToken,
  idToken,
  setIdToken,
  accessToken,
  setAccessToken,
  hasLoadingByKey,
});

const ctx = createContext(ctxFactory());

export const DataContext = ({children}) => {
  const [username, setUsername] = useState();
  const [code, setCode] = useState();
  const [profile, setProfile] = useState();
  const [loginSession, setLoginSession] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [idToken, setIdToken] = useState();
  const [accessToken, setAccessToken] = useState();
  const [challengeType, setChallengeType] = useState();
  const [loadingSet, setLoadingSet] = useState([]);

  const isLoading = useMemo(() => !!loadingSet.length, [loadingSet]);

  const hasLoadingByKey = key =>
    loadingSet && loadingSet.some(loadingId => loadingId === key);

  const addAsyncActionToLoading = useCallback(
    action => setLoadingSet(existingSet => [...existingSet, action]),
    [setLoadingSet],
  );

  const removeAsyncActionFromLoading = useCallback(
    action =>
      setLoadingSet(existingSet =>
        existingSet.filter(existingAction => existingAction !== action),
      ),
    [setLoadingSet],
  );

  const withLoading = useCallback(
    (asyncFn, options) => async (...args) => {
      const silentErrors = options && options.silentErrors;
      const key = options && options.key;
      const uuid = key || String(Date.now()) + Math.random();
      addAsyncActionToLoading(uuid);

      try {
        const result = await asyncFn(...args);
        return result;
      } catch (e) {
        console.log(e);
        if (!silentErrors) {
          throw e;
        }
      } finally {
        removeAsyncActionFromLoading(uuid);
      }
    },
    [addAsyncActionToLoading, removeAsyncActionFromLoading],
  );

  return (
    <ctx.Provider
      value={ctxFactory({
        username,
        code,
        setUsername,
        setCode,
        profile,
        setProfile,
        challengeType,
        setChallengeType,
        withLoading,
        isLoading,
        loginSession,
        setLoginSession,
        refreshToken,
        setRefreshToken,
        accessToken,
        setAccessToken,
        idToken,
        setIdToken,
        hasLoadingByKey,
      })}>
      {children}
    </ctx.Provider>
  );
};

DataContext.context = ctx;
