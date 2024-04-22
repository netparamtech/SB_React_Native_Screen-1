import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{}} >
                <ImageBackground source={require('../Assets/sb-logo.png')} style={{ height: 100,marginLeft:1 }}>
                </ImageBackground>
                <View style={{ padding: 10, flex: 1, flexDirection: "row", }}>
                    <Image source={require('../Assets/04.jpg')} style={{ width: 80, height: 80, borderRadius: 40, }} />
                    <View style={{ left: 10, flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'roboto-medium', fontSize: 16, fontFamily: 'Roboto-Medium', color: '#0F0F0F' }}>Yash Salave</Text><View><Text style={{ fontSize: 12 }}>Rajput</Text></View>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                    <DrawerItemList {...props} />

                </View>

            </DrawerContentScrollView>

            <View style={{ borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 13 }}>
                        <MaterialCommunityIcons name='logout' size={23} color='#0F0F0F' />
                        <Text style={{ fontSize: 14, marginLeft: 5, color: '#0F0F0F' }}>Sign-Out</Text>
                    </View>
                </TouchableOpacity>
            </View>



        </View>

    )
}

const styles = StyleSheet.create({})