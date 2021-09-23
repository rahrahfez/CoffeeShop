import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});