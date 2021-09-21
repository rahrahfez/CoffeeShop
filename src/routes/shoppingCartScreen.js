import React from 'react';
import { View } from 'react-native';

import ShoppingCart from '../screens/shoppingCart';
import { globalStyles } from '../shared/globalStyles';

export default function ShoppingCartScreen() {
  return (
    <View style={globalStyles.container}>
      <ShoppingCart />
    </View>
  );
}