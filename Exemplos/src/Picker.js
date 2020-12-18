import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker"

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {id: 1, nome: "Calabresa", valor: 34.99},
        {id: 2, nome: "Brigadeiro", valor: 51.00},
        {id: 3, nome: "Strogonoff", valor: 41.00},
      ]
    }
  }

  render() {
    let pizzasItem = this.state.pizzas.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.nome} /> 
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Meu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(value, index) => this.setState({
            pizza: value
          })}
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Sua escolha foi: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
})