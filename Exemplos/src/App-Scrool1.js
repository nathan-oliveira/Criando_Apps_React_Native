import React from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
          </ScrollView>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    width: 150
  },
  box2: {
    backgroundColor: 'blue',
    height: 250,
    width: 150
  },
  box3: {
    backgroundColor: 'green',
    height: 250,
    width: 150
  },
  box4: {
    backgroundColor: 'yellow',
    height: 250,
    width: 150
  },
})