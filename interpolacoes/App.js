import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

const App = () => {
  const [larAnimada] = React.useState(new Animated.Value(0));
  const [porcAnimada] = React.useState(larAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  }));

  React.useEffect(() => {
    Animated.timing(larAnimada, {
      toValue: 100,
      duration: 10000
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View style={{
        backgroundColor: '#4169E1',
        width: porcAnimada,
        height: 25,
      }}>
        
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default App;