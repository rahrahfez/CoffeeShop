import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text>Menu!</Text>
    </View>
  );
}

function ShoppingCartScreen() {
  return (
    <View style={styles.container}>
      <Text>Shopping Cart!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Menu' component={MenuScreen} />
        <Tab.Screen name="Cart" component={ShoppingCartScreen} />
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
