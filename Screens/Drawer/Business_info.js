import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
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
const Country = [
    { label: 'India', value: 'India' },

];
const Status = [
    { label: 'Active', value: '1' },
    { label: 'Inactive', value: '1' },
]


export default function Business_info() {

    const [isFocus1, setIsFocus1] = useState(false);
    const [value1, setValue1] = useState(null);

    const [isFocus2, setIsFocus2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [isFocus3, setIsFocus3] = useState(false);
    const [value3, setValue3] = useState(null);

    const [isFocus4, setIsFocus4] = useState(false);
    const [value4, setValue4] = useState(null);
    return (
        <ScrollView  style={{backgroundColor:'#fff'}}>

            <View style={styles.MainContainer}>
                <View style={styles.Business_info_Container}>
                    <Text style={styles.Business_info_ContainerTXT}>Business Info</Text>
                </View>

                <View style={styles.FormContainr}>

                    <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Business Name</Text>
                    </View>
                    <View style={styles.InputBarContainer}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business Name' placeholderTextColor={'#6c757d'} ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.InputBarTXT_two}>Business Type</Text>
                    </View>

                    <View style={styles.containerDropDown1}>
                        <Dropdown
                            style={[styles.dropdown, isFocus1 && { borderColor: '#008577' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={City}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus1 ? 'Select Your City' : '...'}
                            searchPlaceholder="Search..."
                            value={City}
                            onFocus={() => setIsFocus1(true)}
                            onBlur={() => setIsFocus1(false)}
                            onChange={item => {
                                setValue1(item.value);
                                setIsFocus1(false);
                            }}

                        />
                    </View>

                    <View>
                        <View style={styles.InputBarNameContainer_TWO}>
                            <Text style={styles.InputBarTXT_three}>Street Address</Text>
                        </View>

                        <View style={styles.InputBarContainer_Street}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Street Address' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.InputBarTXT_six}>Country</Text>
                    </View>

                    <View style={styles.containerDropDown2}>
                        <Dropdown
                            style={[styles.dropdown, isFocus2 && { borderColor: '#008577' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Country}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus2 ? 'Select Your City' : '...'}
                            searchPlaceholder="Search..."
                            value={Country}
                            onFocus={() => setIsFocus2(true)}
                            onBlur={() => setIsFocus2(false)}
                            onChange={item => {
                                setValue2(item.value);
                                setIsFocus2(false);
                            }}

                        />
                    </View>

                    <View>
                        <Text style={styles.InputBarTXT_four}>State</Text>
                    </View>

                    <View style={styles.containerDropDown3}>
                        <Dropdown
                            style={[styles.dropdown, isFocus3 && { borderColor: '#008577' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={State}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus3 ? 'Select Your City' : '...'}
                            searchPlaceholder="Search..."
                            value={State}
                            onFocus={() => setIsFocus3(true)}
                            onBlur={() => setIsFocus3(false)}
                            onChange={item => {
                                setValue3(item.value);
                                setIsFocus3(false);
                            }}

                        />
                    </View>


                    <View>
                        <Text style={styles.InputBarTXT_five}>City</Text>
                    </View>

                    <View style={styles.containerDropDown4}>
                        <Dropdown
                            style={[styles.dropdown, isFocus4 && { borderColor: '#008577' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={City}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus4 ? 'Select Your City' : '...'}
                            searchPlaceholder="Search..."
                            value={City}
                            onFocus={() => setIsFocus4(true)}
                            onBlur={() => setIsFocus4(false)}
                            onChange={item => {
                                setValue4(item.value);
                                setIsFocus4(false);
                            }}

                        />
                    </View>

                    <View>
                        <View style={styles.InputBarNameContainer_Four}>
                            <Text style={styles.InputBarTXT_Contacts}>Contact 1</Text>
                        </View>

                        <View style={styles.InputBarContainer_Contacts}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact 1' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>

                    <View>
                        <View style={styles.InputBarNameContainer_Five}>
                            <Text style={styles.InputBarTXT_Contacts2}>Contact 2</Text>
                        </View>

                        <View style={styles.InputBarContainer_Contacts2}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact 2' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>

                    <View>
                        <View style={styles.InputBarNameContainer_Six}>
                            <Text style={styles.InputBarTXT_Contacts3} >Contact 3</Text>
                        </View>

                        <View style={styles.InputBarContainer_Contacts3}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact 3' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>

                    {/* ################################################## PHOTO LAB ############################################# */}

                                <View>
                               <ChoosePhoto />
                                </View>


                    {/* ############################################################################################### */}






                    {/* ##################################################### EMAIL ########################################## */}

                    <View>
                        <View style={styles.InputBarNameContainer_Bussiness_Email}>
                            <Text style={styles.InputBarTXT_Bussiness_Email} >Business Email</Text>
                        </View>

                        <View style={styles.InputBarContainer_Email}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Email' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>

                    {/* ############################################################################################### */}


                    {/* ##################################################### STATUS ########################################## */}


                    <View>
                        <Text style={styles.InputBarTXT_SIX}>Status</Text>
                    </View>

                    <View style={styles.containerDropDown5}>
                        <Dropdown
                            style={[styles.dropdown, isFocus4 && { borderColor: '#008577' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Status}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus4 ? 'Select Your Status' : '...'}
                            searchPlaceholder="Search..."
                            value={Status}
                            onFocus={() => setIsFocus4(true)}
                            onBlur={() => setIsFocus4(false)}
                            onChange={item => {
                                setValue4(item.value);
                                setIsFocus4(false);
                            }}

                        />
                    </View>

                    {/* ############################################################################################### */}

                    <View>
                        <View style={styles.InputBarNameContainer_Business_Website}>
                            <Text style={styles.InputBarTXT_Business_Website} >Business Website</Text>
                            <Text>(Please add your business website link if any.)</Text>
                        </View>

                        <View style={styles.InputBarContainer_Business_Website}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business Website Link' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>


                    <View>
                        <View style={styles.InputBarNameContainer_Description}>
                            <Text style={styles.InputBarTXT_Description} >Description</Text>
                            <Text>(Please add your business details and links if any.)</Text>
                        </View>

                        <View style={styles.InputBarContainer_Description}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business Website details' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>


                    <View>
                        <View style={styles.InputBarNameContainer_Google_Map}>
                            <Text style={styles.InputBarTXT_Google_Map} >Set Google Map</Text>
                            <Text>(Please add your business location link.)</Text>
                        </View>

                        <View style={styles.InputBarContainer_Google_Map}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Business Website Location Link' placeholderTextColor={'#6c757d'} ></TextInput>
                        </View>
                    </View>

                    <View >
                        <TouchableOpacity style={styles.SubmitButton} onPress={() => { }}>
                            <Text style={styles.SubmitButtonText}>Update</Text>
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
        top:5 // latest closeness to inputbar
    },
    InputBarTXT_Contacts2: {
        fontSize: 20,
        color: '#000',
        top:5 // latest closeness to inputbar

    },
    InputBarTXT_Contacts3: {
        fontSize: 20,
        color: '#000',
        top:5 // latest closeness to inputbar

    },
    InputBarTXT_Bussiness_Email: {
        fontSize: 20,
        color: '#000',
        top:5 // latest closeness to inputbar

    },
    InputBarTXT_Contacts: {
        // fontSize: 20,
        // color: '#000',
        // marginBottom:40,
        // marginTop: 15,

        fontSize: 20,
        color: '#000',
        // marginTop:10
        top:5 // latest closeness to inputbar


    },
    InputBarPlaceHolder: {
        fontSize: 15,
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
    InputBarContainer: {
        borderWidth: 1,
        height: 45,
        marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,

    },
    InputBarContainer_Street: {
        borderWidth: 1,
        height: 45,
        borderWidth: 0.5,
        borderRadius: 8,

    },
    InputBarContainer_Contacts: {
        borderWidth: 1,
        height: 45,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        // marginTop: 5,
    },
    dropdown: {
        height: 47,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 15,
        width: 'auto',
        // left: 5,
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
        top:1.2 // latest closeness to inputbar



    },
    InputBarTXT_three: {
        fontSize: 20,
        color: '#000',
        // marginTop:10
        top:5 // latest closeness to inputbar

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
        top:1.2 // latest closeness to inputbar



    },
    InputBarTXT_four: {
        // marginTop: 15,
        fontSize: 20,
        color: '#000',
        top:5 // latest closeness to inputbar


    },
    InputBarTXT_six: {
        //  marginBottom: 15,
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        top:1.2 // latest closeness to inputbar


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
        borderWidth: 1,
        height: 45,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarTXT_SIX: {
        fontSize: 20,
        color: '#000',
        top:5 // latest closeness to inputbar

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
        borderWidth: 1,
        height: 120,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Email: {
        borderWidth: 1,
        height: 45,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
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
        borderWidth: 1,
        height: 120,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    SubmitButton: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 16,
        backgroundColor: '#008577',
        bottom: 6,
        width: 90,
        alignSelf: 'center',
        elevation:3,
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
})
