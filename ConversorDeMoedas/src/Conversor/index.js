import React from 'react';
import { View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

import api from '../Services/api'

const Conversor = ({ moedaA, moedaB }) => {
  const [moedaBValor, setMoedaBValor] = React.useState(0);
  const [valorConvertido, setBalorConvertido] = React.useState(0);

  async function converter() {
    let de_para = `${moedaA}_${moedaB}`;
    const response = await api.get(`/convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`);

    let cotacao = response.data[de_para];
    setBalorConvertido((cotacao * parseFloat(moedaBValor)).toFixed(2));

    Keyboard.dismiss(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Valor a ser convertido"
        style={styles.areaInput}
        onChangeText={(valor) => setMoedaBValor(valor)}
      />

      <TouchableOpacity style={styles.areaBotao} onPress={converter}>
        <Text style={styles.botaoTexto}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.valorConvertido}>{valorConvertido && valorConvertido}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5
  },
  areaBotao: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  valorConvertido: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  }
});

export default Conversor;