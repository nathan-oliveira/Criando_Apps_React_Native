import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    }

    this.entrar = this.entrar.bind(this)
  }

  entrar() {
    if(this.state.input === '') {
      alert('Digite seu nome!');
      return;
    }

    this.setState({ nome: 'Bem vindo: ' + this.state.input })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ddd" />
        <Text>Teste!</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome!"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({ input: text })}
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
})