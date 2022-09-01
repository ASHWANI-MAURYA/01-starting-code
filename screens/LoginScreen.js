import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import {AuthContext} from '../store/auth-context'


function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating]= useState(false);
  const authCtx = useContext(AuthContext);
//check this line

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try{

      const token=await login(email, password);
      authCtx.authenticate(token);
    }catch(error){
      Alert.alert('Authentication failed!', 'could not login. please check your Email and password')
      window.alert('Authentication failed!', 'could not login. please check your Email and password')
      setIsAuthenticating(false);
    }
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Login you in.."/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
