import React, { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { globalStyles } from '../shared/globalStyles';

export default function ItemDescriptionScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text>Item Description</Text>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text>Hide Modal</Text>
        </Pressable>
      </Modal>
    </View>
  );
}
