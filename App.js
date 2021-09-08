import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './screens/home';
import MenuScreen from './screens/menu';
import ShoppingCart from './screens/shoppingCart';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

function ShoppingCartScreen() {
  return (
    <View style={styles.container}>
      <ShoppingCart />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Menu' component={MenuScreen} />
        <Tab.Screen name="Cart" component={ShoppingCartScreen} options={{ tabBarBadge: 1 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
