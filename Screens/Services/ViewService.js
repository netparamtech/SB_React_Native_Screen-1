import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const ViewService = () => {
    const [isPressed, setIsPressed] = useState(true)

    const Data = [
        {
            Sno: 1,
            Title: 'Room/ Flet/ PG Related Service',
            Mobile1: '7770089444',
            Mobile2: '7976897915',
            Experience: '4 years',
            State: 'Maharashtra',
            City: 'Pune',
            Description: 'PG,Which is short for paying guest accommodation,is a great option if you are looking for a more affordable place to stay than renting an entire apartment',
        },
        {
            Sno: 2,
            Title: 'Hotel',
            Mobile1: '7770089444',
            Mobile2: '7976897915',
            Experience: '4 years',
            State: 'Maharashtra',
            City: 'Pune',
            Description: 'PG,Which is short for paying guest accommodation,is a great option if you are looking for a more affordable place to stay than renting an entire apartment',
        }, {
            Sno: 3,
            Title: 'GYM',
            Mobile1: '7770089444',
            Mobile2: '7976897915',
            Experience: '4 years',
            State: 'Maharashtra',
            City: 'Pune',
            Description: 'PG,Which is short for paying guest accommodation,is a great option if you are looking for a more affordable place to stay than renting an entire apartment',
        }, {
            Sno: 4,
            Title: 'Factory',
            Mobile1: '7770089444',
            Mobile2: '7976897915',
            Experience: '4 years',
            State: 'Maharashtra',
            City: 'Pune',
            Description: 'PG,Which is short for paying guest accommodation,is a great option if you are looking for a more affordable place to stay than renting an entire apartment more affordable place to stay than renting an entire apartmentmore affordable place to stay than renting an entire apartment,',
        },
    ]

    const OnpressDelete = () => {
        setIsPressed(false)
    }
    return (
        <ScrollView style={styles.MainContainer}>

            <View>
                <View style={styles.InformationContainerHeading}>
                    <Text style={styles.HeadingStyles}>REGISTERED SERVICES</Text>
                </View>
                <View style={{ padding: 5, paddingBottom: 22 }} >
                    {
                        Data.map(({ Sno, Title, Mobile1, Mobile2, Experience, State, City, Description }) => (
                            <View key={Sno} style={styles.container}>
                                <View style={styles.ActionICON}>
                                    <TouchableOpacity onPress={() => { OnpressDelete() }}>
                                        <AntDesign name='delete' size={23} color={'#333'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name='edit' size={23} color={'#333'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>Sno </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{Sno}</Text>
                                    </View>
                                </View>
                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>Title </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{Title}</Text>
                                    </View>
                                </View>

                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>Mobile1 </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{Mobile1}</Text>
                                    </View>
                                </View>
                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>Mobile2 </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{Mobile2}</Text>
                                    </View>
                                </View>
                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>Experience </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{Experience}</Text>
                                    </View>
                                </View>
                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>State </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{State}</Text>
                                    </View>
                                </View>
                                <View style={styles.pairContainer}>
                                    <View style={styles.NameLabel}>
                                        <Text style={styles.Labels}>City </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.LabelsValues}>{City}</Text>
                                    </View>
                                </View>
                                <View style={styles.DescriptionContainer}>
                                    <View style={styles.DescriptionLabel}>
                                        <Text style={styles.DescriptionLabels}>Description </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.DescriptionValues} numberOfLines={5}>{Description}</Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default ViewService

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // padding: 10,
        backgroundColor: '#fff'

    },
    CardContainer: {
    },
    Card: {
        borderWidth: 1,
        padding: 15,


    },
    // InformationContainers: {
    //     margin: 13,
    //     borderBottomEndRadius: 19,
    //     height: 'auto',
    //     width: 'auto',
    //     shadowOpacity: 0.25,
    //     shadowRadius: 5,
    //     elevation: 2,
    //     // bottom:10,
    // },
    HeadingStyles: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf:'center'
    },
    InformationContainerHeading: {
        // backgroundColor: 'orange',
        backgroundColor: '#008577',
        padding: 9,

    },
    container: {
        // padding: 10,
        marginTop: 16,
        borderWidth: 0.2,
        width: '100%', // Use full width of the container
        maxWidth: '100%', // Adjusts according to screen size
        borderRadius: 8,
        
    },

    pairContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding: 5
    },
    NameLabel: {
        width: 120,
    },
    Labels: {
        marginRight: 8,
        fontWeight: 'bold',
        color: '#212529',
        // flex:1

    },
    LabelsValues: {
        fontSize: 14,
        color: '#212529',
        // textAlign:'justify'

    },
    UserDetailContainer: {
        borderWidth: 0.2,
        padding: 5,
        margin: 15,
        width: 'auto',
        height: 'auto',
        width: 'auto',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
    },

    DescriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding: 5
    },
    DescriptionLabel: {
        width: 120,
    },
    DescriptionLabels: {
        marginRight: 8,
        fontWeight: 'bold',
        color: '#212529',
        // flex:1
    },
    DescriptionValues: {
        fontSize: 14,
        color: '#212529',
        flexShrink: 1,
        flexWrap: 'wrap',
        overflow: 'hidden',
        width: 195,

    },
    ActionICON: {
        flexDirection: 'row',
        // alignSelf: 'flex-end',
        gap: 20,
        backgroundColor: 'orange',
        // backgroundColor: '#008577',
        justifyContent: 'flex-end',
        padding:10,
        borderRadius:7


    }
})