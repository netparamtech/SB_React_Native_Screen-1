import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const QueryForm = ({visible, onPressClose}) => {
  return (
    <View>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.ModalView}>
          <View style={styles.ModalContent}>
            <TouchableOpacity onPress={onPressClose} style={styles.CloseBTN}>
              <AntDesign name="closecircle" size={23} color={'#fd7e14'} />
            </TouchableOpacity>
            <TextInput placeholder="Enter Name" style={styles.TextInput} />
            <TextInput placeholder="Enter Email" style={styles.TextInput} />
            <TextInput placeholder="Enter Mobile" style={styles.TextInput} />
            <TextInput
              placeholder="Please Provide a Comprehensive description of the community you intend to add , including any sub-communities, if applicable..."
              style={styles.BigTextInput}
            />
            <TouchableOpacity onPress={onPressClose} style={{marginTop: 10}}>
              <Text style={styles.SubmitTXT}>Submit</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: '#bb86fc',
    // padding: 10,
    // height: 130,
    // width: 200,
    // margin: 10,
    // borderRadius: 20,
    // left: 140,
    // top: 30,
    // position: 'absolute',
  },
  ModalContent: {
    backgroundColor: '#ffff',
    width: '80%',
    height: 'auto',
    padding: 15,
    borderRadius: 7,
    justifyContent: 'center',
  },
  TextInput: {
    borderWidth: 0.9,
    margin: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  BigTextInput: {
    borderWidth: 0.9,
    margin: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    height: 100,
    textAlignVertical: 'top',
    width: '92%',
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  CloseBTN: {
    alignSelf: 'flex-end',
    paddingBottom: 10,
  },
  SubmitTXT: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    width: 90,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#198754',
  },
});
