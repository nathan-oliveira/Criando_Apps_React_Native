import { bold } from 'ansi-colors';
import { left } from 'inquirer/lib/utils/readline';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Lista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: this.props.data
    }

    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
  }

  mostraLikes(likers) {
    let feed = this.state.feed;

    if(feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  carregaIcone(likeada) {
    return likeada ? require('../../img/likeada.png') : require('../../img/likeada.png');
  }

  like() {
    let feed = this.state.feed;

    if(feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: this.state.feed.imgperfil }}
            style={styles.fotoPerfil}
          />

          <Text style={styles.nomeUsuario}>
            {this.state.feed.nome}
          </Text>
        </View>

        <Image
          resizeMode="cover"
          style={styles.fotoPublicacao}
          source={{uri: this.state.feed.imgPublicacao}}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.carregaIcone(this.state.feed.likeada)}
              style={styles.iconeLike}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../../img/send.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>

        { this.mostraLikes(this.state.feed.likers) }

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>
          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {

  },
  nomeUsuario: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 10
  },
  fotoPerfil: {
    width: 35,
    height: 35,
    borderRadius: 25
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },
  iconeLike: {
    width: 30,
    height: 30,
  },
  btnSend: {
    paddingLeft: 5
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    paddingLeft: 5
  }
});

export default Lista;