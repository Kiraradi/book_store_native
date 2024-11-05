import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookScreen from '../Screens/BookScreen';
import TabStack from './TabStack';
import {RootStackParamList} from '../Screens/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Book"
        component={BookScreen}
        options={{headerBackTitle: 'Back'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
