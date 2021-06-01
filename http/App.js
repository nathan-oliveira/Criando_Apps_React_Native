import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { FILMES_GET } from './src/services/api'

import Filmes from './src/components/Filmes';

const App = () => {
  const [filmes, setFilmes] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function getFilmes() {
      setLoading(true)
      const { url, options } = FILMES_GET()
      const response = await fetch(url, options);
      const json = await response.json();
      setFilmes(json)
      setLoading(false)
    }
    
    getFilmes()
  }, [])

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <FlatList
            data={filmes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </View>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator color="#09A6FF" size={40} />
        </View>
        
      )}
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
