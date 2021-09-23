import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import BottomNavigator from './src/routes/bottom-tab-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}