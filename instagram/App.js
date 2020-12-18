import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/components/Lista';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Nathan Oliveira', 
          descricao: 'Gálatas 2:20', 
          imgperfil: 'https://media-exp1.licdn.com/dms/image/C4E03AQGfiPgneWGlZw/profile-displayphoto-shrink_100_100/0/1599779028104?e=1613606400&v=beta&t=-9KKIzPbtrD2pHWS8xLj535J3uMIEohvCbsyL6qoxTM', 
          imgPublicacao: 'https://scontent.fmii1-1.fna.fbcdn.net/v/t1.0-9/122918142_1737462993089779_8030808920432276520_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=OpDn_alM-40AX_kLWXe&_nc_ht=scontent.fmii1-1.fna&oh=15c67e2705bd6a5481b10066f0037733&oe=5FFD6D68',  
          likeada: false, 
          likers: 12
        },
        {
          id: '2', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '4', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '5', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '6', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    };
  }
  
  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image 
                source={require('./src/img/logo.png')}
                style={styles.logo}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                source={require('./src/img/send.png')}
                style={styles.send}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={this.state.feed}
            renderItem={({ item }) => <Lista data={item} />}
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23
  }
});

export default App;