import { GoogleSignin, } from '@react-native-google-signin/google-signin';
import { useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const useGoogleSignin = () => {
  const {setAuth} = useAuth()

  const signIn = useCallback(async (): Promise<void> => {
    try {
      GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
  
      setAuth({
        accessToken: tokens.accessToken
      });
    } catch (error) {
      console.error(error);
    }
  }, [setAuth]);

  const signOut = useCallback(async (): Promise<void> => {
    try {
      await GoogleSignin.signOut();
      setAuth(null);
    } catch (error) {
      console.error(error);
    }
  }, [setAuth]);

  return {
    signIn, 
    signOut
  }
}