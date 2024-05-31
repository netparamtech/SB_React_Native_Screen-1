import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Education_info() {

    const Info = [
        {
            Degree: 'Bachlore Degree',
            StudyField: 'xyz',
            University: 'Nalanda University',
            PassingYear: '2024',
            ScoreType: 'Percentage',
            Score: '30.40%'
        },
        {
            Degree: 'Bachlore Degree',
            StudyField: 'pqr',
            University: 'Maharastra University',
            PassingYear: '2022',
            ScoreType: 'Percentage',
            Score: '55.40%'
        },
        {
            Degree: 'Bachlore Degree',
            StudyField: 'ghj',
            University: 'Rajasthan University',
            PassingYear: '2019',
            ScoreType: 'Percentage',
            Score: '77.40%'
        }
    ]
    return (
        <ScrollView style={styles.MainContainer}>
            <View style={styles.ButtonConatiner}>
                <View style={styles.SecondButtonConatiner}

                >
                    <Text style={styles.SecondButtonName}>Education info</Text>
                </View>
                <TouchableOpacity style={styles.FirstButtonConatiner}>
                    <FontAwesome5 name={'user-plus'} size={15} style={styles.Icons} />
                    <Text style={styles.FirstButtonName}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.CardContainer}>
                    {
                        Info.map((item, index) => (

                            <View key={index} style={styles.Card}>
                                <View style={styles.IconContainer}>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name={"account-edit"} size={28} color={'#008577'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name={"delete"} size={28} color={'#008577'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.pairContainer}>
                                    <Text style={styles.Labels}>Degree :</Text>
                                    <Text style={styles.LabelsValues}>{item.Degree}</Text>
                                </View>

                                <View style={styles.pairContainer}>
                                    <Text style={styles.Labels}>Study Field :</Text>
                                    <Text style={styles.LabelsValues}>{item.StudyField}</Text>
                                </View>
                                <View style={styles.pairContainer}>
                                    <Text style={styles.Labels}>University :</Text>
                                    <Text style={styles.LabelsValues}>{item.University}</Text>
                                </View>
                                <View style={styles.pairContainer}>
                                    <Text style={styles.Labels}>Passing Year :</Text>
                                    <Text style={styles.LabelsValues}>{item.PassingYear}</Text>
                                </View>
                                <View style={styles.pairContainer}>
                                    <Text style={styles.Labels}>Scroe Type :</Text>
                                    <Text style={styles.LabelsValues}>{item.ScoreType}</Text>
                                </View>
                                <View style={styles.pairContainer}>
                                    <Text style={styles.Labels}>Score :</Text>
                                    <Text style={styles.LabelsValues}>{item.Score}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ ScrollView>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#fff'
    },
    ButtonConatiner: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 10,
        margin: 15,
        alignContent: "center",
        // alignSelf: 'center',
        alignItems: 'center'
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
    EduTXT: {
        fontSize: 20
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
    CardContainer: {
        margin: 10,
        
    },
    Card: {
        // borderWidth: 0.5,
        margin: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        borderRadius: 20,
       

    },
    pairContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        alignContent: 'center',
    },
    Labels: {
        marginRight: 8,
        fontWeight: 'bold',
        color: '#212529',
        fontSize: 18,
        paddingVertical: 3
    },
    LabelsValues: {
        fontSize: 16,
        color: '#212529',

    },
})