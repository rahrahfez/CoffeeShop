import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <ImageBackground source={require('../assets/coffee_background.jpg')} style={styles.background_image}>
      <Text style={styles.text}>Coffee Shop</Text>
    </ImageBackground>
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
    marginTop: 24,
  },
})