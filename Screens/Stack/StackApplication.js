import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  TouchableHighlightComponent,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../Welcome';
import Login from '../Login';
import SIgnUp from '../SIgnUp';
import Home from '../Drawer/Home';
import DrawerApplication from '../Drawer/DrawerApplication';
import Views from '../Drawer/View';
import Splash from './Splash';
import Messages from '../Drawer/Messages';
import Business_info from '../Drawer/Business_info';
import Add_Matrimonial from '../Drawer/Add_Matrimonial';
import Create_Events from '../Drawer/Create_Events';
import Basic_Profile from '../Drawer/Basic_profile';
import Post_Job from '../Drawer/Post_Job';
import Sub_Service from '../Drawer/Sub_Service';
import ManageProfileView from '../Drawer/DashBoard/ManageProfileView';
import Matrimonial_info from '../Drawer/DashBoard/Matrimonial_info';
import Education_info from '../Drawer/DashBoard/Education-info/Education_info';
import Address_info from '../Drawer/DashBoard/Address_info/Address_info';
import CurrentOpening from '../Drawer/CurrentOpening';
import Search from '../Drawer/DashBoard/Events/Search';
import ViewService from '../Services/ViewService';
import RatingScreen from '../Drawer/RatingScreen';
import ForgotPassword from '../ForgotPassword';
const Stack = createNativeStackNavigator();

export default function StackApplication() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SIgnUp} />
        <Stack.Screen
          name="DrawerApplication"
          component={DrawerApplication}
          options={{headerShown: false}}
        />
        <Stack.Screen name="View" component={Views} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Business_info" component={Business_info} />
        <Stack.Screen name="Add_Matrimonial" component={Add_Matrimonial} />
        <Stack.Screen name="Create_Events" component={Create_Events} />
        <Stack.Screen name="Basic_Profile" component={Basic_Profile} />
        <Stack.Screen name="Post_Job" component={Post_Job} />
        {/* //------------------------------------ */}
        <Stack.Screen name="Sub_Service" component={Sub_Service} />
        {/* <Stack.Screen name='Business_info' component={Business_info}/> */}
        <Stack.Screen name="Basic_profile" component={Basic_Profile} />
        {/* <Stack.Screen name='Create_Events' component={Create_Events}/> */}
        <Stack.Screen name="Profile" component={ManageProfileView} />
        <Stack.Screen name="Matrimonial_info" component={Matrimonial_info} />
        <Stack.Screen name="Education_info" component={Education_info} />
        <Stack.Screen name="Address_info" component={Address_info} />
        <Stack.Screen name="CurrentOpening" component={CurrentOpening} />
        <Stack.Screen name="SearchService" component={Search} />
        <Stack.Screen name="ViewSerivce" component={ViewService} />
        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
