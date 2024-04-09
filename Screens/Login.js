import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  }

  return (
    <View style={styles.mainView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 30, margin: 35, color: 'black' }}>Sign in</Text>
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
                onChangeText={(txt) => { setPassword(txt) }}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
                {/* <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="gray" /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.RegiBtn}>
              <Button color={"#198754"} title="Login With Password" onPress={()=>{navigation.navigate('DrawerApplication')}}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#212529' }}> OR</Text>
            </View>
            <View style={styles.OTPBtn}>
              <Button color={"#fd7e14"} title="Login With OTP" />

              <View>
              </View>


              <View style={{ padding: 10, flexDirection: 'row' }}>

                <Text style={{ fontSize: 16, color: '#212529' }}>New User ? </Text><TouchableOpacity onPress={() => {navigation.navigate('SignUp') }} ><Text style={{ fontSize: 16, fontStyle: 'italic', color: '#198754' }}>Sign Up</Text></TouchableOpacity>

              </View>
            </View>

          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ced4da',
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 0.4,
    margin: 17,
    shadowColor: '#212529',
    elevation: 20,
    width: 330,
    height: 500
  },
  txtInput1: {
    borderWidth: 0.3,
    borderColor: 'grey',
    padding: 12,
    margin: 20,
    marginTop: -19,
  },
  txtInput2: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: 'grey',
    padding: 12,
    marginTop: 5,
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
    marginTop: 5
  },
  OTPBtn: {
    margin: 20,
    marginTop: 5,
    marginTop: 20
  },

});

export default Login;




// import { Text, View,Button} from "react-native";

// const Login = (props)=>{
//   return(
//     <View>
//       <Text>Login</Text>
//       <Button title='Home' onPress={()=>{props.navigation.navigate('Home')}}/>

//     </View>
//   );
    
// } 
// export default Login;



// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Login({navigation}) {
//   return (
//     <View>
//       <Text>Login</Text>
//       <Button title='DrawerApplication' onPress={()=>{navigation.navigate('DrawerApplication')}}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})