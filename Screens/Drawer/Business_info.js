import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'
import ChoosePhoto from './ChoosePhoto';



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

const Status = [
    { label: 'Active', value: '1' },
    { label: 'Inactive', value: '1' },
]
const Country = [
    { label: 'India', value: 'India' },
];
const Gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
]
const Manglik = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
]
const Education = [
    { label: '10th', value: '10th' },
    { label: '12th', value: '12th' },
    { label: 'Graduation', value: 'Graduation' },
    { label: 'Diploma', value: 'Diploma' },
    { label: 'Post-Graduation', value: 'Post-Graduation' },
];

const Job = [
    { label: 'Government', value: 'Government' },
    { label: 'Private', value: 'Private' },
    { label: 'Engineer', value: 'Engineer' },
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
];

const Brothers = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
];

const Business_Types = [
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Real Estate', value: 'Real Estate' },
    { label: 'Manufacturing', value: 'Manufacturing' },
];
export default function Add_Matrimonial() {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    const renderLabel4 = () => {
        if (value5 || isFocus5) {
            return (
                <Text style={[styles.label, isFocus5 && { color: '#198754' }]}>
                    Select Country
                </Text>
            );
        }
        return null;
    };

    const renderLabel2 = () => {
        if (value3 || isFocus3) {
            return (
                <Text style={[styles.label, isFocus3 && { color: '#198754' }]}>
                    State
                </Text>
            );
        }
        return null;
    };


    const renderLabel3 = () => {
        if (value4 || isFocus4) {
            return (
                <Text style={[styles.label, isFocus4 && { color: '#198754' }]}>
                    City
                </Text>
            );
        }
        return null;
    };


    const renderLabel6 = () => {
        if (value7 || isFocus7) {
            return (
                <Text style={[styles.label, isFocus7 && { color: '#198754' }]}>
                    Select Status
                </Text>
            );
        }
        return null;
    };



    const renderLabel8 = () => {
        if (value9 || isFocus9) {
            return (
                <Text style={[styles.label, isFocus9 && { color: '#198754' }]}>
                    Number Of Brothers
                </Text>
            );
        }
        return null;
    };

    const renderLabel9 = () => {
        if (value10 || isFocus10) {
            return (
                <Text style={[styles.label, isFocus10 && { color: '#198754' }]}>
                    Business Types
                </Text>
            );
        }
        return null;
    };

    const [isFocus1, setIsFocus1] = useState(false);
    const [value1, setValue1] = useState(null);

    const [isFocus2, setIsFocus2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [isFocus3, setIsFocus3] = useState(false);
    const [value3, setValue3] = useState(null);

    const [isFocus4, setIsFocus4] = useState(false);
    const [value4, setValue4] = useState(null);

    const [isFocus5, setIsFocus5] = useState(false);
    const [value5, setValue5] = useState(null);


    const [isFocus6, setIsFocus6] = useState(false);
    const [value6, setValue6] = useState(null);

    const [isFocus7, setIsFocus7] = useState(false);
    const [value7, setValue7] = useState(null);

    const [isFocus8, setIsFocus8] = useState(false);
    const [value8, setValue8] = useState(null);

    const [isFocus9, setIsFocus9] = useState(false);
    const [value9, setValue9] = useState(null);

    const [isFocus10, setIsFocus10] = useState(false);
    const [value10, setValue10] = useState(null);

    const [rangeFeet, setRangeFeet] = useState(0)
    const [rangeInches, setRangeInches] = useState(0)


    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>

            <View style={styles.MainContainer}>
                <View style={styles.Business_info_Container}>
                    <Text style={styles.Business_info_ContainerTXT}>Bussiness Info</Text>
                </View>

                <View style={styles.FormContainr}>

                    {/* <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Name</Text>
                    </View> */}
                    <View style={styles.InputBarContainer}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business Name' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>

                    <View style={styles.containerDropDown5}>
                        {renderLabel9()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus10 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Business_Types}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus9 ? 'Select Business Type' : '...'}
                            searchPlaceholder="Search..."
                            value={value10}
                            onFocus={() => setIsFocus10(true)}
                            onBlur={() => setIsFocus10(false)}


                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setValue10(null) }} >
                                    {value10 ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus9 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue10(item.value);
                                setIsFocus10(false);
                            }}

                        />
                    </View>
                    {/* 
                    <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Father Name</Text>
                    </View> */}
                    <View style={styles.InputBarContainer2}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Street Address' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>

                    <View style={styles.containerDropDown5}>
                        {renderLabel4()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus5 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Country}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus5 ? 'Select Country' : '...'}
                            searchPlaceholder="Search..."
                            value={value5}
                            onFocus={() => setIsFocus5(true)}
                            onBlur={() => setIsFocus5(false)}
                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setValue5(null) }} >
                                    {value5 ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus5 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue5(item.value);
                                setIsFocus5(false);
                            }}

                        />
                    </View>

                    <View style={styles.containerDropDown3}>
                        {renderLabel2()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus3 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={State}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus3 ? 'Select State' : '...'}
                            searchPlaceholder="Search..."
                            value={value3}
                            onFocus={() => setIsFocus3(true)}
                            onBlur={() => setIsFocus3(false)}

                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setValue3(null) }} >
                                    {value3 ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus3 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue3(item.value);
                                setIsFocus3(false);
                            }}

                        />
                    </View>
                    {/* ############################################################# */}


                    <View style={styles.containerDropDown4}>
                        {renderLabel3()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus4 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={City}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus4 ? 'Select City' : '...'}
                            searchPlaceholder="Search..."
                            value={value4}
                            onFocus={() => setIsFocus4(true)}
                            onBlur={() => setIsFocus4(false)}

                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setValue4(null) }} >
                                    {value4 ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus4 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue4(item.value);
                                setIsFocus4(false);
                            }}

                        />
                    </View>


                    {/* <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Mother Name</Text>
                    </View> */}
                    <View style={styles.InputBarContainer3}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact 1' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>





                    <View>
                        {/* <View style={styles.InputBarNameContainer_Four}>
                            <Text style={styles.InputBarTXT_Contacts}>Paternal Gotra</Text>
                        </View> */}
                        <View style={styles.InputBarContainer_Contacts}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact 2' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>
                    <View>

                        <View style={styles.InputBarContainer_Contacts2}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact 3' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.PersonalPHOTOcontainer}>
                    <View>
                        <ChoosePhoto />
                    </View>
                </View>
                <View>
                    {/* <View style={styles.InputBarNameContainer_Bussiness_Email}>
                            <Text style={styles.InputBarTXT_Bussiness_Email} >Annual Package</Text>
                        </View> */}
                    <View style={styles.InputBarContainer_Email}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Email' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>
                </View>


                <View style={styles.containerDropDown5}>
                    {renderLabel6()}

                    {/* call kela */}

                    <Dropdown
                        style={[styles.dropdown, isFocus7 && { borderColor: '#ffc107' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Status}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus7 ? 'Select Status' : '...'}
                        searchPlaceholder="Search..."
                        value={value7}
                        onFocus={() => setIsFocus7(true)}
                        onBlur={() => setIsFocus7(false)}
                        renderRightIcon={() => (
                            <TouchableOpacity onPress={() => { setValue7(null) }} >
                                {value7 ?
                                    <Entypo
                                        color={isFocus7 ? 'green' : 'black'}
                                        name="circle-with-cross"
                                        size={20}
                                    />

                                    : null

                                }


                            </TouchableOpacity>

                        )}

                        onChange={item => {
                            setValue7(item.value);
                            setIsFocus7(false);
                        }}

                    />
                </View>
                <View>
                    <View style={styles.InputBarContainer_Description}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business Website Link' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>
                    <View style={styles.InputBarContainer_Description}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business GoogleMap Link' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>
                </View>
                <View style={styles.PersonalPHOTOcontainer}>
                    <View >
                        <TouchableOpacity style={styles.SubmitButton} onPress={() => { }}>
                            <Text style={styles.SubmitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    // MainContainer: {
    //     flex: 1,
    //     padding: 15,
    //     margin: 15,
    //     // borderWidth:2,
    //     // marginBottom:100


    //       shadowOpacity: 0.25,
    //       shadowRadius: 5,
    //       elevation: 1.2,




    // },
    PersonalPHOTOcontainer: {
        paddingVertical: 5
    },
    PersonalBiodata_text: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000',
        marginTop: 15,

    },
    PersonalPHOTO_text: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000',
        marginTop: 10,

    },
    SliderRange: {
        fontSize: 23,
        color: 'orange',
        bottom: 10

    },
    SlideContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10


    },
    FeetTXT: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000',
        marginTop: 10



    },
    InchesTXT: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000'


    },
    FeetTXTContainer: {


    },
    SlideFIRST: {
        height: 50,
        width: 260,
        bottom: 10

    },
    SlideSECOND: {
        height: 50,
        width: 260,
        bottom: 10
    },
    MainContainer: {
        flex: 1,
        padding: 15,
        margin: 15,
        backgroundColor: '#fff', // Ensure there's a background color, as shadows won't be visible without it

        // Common style for both platforms
        borderRadius: 8, // Optional: if you want rounded corners

        // Shadow properties for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Shadow direction: down
        shadowOpacity: 0.1,
        shadowRadius: 8,

        // Shadow property for Android
        elevation: 5, // Increase this value to increase shadow
    },
    Business_info_Container: {
        // justifyContent:'center',
        // alignItems:"center"

    },
    Business_info_ContainerTXT: {
        fontSize: 25,
        marginTop: 10,
        backgroundColor: '#e9ecef',
        padding: 5,
        // color: '#fff',
        // paddingHorizontal:15
        textAlign: 'center'

    },
    InputBarTXT: {
        fontSize: 20,
        color: '#000',
        marginTop: 18,
        top: 5 // latest closeness to inputbar
    },
    InputBarTXT_Contacts2: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    InputBarTXT_Contacts3: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    InputBarTXT_Bussiness_Email: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    InputBarTXT_Contacts: {
        // fontSize: 20,
        // color: '#000',
        // marginBottom:40,
        // marginTop: 15,

        fontSize: 20,
        color: '#000',
        // marginTop:10
        top: 5 // latest closeness to inputbar


    },
    InputBarPlaceHolder: {
        justifyContent: 'center',
        paddingHorizontal: 15,


    },
    InputBarNameContainer_TWO: {
        marginBottom: 8,
        // marginBottom: 15,


    },
    InputBarNameContainer_Three: {
        marginTop: 5

    },
    InputBarNameContainer: {
        // marginTop: 18,

    },
    iconAntDesigns: {
        left: 70,

    },
    InputBarContainer: {
        // height: 45,
        // marginTop: 5,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 18,
        borderColor: 'gray',
        borderWidth: 0.5,

    },
    InputBarContainer2: {
        // height: 45,
        // marginTop: 5,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        // marginTop: 18,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 5,


    }, InputBarContainer3: {
        // height: 45,
        // marginTop: 5,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        // marginTop: 18,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 5,


    },
    InputBarContainer_Street: {
        borderWidth: 1,
        height: 45,
        borderWidth: 0.5,
        borderRadius: 8,

    },
    InputBarContainer_Contacts: {
        // borderWidth: 1,
        // height: 45,
        // // marginTop: 5,
        // borderWidth: 0.5,
        borderRadius: 8,
        // // marginVertical:10
        // marginBottom: 15,
        // // marginTop: 5,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarContainer_Date: {
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "space-between",
        justifyContent: "space-between"

    },
    CalenderICON: {
        left: 70,
        color: 'green'
    },
    dropdown: {
        height: 47,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 15,
        width: 'auto',
    },
    placeholderStyle: {
        fontSize: 15,
        color: '#6c757d'
    },
    selectedTextStyle: {
        fontSize: 16,
        paddingHorizontal: 9,
        color: '#0F0F0F'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    containerDropDown1: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarTXT_two: {
        // fontSize: 20,
        // color: '#000',
        // marginTop: 10,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        top: 1 // latest closeness to inputbar



    },
    InputBarTXT_three: {
        fontSize: 20,
        color: '#000',
        // marginTop:10
        top: 5 // latest closeness to inputbar

    },
    InputBarNameContainer_Six: {
        marginTop: 5,

    },
    InputBarNameContainer_Bussiness_Email: {
        marginTop: 5,

    },
    InputBarNameContainer_Five: {
        marginTop: 5,

    },
    InputBarNameContainer_Four: {
        marginBottom: 5
    },
    InputBarTXT_five: {
        // marginTop: 15,
        fontSize: 20,
        color: '#000',
        // marginTop: 15,
        // marginTop: 15,
        // fontSize: 20,
        // color: '#000',
        top: 1 // latest closeness to inputbar



    },
    InputBarTXT_four: {
        // marginTop: 15,
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar


    },
    InputBarTXT_six: {
        //  marginBottom: 15,
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        top: 1 // latest closeness to inputbar


    },
    containerDropDown2: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,


    },
    containerDropDown3: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    containerDropDown4: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Contacts3: {
        borderWidth: 1,
        height: 45,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Contacts2: {
        // borderWidth: 1,
        // height: 45,
        // // marginTop: 5,
        borderRadius: 8,
        // // marginVertical:10
        // marginBottom: 15,
        // marginTop: 5,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarTXT_SIX: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    containerDropDown5: {
        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarTXT_Business_Website: {
        fontSize: 20,
        color: '#000',
    },
    InputBarNameContainer_Business_Website: {
        marginTop: 5,

    },
    InputBarNameContainer_Description: {
        marginTop: 5,

    },
    InputBarTXT_Description: {
        fontSize: 20,
        color: '#000',
    },
    InputBarContainer_Description:
    {
        height: 120,
        // marginTop: 5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarContainer_DetailsIFany:
    {
        borderWidth: 1,
        height: 120,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginVertical: 22,
        borderColor: '#FF9933'
    },
    InputBarContainer_Email: {
        // borderWidth: 1,
        // height: 45,
        // // marginTop: 5,
        // borderWidth: 0.5,
        borderRadius: 8,
        // // marginVertical:10
        // marginBottom: 15,
        // marginTop: 5,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarTXT_Google_Map: {
        fontSize: 20,
        color: '#000',
    },
    InputBarNameContainer_Google_Map: {
        marginTop: 5,

    },
    InputBarContainer_Google_Map:
    {
        borderWidth: 1,
        height: 120,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Business_Website: {
        // borderWidth: 1,
        height: 120,
        // marginTop: 5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    SubmitButton: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 16,
        backgroundColor: '#008577',
        bottom: 6,
        width: 90,
        alignSelf: 'center',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Shadow direction: down
        shadowOpacity: 0.1,
        shadowRadius: 8,

    },
    SubmitButtonText:
    {
        fontSize: 15,
        padding: 10,
        color: '#fff',
        textAlign: 'center',
        alignContent: 'center',
        bottom: 1.1,
    },
    containerDrops: {
        // flexGrow: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 1,
        // margin: 10,
        // width: 300,
        // marginTop: 30,
        alignSelf: 'center',
        // paddingBottom: 80,
        // shadowColor: '#212529',
        // elevation: 15,
        // minHeight: '50%'
        padding: 8,

    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',   /// new changes
        left: 22,
        // top: 0.4,
        top: -10,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 10  // new chnges
    },
})
