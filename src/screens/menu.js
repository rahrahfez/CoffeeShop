import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Pressable, FlatList, Modal } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { globalStyles } from '../shared/globalStyles';
import ItemDescriptionScreen from './itemDescription';
import { dalgona } from '../shared/menuItems';

function DrinksScreen({ navigation }) {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.cardHeader}>Dalgona</Text>
      </View>
      <FlatList 
        style={styles.contentContainer}
        data={dalgona}
        horizontal={true}
        renderItem={({item}) => (
          <Pressable 
            key={item.id}
            style={styles.card} 
            onPress={() => setModalVisable(true)}>
          <Image source={item.img_thumbnail} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>{item.flavor}</Text>
            <ItemDescriptionScreen open={modalVisable} />
        </Pressable>
      )}/>
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

export default function MenuScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Coffee' component={DrinksScreen} />
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
    fontSize: 24,
    padding: 8,
    marginLeft: 12,
  },
  drinkLabel: {
    fontSize: 18,
    padding: 2,
    fontWeight: '200',
  },
  drinkImage: {
    width: 120,
    height: 120,
    marginHorizontal: 10,
  },
  contentContainer: {
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    padding: 3,
  }
});