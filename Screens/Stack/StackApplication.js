import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableHighlightComponent, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../Welcome';
import Login from '../Login';
import SIgnUp from '../SIgnUp';
import Home from '../Drawer/Home';
import DrawerApplication from '../Drawer/DrawerApplication';
import Views from '../Drawer/View';
import Splash from './Splash';
import Messages from '../Drawer/Messages';
const Stack = createNativeStackNavigator();

export default function StackApplication() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SignUp' component={SIgnUp} />
            <Stack.Screen name='DrawerApplication' component={DrawerApplication} options={{headerShown:false}} />
            <Stack.Screen name='View' component={Views}/>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name='Messages' component={Messages} options={{headerShown:false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})