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
      numero: 0,
      botao: 'INICIAR',
      ultimo: null
    };

    this.timer = null;

    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar() {
    if(this.timer != null) {
      clearInterval(this.timer)
      this.timer = null;

      this.setState({ botao: 'INICIAR' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)

      this.setState({ botao: 'PARAR' })
    }
  }

  limpar() {
    if(this.timer != null) {
      clearInterval(this.timer)
      this.timer = null;
    }

    this.setState({ 
      ultimo: this.state.numero,
      numero: 0,
      botao: 'INICIAR'
    })
  }

  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Image
            source={require('./assets/cronometro.png')}
            style={styles.cronometro}
          />
          <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
  
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
              <Text style={styles.btnTexto}>
                {this.state.botao}
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.btn} onPress={this.limpar}>
              <Text style={styles.btnTexto}>LIMPAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ultimoArea}>
            <Text style={styles.ultimoTexto}>
              { this.state.ultimo > 0 ? `Último tempo: ${this.state.ultimo.toFixed(1)}s`: ''}
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00aeef'
  },
  cronometro: {
  },
  timer: {
    marginTop: '-40%',
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: '40%',
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#00aeef'
  },
  ultimoArea: {
    marginTop: 40,
  },
  ultimoTexto: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});
