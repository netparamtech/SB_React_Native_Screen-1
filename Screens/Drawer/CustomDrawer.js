    import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
    import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
    import React, { useEffect, useState } from 'react'
    import {
        DrawerContentScrollView,
        DrawerItemList,
    } from '@react-navigation/drawer';
    import axios from 'axios';

    export default function CustomDrawer(props) {
        
    const [profileData,setProfileData]=useState(null);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU"


        const FetchProfile = ()=>{
            axios.get('https://uat-api.socialbharat.org/api/profile',{
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }).then((response)=>{ setProfileData(response.data.data || []);
                

            }).catch((error)=>{console.log(error)})
        }
        useEffect(() => {
            FetchProfile()
        }, [])        
        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props} contentContainerStyle={{}} >
                    <ImageBackground source={require('../Assets/sb-logo.png')} style={{ height: 100,marginLeft:1 }}>
                    </ImageBackground>
                    {
                        profileData && (

                    <View style={{ padding: 10, flex: 1, flexDirection: "row", }} >
                    <Image source={{ uri: profileData.photo }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                    <View style={{ left: 10, flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'roboto-medium', fontSize: 16, fontFamily: 'Roboto-Medium', color: '#0F0F0F' }}>{profileData.name}</Text><View><Text style={{ fontSize: 12 }}>{profileData.community.name}</Text></View>
                        </View>
                    </View>
                        )                   
                         }

                    <View style={{ backgroundColor: 'white', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                        <DrawerItemList {...props} />

                    </View>
{}
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