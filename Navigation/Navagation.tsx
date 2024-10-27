import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import RootStack from './Stacks/RootStack';

const isAuth = false;

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      {isAuth ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
