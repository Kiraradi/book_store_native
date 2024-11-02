import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import RootStack from './Stacks/RootStack';
import {useAppSelector} from '../store/hooks/useAppSelector';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Navigation: FC = () => {
  const user = useAppSelector(state => state.user.user);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user ? <RootStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
