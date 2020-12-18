import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível.",
      "Gente todo dia arruma os cabelos, por que não o coração?",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
    ];
    
  }

  quebraBiscoito() {
    let numRandom = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: `"${this.frases[numRandom]}"`,
      img: require('./assets/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Image
            source={this.state.img}
            style={styles.img}
          />
  
          <Text style={styles.textoFrase}>
            {this.state.textoFrase}
          </Text>
  
          <TouchableOpacity 
            style={styles.button}
            onPress={this.quebraBiscoito}
          >
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
