import React, { Component } from 'react';
import Slider from "@react-native-community/slider"

import {
  View,
  Text,
  StyleSheet
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.valor}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => this.setState({ valor: value })}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />

        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          Você tem {this.state.valor.toFixed(1)} Kg
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
