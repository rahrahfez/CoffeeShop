import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';

export default function ItemDescriptionScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>item description</Text>
    </View>
  );
}
