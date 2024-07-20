import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// for rating use Librery = npm i react-native-star-rating


const RatingScreen = () => {
    const [rating, setRating] = useState(0);

    const onStarRatingPress = (newRating) => {
        setRating(newRating);
    };
    return (
        <View style={styles.MainContainer}>
            {/* <View>
                <Text style={styles.HeadingStyles}>FEEDBACK</Text>
            </View> */}
            <View style={styles.InfoContainer}>
                <FontAwesome5 name='user-circle' size={100} color={'#008374'} />
            </View>
            <View style={{ paddingTop: 20 }}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={rating}
                    selectedStar={(rating) => onStarRatingPress(rating)}
                    fullStarColor={'gold'}
                />
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.AddCommentTXT}>Add a Comment</Text>
            </View>

            <View style={styles.TxtInputContainer}>
                <TextInput placeholder='What is Your View...?' style={styles.TxtInput} />
            </View>

            <TouchableOpacity style={styles.SendBTN}>
                <Text style={styles.SendBTNTXT}>Send</Text>
            </TouchableOpacity>
        </View>

    )
}

export default RatingScreen



const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#ffff'

    },
    InfoContainer: {
        flexDirection: 'row',
        gap: 20,
        // alignItems:'center',
        padding: 10,
    },
    AddCommentTXT: {
        fontSize: 26,
        color: '#333'
    },
    TxtInput: {
        borderWidth: 1,
        height: 120,
        width: '100%',
        borderRadius: 10,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: '#008374'

    },
    TxtInputContainer: {
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row'
    },
    SendBTN: {
        padding: 10,
        borderRadius: 10,
        // alignItems:'center',
        height: 55,
        width: 80,
        backgroundColor: '#008374',
    },
    SendBTNTXT: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    },  
    HeadingStyles: {
        fontSize: 30,
        color: '#333',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})  