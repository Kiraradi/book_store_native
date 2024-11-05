import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import LogInScreen from '../Screens/LogInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthStackParamList} from '../Screens/types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      }}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
