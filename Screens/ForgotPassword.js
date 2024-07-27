import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ForgotPassword = () => {
  const [inputQueryPassword1, setinputQueryPassword1] = useState('');
  const [inputQueryPassword2, setinputQueryPassword2] = useState('');
  const [inputCode, setinputCode] = useState('');

  const handlePasswordInputChange = (text, box) => {
    if (box == 1) {
      setinputQueryPassword1(text.replaceAll(' ', ''));
      //   console.log('Input Pass1', inputQueryPassword1);
    } else {
      setinputQueryPassword2(text.replaceAll(' ', ''));
      //   console.log('Input Pass2', inputQueryPassword2);
    }
  };
  const handleCodeInputChange = text => {
    const input = text.replace(/\D/g, '');
    const trimmedInput = input.slice(0, 5);
    setinputCode(trimmedInput);
    // console.log('Input code', trimmedInput);
    // console.log('Input code', inputCode);
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImgContainer}>
        <Image source={require('./Assets/sb-logo.png')} style={styles.Img} />
        {/* <Image source={require('./Assets/3.png')} style={styles.Img} /> */}
      </View>
      <View style={styles.InputContianer}>
        <TextInput
          value={inputCode}
          placeholder="Enter Four Digit Code"
          style={styles.Input}
          onChangeText={handleCodeInputChange}
          keyboardType="number-pad"
        />

        <TextInput
          value={inputQueryPassword1}
          placeholder="Enter New Password"
          style={styles.Input}
          onChangeText={text => handlePasswordInputChange(text, 1)}
        />
        <TextInput
          value={inputQueryPassword2}
          placeholder="Re-Enter Password"
          style={styles.Input}
          onChangeText={text => handlePasswordInputChange(text, 2)}
        />
        <TouchableOpacity style={styles.ButtonContainer}>
          <Text style={styles.ButtonTXT}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },

  ImgContainer: {
    alignItems: 'center',
    backgroundColor: '#333',
    alignSelf: 'center',
    width: 300,
  },
  Img: {
    width: '100%',
    height: 100,
  },
  InputContianer: {
    padding: 20,
    margin: 10,
    // backgroundColor: 'red',
  },
  Input: {
    borderWidth: 1,
    borderRadius: 7,
    margin: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffff',
  },
  ButtonContainer: {
    padding: 10,
    alignSelf: 'center',
    width: '100%',
  },
  ButtonTXT: {
    backgroundColor: '#198754',
    fontSize: 16,
    padding: 10,
    borderRadius: 30,
    textAlign: 'center',
    color: '#ffff',
    // borderWidth: 1,
  },
});
