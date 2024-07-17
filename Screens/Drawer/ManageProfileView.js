import { FlatList, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

export default function ManageProfileView() {
    const [user, setUser] = useState([]);
    const navigation = useNavigation();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU"

    const FetchUser = async () => {
        try {
            const response = await axios.get('https://uat-api.socialbharat.org/api/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Response data:", response.data.data);
            setUser(response.data.data);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code outside of the range of 2xx
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request data:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
        }
    };


    useEffect(() => {
        FetchUser();
    }, [])


    return (
        // <ScrollView style={{ backgroundColor: '#fff' }}>
        //     <View style={styles.BackCoverImgContainer}>
        //         <Image source={require('../../Assets/banner1.png')} style={styles.BackCoverImg} />
        //     </View>
        //     <View style={styles.ProfileImgContainer}>
        //         <Image source={require('../../Assets/04.jpg')} style={styles.ProfileImg} />
        //     </View>
        //     <View style={styles.CardContainer}>
        //         {
        //             user.map((item, index) => (
        //                 <View key={index} style={styles.container}>
        //                     <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Name :</Text>
        //                         <Text style={styles.LabelsValues}>{item.name}</Text>
        //                     </View>
        //                     <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Email :</Text>
        //                         <Text style={styles.LabelsValues}>{item.email}</Text>
        //                     </View>
        //                     {/* <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Date Of Birth :</Text>
        //                         <Text style={styles.LabelsValues}>{item.DOB}</Text>
        //                     </View> */}
        //                     <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Education :</Text>
        //                         <Text style={styles.LabelsValues}>{item.highest_qualification}</Text>
        //                     </View>
        //                     <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Occupation :</Text>
        //                         <Text style={styles.LabelsValues}>{item.occupation}</Text>
        //                     </View>
        //                     <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Maritial Status :</Text>
        //                         <Text style={styles.LabelsValues}>{item.marital_status}</Text>
        //                     </View>
        //                     <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Gender :</Text>
        //                         <Text style={styles.LabelsValues}>{item.gender}</Text>
        //                     </View>
        //                     {/* <View style={styles.pairContainer}>
        //                         <Text style={styles.Labels}>Commumity :</Text>
        //                         <Text style={styles.LabelsValues}>{item.community.name}</Text>
        //                     </View> */}

        //                     <View style={[styles.pairContainer,]}>
        //                         <Text style={styles.Labels}>Mobile Number :</Text>
        //                         <Text style={styles.LabelsValues}>{item.mobile}</Text>
        //                         <View>
        //                             <TouchableOpacity style={{ marginStart: 20 }}>
        //                                 <FontAwesome name={'edit'} size={25} style={styles.editBTN} />
        //                             </TouchableOpacity>
        //                         </View>
        //                     </View>
        //                 </View>
        //             ))
        //         }
        //     </View>
        //     <View style={{ bottom: 20 }}>

        //         <View style={styles.InformationContainers}>
        //             <View style={styles.InformationContainerHeading}>
        //                 <Text style={styles.HeadingStyles}>Matrimonial Info</Text>
        //             </View>
        //             <View style={{ padding: 20 }} >
        //                 <TouchableOpacity style={styles.BTN}>
        //                     <Text style={styles.btnTXT}>Matrimonial Info</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
        //         <View style={styles.InformationContainers}>
        //             <View style={styles.InformationContainerHeading}>
        //                 <Text style={styles.HeadingStyles}>Education Info</Text>
        //             </View>
        //             <View style={{ padding: 20 }} >
        //                 <TouchableOpacity style={styles.BTN}>
        //                     <Text style={styles.btnTXT}>Education Info</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
        //         <View style={styles.InformationContainers}>
        //             <View style={styles.InformationContainerHeading}>
        //                 <Text style={styles.HeadingStyles}>Address Info</Text>
        //             </View>
        //             <View style={{ padding: 20 }} >
        //                 <TouchableOpacity style={styles.BTN}>
        //                     <Text style={styles.btnTXT}>Address Info</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
        //         <View style={styles.InformationContainers}>
        //             <View style={styles.InformationContainerHeading}>
        //                 <Text style={styles.HeadingStyles}>Business Info</Text>
        //             </View>
        //             <View style={{ padding: 20 }} >
        //                 <TouchableOpacity style={styles.BTN}>
        //                     <Text style={styles.btnTXT}>Business Info</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
        //         <View style={styles.InformationContainers}>
        //             <View style={styles.InformationContainerHeading}>
        //                 <Text style={styles.HeadingStyles}>Job Info</Text>
        //             </View>
        //             <View>
        //                 <TouchableOpacity style={styles.BTN} >
        //                     <Text style={styles.btnTXT}>Job Info</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
        //     </View>


        // </ScrollView>
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.BackCoverImgContainer}>
                <Image source={require('../Assets/banner1.png')} style={styles.BackCoverImg} />
            </View>
            <View style={styles.ProfileImgContainer}>
                {
                    user && user.photo ?
                        (
                            <Image source={{ uri: user.photo }} style={styles.ProfileImg} />
                        )
                        :
                        (
                            <Image source={require('../Assets/04.jpg')} style={styles.ProfileImg} />

                        )
                }
                {/* <Image source={require('../Assets/04.jpg')} style={styles.ProfileImg} /> */}
                {/* <Image source={require(user.photo)} style={styles.ProfileImg} /> */}

            </View>
            <View style={styles.CardContainer}>

                {user ? ( // Check if user data is loaded
                    <View style={styles.container}>
                        <TouchableOpacity style={{alignItems:'flex-end'}}>
                            <FontAwesome6 name={'user-pen'} size={22} style={styles.editBTN} />
                        </TouchableOpacity>
                        <View style={styles.pairContainer}>
                            <Text style={styles.Labels}>Name :</Text>
                            <Text style={styles.LabelsValues}>{user.name}</Text>

                        </View>
                        <View style={styles.pairContainer}>
                            <Text style={styles.Labels}>Email :</Text>
                            <Text style={styles.LabelsValues}>{user.email}</Text>
                        </View>
                        <View style={styles.pairContainer}>
                            <Text style={styles.Labels}>Education :</Text>
                            <Text style={styles.LabelsValues}>{user.highest_qualification}</Text>
                        </View>
                        <View style={styles.pairContainer}>
                            <Text style={styles.Labels}>Occupation :</Text>
                            <Text style={styles.LabelsValues}>{user.occupation}</Text>
                        </View>
                        <View style={styles.pairContainer}>
                            <Text style={styles.Labels}>Marital Status :</Text>
                            <Text style={styles.LabelsValues}>{user.marital_status}</Text>
                        </View>
                        <View style={styles.pairContainer}>
                            <Text style={styles.Labels}>Gender :</Text>
                            <Text style={styles.LabelsValues}>{user.gender}</Text>
                        </View>
                        <View style={[styles.pairContainer,]}>
                            <Text style={styles.Labels}>Mobile Number :</Text>
                            <Text style={styles.LabelsValues}>{user.mobile}</Text>
                            <View>
                                <TouchableOpacity style={{ marginStart: 90 }}>
                                    <FontAwesome name={'edit'} size={25} style={styles.editBTN} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <Text>Loading...</Text> // Show loading text while user data is being fetched
                )}
            </View>
            <View style={{ bottom: 20 }}>
                <View style={styles.InformationContainers}>
                    <View style={styles.InformationContainerHeading}>
                        <Text style={styles.HeadingStyles}>Matrimonial Info</Text>
                    </View>
                    <View style={{ padding: 20 }} >
                        <TouchableOpacity style={styles.BTN} onPress={()=>{navigation.navigate('Matrimonial_info')}}>
                            <Text style={styles.btnTXT}>Matrimonial Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.InformationContainers}>
                    <View style={styles.InformationContainerHeading}>
                        <Text style={styles.HeadingStyles}>Education Info</Text>
                    </View>
                    <View style={{ padding: 20 }} >
                        <TouchableOpacity style={styles.BTN} onPress={()=>{navigation.navigate('Education_info')}}>
                            <Text style={styles.btnTXT}>Education Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.InformationContainers}>
                    <View style={styles.InformationContainerHeading}>
                        <Text style={styles.HeadingStyles}>Address Info</Text>
                    </View>
                    <View style={{ padding: 20 }} >
                        <TouchableOpacity style={styles.BTN} onPress={()=>{navigation.navigate('Address_info')}}>
                            <Text style={styles.btnTXT}>Address Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.InformationContainers}>
                    <View style={styles.InformationContainerHeading}>
                        <Text style={styles.HeadingStyles}>Business Info</Text>
                    </View>
                    <View style={{ padding: 20 }} >
                        <TouchableOpacity style={styles.BTN}>
                            <Text style={styles.btnTXT}>Business Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.InformationContainers}>
                    <View style={styles.InformationContainerHeading}>
                        <Text style={styles.HeadingStyles}>Job Info</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.BTN} >
                            <Text style={styles.btnTXT}>Job Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    BackCoverImg: {
        width: '100%',
        height: 160,
    },
    ProfileImg: {
        height: 100,
        width: '100%',
        alignContent: 'center',
        flex: 1,
        borderRadius: 100,
    },
    ProfileImgContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        padding: 10,
        // margin:10,
        marginLeft: 30,
        top: -70,
        alignItems: 'center',
        borderRadius: 100,
    },
    CardContainer: {
        // borderWidth: 2,
        padding: 8,

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
        fontSize: 18
    },
    LabelsValues: {
        fontSize: 16,
        color: '#212529',
    },
    container: {
        padding: 20,
        marginTop: 16,
        // borderWidth: 4,
        bottom: 50,
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
    InformationContainers: {
        margin: 13,
        borderBottomEndRadius: 19,
        height: 'auto',
        width: 'auto',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
        // bottom:10,
    },
    HeadingStyles: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold'
    },
    InformationContainerHeading: {
        backgroundColor: '#008577',
        padding: 9,

    },
    BTN: {
        alignContent: 'center',
        //  justifyContent:'center',
        alignItems: 'center',




    },
    btnTXT: {
        // borderWidth:1,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: '60%',
        textAlign: 'center',
        backgroundColor: '#ffc107',
        color: '#008577',
        fontSize: 20,
        elevation: 3


    },
    editBTN: {
        color: '#008577',
    }

})