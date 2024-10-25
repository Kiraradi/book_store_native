import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import LogInScreen from '../Screens/LogInScreen';
import SingUpScreen from '../Screens/SingUpScreen';

type ParamsListStack = {
  LogIn: undefined;
  SingUp: undefined;
};

const Stack = createNativeStackNavigator<ParamsListStack>();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SingUp" component={SingUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
