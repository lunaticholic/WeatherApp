import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
      <View style={styles.blueView} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Container에서 flex 1을 사용해야만 비로소 전체공간을 사용할 수 있다.
  container: {
    flex: 1
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 1,
    backgroundColor: "blue"
  }
});
