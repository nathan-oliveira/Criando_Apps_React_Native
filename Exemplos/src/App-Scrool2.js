import React from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native';
import Pessoa from "./components/Pessoa.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: [
        { id: '1', nome: "nome 1", idade: "21" },
        { id: '2', nome: "nome 2", idade: "18" },
        { id: '3', nome: "nome 3", idade: "22" },
        { id: '4', nome: "nome 4", idade: "26" },
        { id: '5', nome: "nome 5", idade: "15" },
        { id: '6', nome: "nome 6", idade: "19" },
      ]
    }
  }

  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <FlatList
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>  <Pessoa data={item} />}
          >
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
          </FlatList>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
