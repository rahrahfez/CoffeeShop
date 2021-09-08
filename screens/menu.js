import React from 'react';
import { Image, View, Text, Button, Alert, StyleSheet, ScrollView, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { globalStyles } from '../shared/globalStyles';
import ItemDescriptionScreen from './itemDescription';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const drinksData = 

function DrinksScreen({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.cardHeader}>Dalgona</Text>
      <ScrollView horizontal={true} style={styles.contentContainer}>
        <Pressable style={styles.card} onPress={() => navigation.navigate('ItemDescription')}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Coffee</Text>
        </Pressable>
        <View style={styles.card}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Strawberry</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Chocolate</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Thai Tea</Text>
        </View>
      </ScrollView>
      <Text style={styles.cardHeader}>Hot Espresso</Text>
      <ScrollView horizontal={true} style={styles.contentContainer}>
        <View style={styles.card}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Espresso</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Macchiato</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/coffee(edited).png')} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>Cappuccino</Text>
        </View>
      </ScrollView>
    </ScrollView>
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
const Stack = createNativeStackNavigator();

function MenuScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Drinks' component={DrinksScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ItemDescription' component={ItemDescriptionScreen} />
    </Stack.Navigator>
  );
}

export default function MenuScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Drinks' component={MenuScreenStack} />
      <Tab.Screen name='Food' component={FoodScreen} />
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    margin: 2,
  },
  cardHeader: {
    fontWeight: '600',
    fontSize: 32,
    padding: 8,
    marginLeft: 12,
  },
  drinkLabel: {
    fontSize: 24,
    padding: 2,
    fontWeight: '200',
  },
  drinkImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  contentContainer: {
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    padding: 3,
  }
});