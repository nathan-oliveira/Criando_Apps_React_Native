import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Pessoa extends React.Component {
  render() {
    return (
      <View state={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    height: 300,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }
})