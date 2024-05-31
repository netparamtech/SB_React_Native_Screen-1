import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import { SliderBox } from "react-native-image-slider-box";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-reanimated';

const Sub_Services = [
    {
        'Service': 'Restaurant and Catering Services',
        'Contact1': '7770089444',
        'Contact2': '3084827393',
        'Experience': '3 Years Of Experience in This Field',
        'Description': 'Having Fast Food Restro Chain in Pune, i have multiple franchise',
        'Profile_Photo': require('../Assets/maintain.png'),
        'name': 'Yash Salave',
        'Rating': '4',
        'Total Participate': '1',
        'Service_At': 'Pune',
        'State': 'Maharashtra',
        'id': '1'
    },
    {
        'Service': 'Food Delivery Services',
        'Contact1': '9765679879',
        'Contact2': '3084827393',
        'Experience': '2 Years Of Experience in This Field',
        'Description': 'Having Fast Food Restro Chain in Pune, i have multiple franchise',
        'Profile_Photo': require('../Assets/04.jpg'),
        'name': 'Kedar Patil',
        'Rating': '3',
        'Total Participate': '1',
        'Service_At': 'Panji',
        'State': 'Goa',
        'id': '2'
    },
    {
        'Service': 'Grocery Delivery Services',
        'Contact1': '7748484885',
        'Contact2': '3084827393',
        'Experience': '1 Years Of Experience in This Field',
        'Description': 'Having Fast Food Restro Chain in Pune, i have multiple franchise',
        'Profile_Photo': require('../Assets/service4.png'),
        'name': 'Yash Salave',
        'Rating': '1',
        'Total Participate': '1',
        'Service_At': 'Mumbai',
        'State': 'Maharashtra',
        'id': '3'
    },
    {
        'Service': 'Public Transportation',
        'Contact1': '7499736457',
        'Contact2': '3084827393',
        'Experience': '31 Years Of Experience in This Field',
        'Description': 'Having Fast Food Restro Chain in Pune, i have multiple franchise',
        'Profile_Photo': require('../Assets/04.jpg'),
        'name': 'Pavan patil',
        'Rating': '4',
        'Total Participate': '2',
        'Service_At': 'Kota',
        'State': 'Rajasthan',
        'id': '4'
    },
    {
        'Service': 'Electrical Services',
        'Contact1': '09475647893',
        'Contact2': '3084827393',
        'Experience': '22 Years Of Experience in This Field',
        'Description': 'Having Fast Food Restro Chain in Pune, i have multiple franchise',
        'Profile_Photo': require('../Assets/04.jpg'),
        'name': 'Saurabh Patil',
        'Rating': '4',
        'Total Participate': '1',
        'Service_At': 'Jaipur',
        'State': 'Rajasthan',
        'id': '5'
    }
];

const State = [
    { label: 'Maharashtra', value: '1' },
    { label: 'Goa', value: '2' },
    { label: 'Rajasthan', value: '3' },
    { label: 'Bihar', value: '4' },
    { label: 'Gujrat', value: '5' },
    { label: 'MP', value: '6' },
    { label: 'Up', value: '7' },
];

const City = [
    { label: 'Jaipur', value: '3' },
    { label: 'Mumbai', value: '1' },
    { label: 'Raipur', value: '4' },
    { label: 'Surat', value: '5' },
    { label: 'Indore', value: '6' },
    { label: 'Ayyodhya', value: '7' }
];

export default function Sub_Service() {

    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);

    const [value3, setValue3] = useState(null);
    const [isFocus3, setIsFocus3] = useState(false);



    return (
        <ScrollView style={styles.MainContainer}>
            <View style={styles.ButtonConatiner}>
                <TouchableOpacity style={styles.FirstButtonConatiner}>
                    <Text style={styles.FirstButtonName}>My Registered Service</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SecondButtonConatiner}>
                    <Text style={styles.SecondButtonName}>View All Services/Create</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.MainSearchContainers}>
                <View style={styles.SearchContainer}>
                    <FontAwesome name={'search'} size={18} />
                    <TextInput placeholder='Search Business ...' style={{ fontSize: 15 }}></TextInput>
                </View>
                <View style={styles.containerDropDown2}>
                    <Dropdown
                        style={[styles.dropdown, isFocus2 && { borderColor: '#008577' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={State}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus2 ? 'Select Your State' : '...'}
                        searchPlaceholder="Search..."
                        value={value2}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}
                        onChange={item => {
                            setValue2(item.value);
                            setIsFocus2(false);
                        }}
                    />
                </View>
                <View style={styles.containerDropDown3}>
                    <Dropdown
                        style={[styles.dropdown, isFocus3 && { borderColor: '#008577' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={City}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus3 ? 'Select Your City' : '...'}
                        searchPlaceholder="Search..."
                        value={value3}
                        onFocus={() => setIsFocus3(true)}
                        onBlur={() => setIsFocus3(false)}
                        onChange={item => {
                            setValue3(item.value);
                            setIsFocus3(false);
                        }}
                    />
                </View>
            </View>
            <View style={styles.CardsContainer}>
                {Sub_Services.map(({ Service, Contact1, Contact2, Experience, Description, Profile_Photo, name, id, Service_At, Total_Participate, Rating, State }) => (
                    <View style={styles.Card} key={id}>
                        <Image source={Profile_Photo} style={styles.Image} />
                        <View style={styles.InfoContainer}>
                            <View style={styles.StarIcon}>
                                <AirbnbRating size={24} showRating={false} defaultRating={1} />
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Name:</Text>
                                <Text style={styles.Value}>{name}</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Service:</Text>
                                <Text style={styles.Value}>{Service}</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Service At:</Text>
                                <Text style={styles.Value}>{Service_At} ({State})</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Rating:</Text>
                                <Text style={styles.Value}>{Rating}</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Total Participate:</Text>
                                <Text style={styles.Value}>{Total_Participate}</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Experience:</Text>
                                <Text style={styles.Value}>{Experience}</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Description:</Text>
                                <Text style={styles.Value}>{Description}</Text>
                            </View>
                            <View style={styles.InfoItem}>
                                <Text style={styles.Label}>Contact Numbers:</Text>
                                <Text style={styles.Value}>{Contact1}, {Contact2}</Text>
                            </View>
                            {/* ================================================================== */}

                            <View style={styles.IconsNew}>
                                <TouchableOpacity onPress={() => {}} >
                                    <Image source={require('../Assets/image.png')} style={styles.chatIcon} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {}} >
                                    <Text style={{ fontSize: 17.5, color: "#008577" }}>VIEW</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {}} >
                                    <Text style={{ fontSize: 17.5, color: "#008577" }}>FEEDBACK</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ButtonConatiner: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        gap: 10,
        // right: 10,
        // margin: 15,
        alignSelf: 'center',
        // flex:1
        margin: 5


    },
    FirstButtonConatiner: {
        // flexDirection: 'row',
        // borderWidth: 1,
        padding: 10,
        // width: 90,
        // alignItems: 'center',
        borderRadius: 10,
        // gap: 10,
        borderColor: '#008577',
        // alignContent: "center",
        // alignSelf: 'center',
        borderWidth: 1,
        alignSelf: 'flex-start',


    },
    FirstButtonName: {
        fontSize: 13,
        color: '#008577',
    },
    SecondButtonName: {
        fontSize: 13,
        color: '#008577',
    },
    SecondButtonConatiner: {
        borderWidth: 1,
        // width: 220.5,
        // flexDirection: 'row',
        alignItems: "center",
        borderRadius: 10,
        // gap: 6,
        // paddingHorizontal: 10,
        borderColor: '#008577',
        // alignContent: 'center',
        padding: 10,
        alignSelf: 'flex-end'
    },
    Icons: {
        color: '#ffc107',
    },
    MainSearchContainers: {
        alignItems: 'center'
    },
    SearchContainer: {
        borderWidth: 1,
        // width: 320,
        width: 289.8,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 9,
        borderColor: '#008577',
        // marginBottom: 15
    },
    containerDropDown: {
        backgroundColor: 'white',
        padding: 16,
        borderColor: '#008577',
    },
    dropdown: {
        height: 47,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 289.8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#6c757d'
    },
    selectedTextStyle: {
        fontSize: 16,
        paddingHorizontal: 9,
        color: '#0F0F0F'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    containerDropDown2: {
        margin: 10,
    },
    MainCardsContainer: {},
    CardsContainer: {
        // // padding: 10,
        // // margin: 10,
        // backgroundColor: '#fff',
        // width: 'auto',
        // height: 'auto',
        // shadowOpacity: 0.25,
        // shadowRadius: 10,
        // elevation: 5,
        // borderRadius: 10,
        bottom: 17
    },
    imeges: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        borderRadius: 10,
    },
    business_name: {
        fontSize: 19,
        color: '#0F0F0F',
        padding: 1,
        margin: 5
    },
    Rating: {
        fontSize: 15,
        color: '#0F0F0F',
        margin: 5,
        padding: 1,
    },
    containerDropDown3: {
        padding: 16,
        bottom: 15,
        justifyContent: "center"
    },
    Total_Participate: {
        fontSize: 15,
        color: '#0F0F0F',
        borderRadius: 9,
        margin: 5,
        padding: 1,
    },
    Experience: {
        fontSize: 15,
        color: '#0F0F0F',
        padding: 1,
        backgroundColor: '#E7EFEF',
        margin: 5,
        borderRadius: 9,
        paddingHorizontal: 5
    },
    Service_At: {
        fontSize: 15,
        color: '#0F0F0F',
        backgroundColor: '#E7EFEF',
        padding: 1,
        margin: 5,
        borderRadius: 9,
        paddingHorizontal: 5
    },
    contactNumbers: {
        fontSize: 15,
        color: '#0F0F0F',
        backgroundColor: '#E7EFEF',
        padding: 1,
        margin: 5,
        borderRadius: 9,
        paddingHorizontal: 5
    },
    Description: {
        fontSize: 15,
        color: '#0F0F0F',
        margin: 5,
        borderTopColor: '#adb5bd',
        padding: 1
    },
    businessNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    value: {
        fontSize: 16,
    },
    infoContainer: {
        paddingHorizontal: 10,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    // image: {
    //     height: 200,
    //     width: 300,
    //     alignSelf: 'center',
    //     borderRadius: 10,
    // },
    // CardsContainer: {
    //     padding: 10,
    //     marginHorizontal: 10,
    // },
    Card: {
        // marginBottom: 20,
        // borderWidth: 1,
        // borderColor: '#008577',
        // borderRadius: 10,
        // padding:10
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        width: 'auto',
        height: 'auto',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 10,
    },
    Image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        // resizeMode:'contain'
    },
    InfoContainer: {
        paddingHorizontal: 10,
    },
    InfoItem: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    Label: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 100,
    },
    Value: {
        fontSize: 16,
        flex: 1,
    },

    StarIcon: {
        // flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    IconsNew: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingBottom: 15
    },
    chatIcon: {
        width: 35,
        height: 35,
        margin: 2
    
      },


});
