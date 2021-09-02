import React from 'react';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
    width: '30%',
    backgroundColor: 'white'
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});