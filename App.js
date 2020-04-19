import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Guidesnav from './nav/Guidesnav';

export default function App() {
  return (
    <Guidesnav></Guidesnav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
