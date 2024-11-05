import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import CartScreen from '../Screens/CartScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CatalogScreen from '../Screens/CatalogScreen';
import {ParamsListTab} from '../Screens/types';

const Tab = createBottomTabNavigator<ParamsListTab>();

const TabStack: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorit" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
