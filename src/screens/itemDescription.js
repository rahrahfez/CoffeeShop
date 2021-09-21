import React, { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { globalStyles } from '../shared/globalStyles';

export default function ItemDescriptionScreen({ open }) {
  const [modalVisable, setModalVisable] = useState(open);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
      >
        <View style={globalStyles.container}> 
        <Pressable
          onPress={() => setModalVisable(!modalVisable)}
        >
          <Text style={{borderColor:'blue', borderWidth:1}}>Hide Modal</Text>
        </Pressable>
        </View>
      </Modal>
    </View>
  );
}
