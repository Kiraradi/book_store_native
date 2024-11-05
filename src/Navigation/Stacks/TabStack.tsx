import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import CartScreen from '../Screens/CartScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CatalogScreen from '../Screens/CatalogScreen';
import {ParamsListTab} from '../Screens/types';
import MyTabBar from '../../UI/MyTabBar/MyTabBar';
import {useAppSelector} from '../../store/hooks/useAppSelector';

const Tab = createBottomTabNavigator<ParamsListTab>();

const TabStack: FC = () => {
  const cartLength = useAppSelector(state => state.cart.books.length);
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{tabBarBadge: cartLength}}
      />
      <Tab.Screen name="Favorit" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
