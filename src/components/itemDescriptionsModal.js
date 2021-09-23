import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { globalStyles } from '../shared/globalStyles';

export default function ItemDescriptionsModal({ handleOpen, handleClose }) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={handleOpen}
      >
        <View style={globalStyles.container}>
          <Text>Item Description</Text>
          <Pressable
            onPress={handleClose}
            >
            <Text style={{borderColor:'blue', borderWidth:1, padding: 15}}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
