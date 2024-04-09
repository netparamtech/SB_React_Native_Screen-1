import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from './Home';
import Members from './Members';
import Matrimonial from './Matrimonial';
import Jobs from './Jobs';
import Services from './Services';
import Dashboard from './Dashboard';
import Business from './Business';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default function DrawerApplication() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='Home' component={Home}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='home' size={22} color={color} />
                    ),

                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    },
                    drawerActiveTintColor: '#FF9933',
                    drawerInactiveTintColor: '#008374'
                }}

            />
            <Drawer.Screen name='Members' component={Members}

                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name='people' size={22} color={color} />
                    ),
                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    },
                    drawerActiveTintColor: '#FF9933',
                    drawerInactiveTintColor: '#008374'
                }}
            />
            <Drawer.Screen name='Matrimonial' component={Matrimonial}
                options={{
                    drawerIcon: ({ color }) => (
                        <FontAwesome name='heartbeat' size={22} color={color} />
                    ),


                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    },
                    drawerActiveTintColor: '#FF9933',
                    drawerInactiveTintColor: '#008374'
                }}

            />
            <Drawer.Screen name='Jobs' component={Jobs}

                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name='work' size={22} color={color} />

                    ),
                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    }
                }}
            />
            <Drawer.Screen name='Services' component={Services}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name='home-repair-service' size={22} color={color} />
                    ),
                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    },
                    drawerActiveTintColor: '#FF9933',
                    drawerInactiveTintColor: '#008374'
                }}
            />
            <Drawer.Screen name='Dashboard' component={Dashboard}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name='view-dashboard-edit' size={22} color={color} />
                    ),
                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    },
                    drawerActiveTintColor: '#FF9933',
                    drawerInactiveTintColor: '#008374'
                }}
            />
            <Drawer.Screen name='Business' component={Business}
                options={{
                    drawerIcon: ({ color }) => (
                        <FontAwesome name='handshake-o' size={22} color={color} />
                    ),
                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'Roboto-Medium'
                    },
                    drawerActiveTintColor: '#FF9933',
                    drawerInactiveTintColor: '#008374'
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})