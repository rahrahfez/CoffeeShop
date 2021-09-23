import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../shared/globalStyles';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={require('../assets/images/coffee_background.jpg')} style={styles.background_image}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background_image: {
    resizeMode: 'cover',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 56,
  },
})