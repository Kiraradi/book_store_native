import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import LogInScreen from '../Screens/LogInScreen';
import SignUpScreen from '../Screens/SignUpScreen';

type ParamsListStack = {
  LogIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<ParamsListStack>();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
