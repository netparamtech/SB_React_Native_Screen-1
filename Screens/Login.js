import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.SignInTXT}>Sign in</Text>
          <TextInput
            placeholderTextColor={'#adb5bd'}
            placeholder="Enter Mobile Number"
            style={styles.txtInput1}
          />
          <View style={styles.passwordInput}>
            <TextInput
              placeholderTextColor={'#adb5bd'}
              placeholder="Enter Password"
              style={styles.txtInput2}
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={txt => {
                setPassword(txt);
              }}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIconContainer}></TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.RegiBtn}
            onPress={() => {
              navigation.navigate('DrawerApplication');
            }}>
            <Text style={styles.RegiBtnTXT}>Login With Password</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#212529'}}> OR</Text>
          </View>
          <View style={styles.OTPBtn}>
            <TouchableOpacity style={styles.MainOTPbtn}>
              <Text style={styles.LoginTXT}>Login With OTP</Text>
            </TouchableOpacity>

            <View></View>

            <View style={{padding: 10, flexDirection: 'row'}}>
              <Text style={{fontSize: 16, color: '#212529'}}>New User ? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text
                  style={{fontSize: 16, fontStyle: 'italic', color: '#198754'}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ced4da',
    flex: 1,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 5,
    margin: 17,
    shadowColor: '#212529',
    elevation: 5,
    width: 350,
    height: 470,
    borderRadius: 10,
  },
  SignInTXT: {
    fontSize: 30,
    color: '#333',
    padding: 10,
  },
  txtInput1: {
    borderWidth: 0.3,
    borderColor: 'grey',
    padding: 10,
    margin: 20,
    // marginTop: -19,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  txtInput2: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: 'grey',
    padding: 12,
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 20,
  },
  RegiBtn: {
    margin: 20,
    marginTop: 20,
    backgroundColor: '#198754',
    borderRadius: 5,
  },
  RegiBtnTXT: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: '#ffff',
  },
  OTPBtn: {
    margin: 20,
    marginTop: 5,
    marginTop: 20,
  },
  MainOTPbtn: {
    backgroundColor: '#fd7e14',
    borderRadius: 5,
  },
  LoginTXT: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: '#ffff',
  },
});

export default Login;
