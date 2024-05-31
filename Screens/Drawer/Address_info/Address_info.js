import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Address_info() {

    const Address = [
        {
            Address_Type :'Permenent',
        },
        {
            Address :'AB-239,Raghav Pg,Nirman Nagar, Jaipur'
        }
    ]
    
    return (
        <View>
            <View style={styles.ButtonConatiner}>
                <View style={styles.SecondButtonConatiner}
                >
                    <Text style={styles.SecondButtonName}>Address info</Text>
                </View>
                <TouchableOpacity style={styles.FirstButtonConatiner}>
                    <FontAwesome5 name={'user-plus'} size={15} style={styles.Icons} />
                    <Text style={styles.FirstButtonName}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View>
               {
                Address.map((item,index)=>{
                    <View style={styles.Card} key={index}>
                        <Text>{item.Address_Type}</Text>
                        <Text>{item.Address}</Text>

                    </View>
                })
               }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonConatiner: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 10,
        margin: 15,
        alignContent: "center",
        // alignSelf: 'center',
        alignItems: 'center'
    },
    SecondButtonConatiner: {
        borderWidth: 1,
        // width: 220.5,
        width: '71%',
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 10,
        gap: 6,
        paddingHorizontal: 10,
        borderColor: '#008577',
        alignContent: 'center',
        padding: 8.2,
        backgroundColor: '#008577'

    },
    SecondButtonName: {
        fontSize: 19,
        color: '#fff',
    },
    IconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10

    },
    FirstButtonConatiner: {
        flexDirection: 'row',
        borderWidth: 0.9,
        padding: 10,
        // width: 90,
        width: '26%',
        alignItems: 'center',
        borderRadius: 10,
        gap: 10,
        borderColor: '#008577',
        alignContent: "center",
        alignSelf: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        // backgroundColor:'#ffdfe4',

    },
    FirstButtonName: {
        fontSize: 17,
        color: '#008577',
    },
    Icons: {
        color: '#ffc107',
    },
})