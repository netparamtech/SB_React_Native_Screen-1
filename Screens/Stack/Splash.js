import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

export default function Splash(props) {
    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate('Welcome')
      }, 2200);
    }, [])
     
  return (
    <View style={styles.ImgContainer}>
    <Image source={require('../Assets/3.png')} style={styles.Img}/>
    </View>
  )
}

const styles = StyleSheet.create({
  ImgContainer:{

    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  Img:{

    height:250,
    width:250
  }
})