import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  Modal,
  View
} from 'react-native';

const App = () => {
  const [modal, setModal] = React.useState(false)

  function toggleModal() {
    setModal(!modal)
  }

  return (
    <SafeAreaView>
      <Text>
        É nada!
      </Text>
      <Button title="Abrir Modal" onPress={toggleModal} />

      <Modal animationType="slide" visible={modal}>
        <View style={{ backgroundColor: '#292929', width: '100%' }}>
          <Text style={{ color: '#FFF', fontSize: 28 }}>
            Modal
          </Text>
          <Button title="Fechar Modal" onPress={toggleModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;
