import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookScreen from '../Screens/BookScreen';
import TabStack from './TabStack';

type ParamsListStack = {
  Tab: undefined;
  Book: {id: string};
};

const Stack = createNativeStackNavigator<ParamsListStack>();

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
        initialParams={{id: '12'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
