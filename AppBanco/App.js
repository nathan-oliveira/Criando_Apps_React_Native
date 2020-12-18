import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import { Picker } from "@react-native-community/picker"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {
        nome: "",
        idade: "",
        sexo: 0,
        limite: "",
        estudante: "",
      },
      sexoPicker: [
        { key: 0, nome: "Selecione..." },
        { key: 1, nome: "Feminino" },
        { key: 2, nome: "Masculino" },
      ]
      
    }
  }
  render() {
    let sexoPicker = this.state.sexoPicker.map((value, key) => {
      return <Picker.Item style={styles.pickerItem} key={key} value={key} label={value.nome} />
    })
    return (
      <>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.textHeader}>Desafio 1 - Aplicação de Banco</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.formGroup}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Informe seu nome"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Idade:</Text>
              <TextInput
                style={styles.input}
                placeholder="Informe sua idade"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Idade:</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.usuario.sexo}
                  onValueChange={(value, index) => this.setState({
                    usuario: { sexo: value }
                  })}
                >
                  {sexoPicker}
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: "flex",
  },
  header: {
    backgroundColor: '#222',
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  textHeader: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: "bold",
  },
  formGroup: {
    padding: 10
  },
  inputGroup: {
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#737373",
    borderRadius: 5,
    fontSize: 15,
    color: "#222",
  },
  label: {
    marginBottom: 5,
    color: "#222"
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#737373",
    fontSize: 15,
    color: "#222",
    borderRadius: 5
  },
});
