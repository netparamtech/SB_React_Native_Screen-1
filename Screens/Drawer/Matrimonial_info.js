import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Matrimonial_info() {

    const [likes, setLikes] = useState({});

    const handleWishlistToggle = (index) => {
        setLikes(prevLikes => ({
            ...prevLikes,
            [index]: !prevLikes[index]
        }));
    };    const Users = [
        {
            matrimonial_profile_name: 'Yash Salave',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',
            DeleteIcon: 'delete'//MaterialCommIcons
        },
        {
            matrimonial_profile_name: 'Lucky Patil',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',//AntDesign
            DeleteIcon: 'delete'//MaterialCommIcons
        },
        {
            matrimonial_profile_name: 'Ketan Sharma',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',//AntDesign
            DeleteIcon: 'delete'//MaterialCommIcons
        },
        {
            matrimonial_profile_name: 'Vinod Pawar',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',//AntDesign
            DeleteIcon: 'delete'//MaterialCommIcons
        },
        {
            matrimonial_profile_name: 'Sumit Deshmukh',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',//AntDesign
            DeleteIcon: 'delete'//MaterialCommIcons
        },
        {
            matrimonial_profile_name: 'Suraj Deshmukh',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',//AntDesign
            DeleteIcon: 'delete'//MaterialCommIcons
        },
        {
            matrimonial_profile_name: 'Harsh Mane',
            proposal_photos: require('../../Assets/04.jpg'),
            ViewIcon: 'account-eye', //MaterialCommIcons
            EditIcon: 'account-edit',// font6
            LikeIcon: 'heart', //AntDesign
            DislikeIcon: 'heart',//AntDesign
            DeleteIcon: 'delete'//MaterialCommIcons
        },


    ]
    return (
        <ScrollView style={styles.MainContainer}>

            <View style={styles.ButtonConatiner}>
                <TouchableOpacity style={styles.FirstButtonConatiner}>
                    <FontAwesome5 name={'user-plus'} size={15} style={styles.Icons} />
                    <Text style={styles.FirstButtonName}>ADD</Text>
                </TouchableOpacity>
                <View style={styles.SecondButtonConatiner}

                >
                    <FontAwesome name={'search'} size={22} style={styles.Icons} />
                    <TextInput style={styles.SecondButtonName} placeholder='Search...' placeholderTextColor={'#008577'}></TextInput>
                </View>
            </View>
            <View>
                {
                    Users.map((item, index) => (
                        <View key={index} style={styles.CardContiner}>
                            <View>
                                <Text></Text>
                            </View>
                            <View style={styles.ProfileContainer}>
                                <Text style={styles.UserName}>{item.matrimonial_profile_name}</Text>
                                <Image source={item.proposal_photos} style={styles.IMG} />
                            </View>
                            <View style={styles.Assets}>
                                <TouchableOpacity style={styles.BIoBTNContainer}>
                                    <Text style={styles.BioBTN} >Download Bio</Text>
                                </TouchableOpacity>
                                <View style={styles.ICONS}>
                                    <TouchableOpacity >
                                        <MaterialCommunityIcons name={item.ViewIcon} size={24} color={'#008577'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name={item.EditIcon} size={24} color={'#008577'} />
                                    </TouchableOpacity>
                                 <TouchableOpacity onPress={() => handleWishlistToggle(index)}>
                                    <MaterialCommunityIcons
                                         name={likes[index] ? item.LikeIcon : item.DislikeIcon}
                                         size={24}
                                         color={likes[index] ? '#EE4B2B' : '#008577'}
                                     />                                
                                      </TouchableOpacity>

                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name={item.DeleteIcon} size={24} color={'#008577'} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignContent: 'center',
        padding: 10,
        backgroundColor: '#fff'

    },
    CardContiner: {
        padding: 10,
        margin: 5,
        borderRadius: 10,
        // borderTopRightRadius:30,
        // borderBottomRightRadius:30,
        // borderBottomLeftRadius:30,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        backgroundColor:'#ffdfe4',
        marginBottom:10


    },
    IMG: {
        height: 50,
        width: 50,
        borderRadius:5

    },
    ProfileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    Assets: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10


    },
    BIoBTNContainer: {
        fontSize: 18,
        borderWidth: 1,
        width: '33%',
        height: 40,
        //    textAlign:'center',
        //    textAlignVertical:'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#008577'

    },
    BioBTN: {
        fontSize: 14,
        color:'#008577'
    },
    ICONS: {
        display: 'flex',
        flexDirection: 'row',
        gap: 9
    },
    UserName: {
        fontSize: 20,
        color: '#5F4652'
    },
    ButtonConatiner: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        gap: 10,
        margin: 10,
        alignContent: "center",
        alignSelf: 'center'
    },
    FirstButtonConatiner: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        // width: 90,
        width: '26%',
        alignItems: 'center',
        borderRadius: 10,
        gap: 10,
        borderColor: '#008577',
        alignContent: "center",
        alignSelf: 'center',
    },
    FirstButtonName: {
        fontSize: 17,
        color: '#008577',
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
    },
    SecondButtonName: {
        fontSize: 18,
    },
    Icons: {
        color: '#ffc107',
    },
    Likee:{
        backgroundColor:'red'
    }
})

// import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export default function Matrimonial_info() {
//     const [likes, setLikes] = useState({});

//     const handleWishlistToggle = (index) => {
//         setLikes(prevLikes => ({
//             ...prevLikes,
//             [index]: !prevLikes[index]
//         }));
//     };

//     const Users = [
//         {
//             matrimonial_profile_name: 'Yash Salave',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', // MaterialCommIcons
//             EditIcon: 'account-edit', // FontAwesome5
//             LikeIcon: 'heart', // AntDesign
//             DislikeIcon: 'heart-outline', // AntDesign
//             DeleteIcon: 'delete' // MaterialCommIcons
//         },
//         {
//             matrimonial_profile_name: 'Lucky Patil',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', //MaterialCommIcons
//             EditIcon: 'account-edit',// font6
//             LikeIcon: 'heart', //AntDesign
//             DislikeIcon: 'heart-outline',//AntDesign
//             DeleteIcon: 'delete'//MaterialCommIcons
//         },
//         {
//             matrimonial_profile_name: 'Ketan Sharma',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', //MaterialCommIcons
//             EditIcon: 'account-edit',// font6
//             LikeIcon: 'heart', //AntDesign
//             DislikeIcon: 'heart-outline',//AntDesign
//             DeleteIcon: 'delete'//MaterialCommIcons
//         },
//         {
//             matrimonial_profile_name: 'Vinod Pawar',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', //MaterialCommIcons
//             EditIcon: 'account-edit',// font6
//             LikeIcon: 'heart', //AntDesign
//             DislikeIcon: 'heart-outline',//AntDesign
//             DeleteIcon: 'delete'//MaterialCommIcons
//         },
//         {
//             matrimonial_profile_name: 'Sumit Deshmukh',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', //MaterialCommIcons
//             EditIcon: 'account-edit',// font6
//             LikeIcon: 'heart', //AntDesign
//             DislikeIcon: 'heart-outline',//AntDesign
//             DeleteIcon: 'delete'//MaterialCommIcons
//         },
//         {
//             matrimonial_profile_name: 'Suraj Deshmukh',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', //MaterialCommIcons
//             EditIcon: 'account-edit',// font6
//             LikeIcon: 'heart', //AntDesign
//             DislikeIcon: 'heart-outline',//AntDesign
//             DeleteIcon: 'delete'//MaterialCommIcons
//         },
//         {
//             matrimonial_profile_name: 'Harsh Mane',
//             proposal_photos: require('../../Assets/04.jpg'),
//             ViewIcon: 'account-eye', //MaterialCommIcons
//             EditIcon: 'account-edit',// font6
//             LikeIcon: 'heart', //AntDesign
//             DislikeIcon: 'heart-outline',//AntDesign
//             DeleteIcon: 'delete'//MaterialCommIcons
//         },
//     ];

//     return (
//         <ScrollView style={styles.MainContainer}>
//             <View style={styles.ButtonConatiner}>
//                 <TouchableOpacity style={styles.FirstButtonConatiner}>
//                     <FontAwesome5 name={'user-plus'} size={15} style={styles.Icons} />
//                     <Text style={styles.FirstButtonName}>ADD</Text>
//                 </TouchableOpacity>
//                 <View style={styles.SecondButtonConatiner}>
//                     <FontAwesome name={'search'} size={22} style={styles.Icons} />
//                     <TextInput
//                         style={styles.SecondButtonName}
//                         placeholder='Search...'
//                         placeholderTextColor={'#008577'}
//                     />
//                 </View>
//             </View>
//             <View>
//                 {Users.map((item, index) => (
//                     <View key={index} style={styles.CardContiner}>
//                         <View style={styles.ProfileContainer}>
//                             <Text style={styles.UserName}>{item.matrimonial_profile_name}</Text>
//                             <Image source={item.proposal_photos} style={styles.IMG} />
//                         </View>
//                         <View style={styles.Assets}>
//                             <TouchableOpacity style={styles.BIoBTNContainer}>
//                                 <Text style={styles.BioBTN}>Download Bio</Text>
//                             </TouchableOpacity>
//                             <View style={styles.ICONS}>
//                                 <TouchableOpacity>
//                                     <MaterialCommunityIcons name={item.ViewIcon} size={24} color={'#008577'} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity>
//                                     <MaterialCommunityIcons name={item.EditIcon} size={24} color={'#008577'} />
//                                 </TouchableOpacity>

//                                 <TouchableOpacity onPress={() => handleWishlistToggle(index)}>
//                                     <MaterialCommunityIcons
//                                         name={likes[index] ? item.LikeIcon : item.DislikeIcon}
//                                         size={24}
//                                         color={likes[index] ? '#EE4B2B' : '#008577'}
//                                     />
//                                 </TouchableOpacity>
                                
//                                 <TouchableOpacity>
//                                     <MaterialCommunityIcons name={item.DeleteIcon} size={24} color={'#008577'} />
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     MainContainer: {
//         flex: 1,
//         alignContent: 'center',
//         padding: 10,
//         backgroundColor: '#fff',
//     },
//     CardContiner: {
//         padding: 10,
//         margin: 5,
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 4,
//     },
//     IMG: {
//         height: 50,
//         width: 50,
//     },
//     ProfileContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     Assets: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingTop: 10,
//     },
//     BIoBTNContainer: {
//         fontSize: 18,
//         borderWidth: 1,
//         width: '33%',
//         height: 40,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     BioBTN: {
//         fontSize: 14,
//     },
//     ICONS: {
//         flexDirection: 'row',
//         gap: 9,
//     },
//     UserName: {
//         fontSize: 18,
//         color: '#000',
//     },
//     ButtonConatiner: {
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         gap: 10,
//         margin: 10,
//         alignSelf: 'center',
//     },
//     FirstButtonConatiner: {
//         flexDirection: 'row',
//         borderWidth: 1,
//         padding: 10,
//         width: '26%',
//         alignItems: 'center',
//         borderRadius: 10,
//         gap: 10,
//         borderColor: '#008577',
//     },
//     FirstButtonName: {
//         fontSize: 17,
//         color: '#008577',
//     },
//     SecondButtonConatiner: {
//         borderWidth: 1,
//         width: '71%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderRadius: 10,
//         gap: 6,
//         paddingHorizontal: 10,
//         borderColor: '#008577',
//     },
//     SecondButtonName: {
//         fontSize: 18,
//     },
//     Icons: {
//         color: '#ffc107',
//     },
// });
