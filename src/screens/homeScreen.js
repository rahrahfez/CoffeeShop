import React from 'react';
import { View } from 'react-native';

import Home from './home';
import { globalStyles } from '../shared/globalStyles';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Home />
    </View>
  );
}