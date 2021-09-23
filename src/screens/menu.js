import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Pressable, FlatList, Modal } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { globalStyles } from '../shared/globalStyles';
import ItemDescriptionScreen from './itemDescription';
import { dalgona } from '../shared/menuItems';



function FoodScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Food</Text>
    </View>
  )
}



const styles = StyleSheet.create({


});