import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Conversor from './src/Conversor'

const App = () => {
  return (
    <React.Fragment>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <Conversor moedaA="BRL" moedaB="USD" />
        <Conversor moedaA="USD" moedaB="BRL" />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
