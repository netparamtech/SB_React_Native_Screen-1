import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const QueryForm = () => {
  return (
    <View>
      <Modal>
        <View style={styles.ModalView}>
          <View>
            <Text>Yash</Text>
            <Text>Yash</Text>
            <Text>Yash</Text>
            <Text>Yash</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QueryForm;

const styles = StyleSheet.create({
  ModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
