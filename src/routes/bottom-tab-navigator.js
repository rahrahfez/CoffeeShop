import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/homeScreen';
import MenuScreen from './menu-navigator';
import ShoppingCartScreen from '../screens/shoppingCartScreen';
import { cart } from '../shared/shoppingCart';

function showBadgeNumber() {
  const [badgeVisible, setBagdgeVisible] = useState(false);

  if (cart.length > 0) {
    setBagdgeVisible(true);
    return cart.length;
  } else {
    setBagdgeVisible(false);
    return null;
  }
}

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
            ? 'home'
            : 'home-outline';
          } else if (route.name ==='Menu') {
            iconName = focused 
            ? 'restaurant' 
            : 'restaurant-outline';
          } else if (route.name === 'Cart') {
            iconName = focused
            ? 'cart'
            : 'cart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name='Menu' component={MenuScreen} />
      <Tab.Screen name="Cart" component={ShoppingCartScreen} options={{ tabBarBadge: cart.length }} />
    </Tab.Navigator>
  )
}