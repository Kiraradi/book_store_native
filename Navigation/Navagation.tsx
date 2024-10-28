import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import RootStack from './Stacks/RootStack';
import {useAppSelector} from '../store/hooks/useAppSelector';

const Navigation: FC = () => {
  const user = useAppSelector(state => state.user.user);
  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
