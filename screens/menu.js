import React from 'react';
import { Image, View, Text, Button, Alert, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { globalStyles } from '../shared/globalStyles';

function DrinksScreen() {
  return (
    <View>
      <Text style={styles.cardHeader}>Hot Coffee</Text>
      <View style={styles.card}>
        <Image source={require('../assets/coffee(edited).png')} style={{ width: 100, height: 100, marginLeft: 10 }}/>
      </View>
      <View style={styles.card}>
        <Image source={require('../assets/coffee(edited).png')} style={{ width: 100, height: 100, marginLeft: 10 }}/>
        <Text style={styles.cardHeader}>Hot Tea</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('../assets/coffee(edited).png')} style={{ width: 100, height: 100, marginLeft: 10 }}/>
        <Text style={styles.cardHeader}>Cold Brew</Text>
      </View>
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

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    padding: 8,
    margin: 2,
    backgroundColor: 'white'
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
    marginLeft: 24,
  },
})