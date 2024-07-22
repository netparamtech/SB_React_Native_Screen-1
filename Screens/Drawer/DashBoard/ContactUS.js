import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactUS = () => {
    const ContactINFO = [{
        id :1,
        Address: "Rani Sati Nagar",
        Call_us: "+91-7340508253",
        Email_us: 'support@socialbharat.org',
        Open_Hours: 'Monday - Saturday ,9:00 Am to 6:00 Pm Sunday Off '
    }]
    return (
        <ScrollView style={styles.MainContainer}>

            <View style={styles.MapConatiner}>
            </View>

            {
                ContactINFO.map((item) => (
                    <View style={styles.ContactINFOcontainer} key={item.id}>
                        <View style={styles.Container}>
                            <View style={styles.IconValueContainer}>
                                <MaterialIcons name='location-on' size={30} color={"#FF9933"} />
                                <Text style={styles.Label}>Address</Text>
                            </View>
                            <Text style={styles.Value}>{item.Address}</Text>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.IconValueContainer}>
                                <Ionicons
                                    name='call-sharp' size={30} color={"#FF9933"} />
                                <Text style={styles.Label}>Call Us</Text>
                            </View>
                            <Text style={styles.Value}>{item.Call_us}</Text>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.IconValueContainer}>
                                <Ionicons
                                    name='mail' size={30} color={"#FF9933"} />
                                <Text style={styles.Label}>Email Us</Text>
                            </View>
                            <Text style={styles.Value}>{item.Email_us}</Text>
                        </View>

                        <View style={styles.Container}>
                            <View style={styles.IconValueContainer}>
                                <Ionicons
                                    name='time-sharp' size={30} color={"#FF9933"} />
                                <Text style={styles.Label}>Open Hours</Text>
                            </View>
                            <Text style={styles.Value}>{item.Open_Hours}</Text>
                        </View>
                    </View>

                ))
            }
            <View style={styles.FormContainer}>
                <View style={styles.HeadingContainer}>
                    <Text style={styles.HeadingTXT}>Send Message For Enquiry</Text>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput placeholder='Enter Your Name' style={styles.TextInput} />
                    <TextInput placeholder='Enter Your Email (Optional)' style={styles.TextInput} />
                    <TextInput placeholder='Enter Mobile Number' style={styles.TextInput} />
                    <TextInput placeholder='Leave a Query Here' style={styles.BigTextInput} />

                    <TouchableOpacity style={styles.SubmitBTNcontainer}>
                        <Text style={styles.SubmitBTN}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ContactUS

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#ffff',
        padding: 10,

    },
    ContactINFOcontainer: {
        padding: 10,
        alignItems: 'center'
    },
    Container: {
        // borderWidth: 1,
        margin: 10,
        padding: 15,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        minHeight: 127,
        maxHeight: 'auto',
        width: '100%',
        backgroundColor: '#ffff',
        borderColor: '#008374',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,

    },
    Label: {
        fontSize: 24,
        color: '#008374',
        fontWeight: '500',
        // padding:5,

    },
    Value: {
        fontSize: 17,
        color: "#808080",
        padding: 5,
        paddingHorizontal: 40


    },
    IconValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    FormContainer: {
        borderWidth: 0.5,
        padding: 10,
        margin: 5,
        alignContent: 'center',
        alignSelf: 'center',
        width: '100%',
        marginBottom: 40,
        borderColor: '#008374',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    HeadingTXT: {
        fontSize: 23,
        color: '#333'
    },

    HeadingContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // gap: 10
        alignItems: 'center',
        paddingTop: 15

    },
    TextInput: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 7,
        paddingHorizontal: 10,
        margin: 10
    },
    BigTextInput: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 7,
        paddingHorizontal: 10,
        margin: 10,
        height: 90,
        textAlignVertical: 'top'
    },
    InputContainer: {
        paddingTop: 15,
        alignContent: 'center',
        alignItems: 'center'
    },
    SubmitBTNcontainer: {
        padding: 10,
        alignContent: 'center',
        borderRadius: 10,
        width: 90,
        backgroundColor: '#008374'
    },
    SubmitBTN: {
        fontSize: 17,
        textAlign: 'center',
        color: '#ffff'
    }
})