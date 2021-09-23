import React, { useState } from 'react';
import { ScrollView, View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native';

import { globalStyles } from '../shared/globalStyles';
import { dalgona } from '../shared/menuItems';
import ItemDescriptionsModal from '../components/itemDescriptionsModal';

export default function DrinksScreen() {
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.cardHeader}>Dalgona</Text>
      </View>
      <FlatList 
        style={styles.contentContainer}
        data={dalgona}
        horizontal={true}
        renderItem={({item}) => (
          <Pressable 
            key={item.id}
            style={globalStyles.card} 
            onPress={() => {
              setModalVisable(!modalVisable)
              }
            }>
          <Image source={item.img_thumbnail} style={styles.drinkImage}/> 
          <Text style={styles.drinkLabel}>{item.flavor}</Text>
            <ItemDescriptionsModal handleOpen={modalVisable} handleClose={() => setModalVisable(!modalVisable)}/>
        </Pressable>
      )}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
})