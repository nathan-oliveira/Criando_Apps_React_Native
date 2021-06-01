import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const [width, setWidth] = React.useState(new Animated.Value(150))
  const [height, setHeight] = React.useState(new Animated.Value(50))
  const [opacity, setOpacity] = React.useState(new Animated.Value(0))

  /*
  React.useEffect(() => {
    //Animated.timing(width, {
      //toValue: 300,
      //duration: 2000,
      //useNativeDriver: false,
    //}).start();
    

    Animated.sequence([
      
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),

      Animated.parallel([
        Animated.timing(width, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }),
  
        Animated.timing(height, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),

      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),

    ]).start();

  }, [Animated, height])
  */

  /*
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(width, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 150,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  })
  */

  function carregarGrafico() {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),

      Animated.timing(height, {
        toValue: 250,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      
      <View style={{ flex: 1 }}>

        <View style={{
          height: 80,
          flexDirection: 'row',
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={carregarGrafico}>
            <Text style={{ fontSize: 25, color: '#FFFFFF' }}>
              Gerar Grafico
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Animated.Text style={{ opacity: opacity}}>Vendas</Animated.Text>

          <Animated.View style={{
            width: width,
            height: height,
            backgroundColor: '#ff0000',
            justifyContent: 'center', borderRadius: 5,
            opacity: opacity
          }}>
            <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>Grafico?</Text>
          </Animated.View>
        </View>

      </View>
    </React.Fragment>
  );
};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
*/

export default App;
