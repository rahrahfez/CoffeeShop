import React from 'react';
import { Image, View, Text, Button, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { globalStyles } from '../shared/globalStyles';

function DrinksScreen() {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardHeader}>Hot Coffee</Text>
      <Image source={require('../assets/coffee(edited).png')} style={{ width: 80, height: 80, margin: 10 }}/>
      <Button title='Select' onPress={() => Alert.alert('button pressed')} />
    </View>
  );
}

function FoodScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Food</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function MenuScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Beverages' component={DrinksScreen} />
      <Tab.Screen name='Food' component={FoodScreen} />
    </Tab.Navigator>
  );
}
