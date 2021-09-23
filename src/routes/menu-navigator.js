import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DrinksScreen from '../screens/drinksScreen';
import FoodScreen from '../screens/foodScreen';

const Tab = createMaterialTopTabNavigator();

export default function MenuScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Coffee' component={DrinksScreen} />
      <Tab.Screen name='Food' component={FoodScreen} />
    </Tab.Navigator>
    );
}