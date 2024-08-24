import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// for rating use Librery = npm i react-native-star-rating

const RatingScreen = () => {
  const [rating, setRating] = useState(0);

  const onStarRatingPress = newRating => {
    setRating(newRating);
  };
  const FEEDBACK = [
    {
      id: 1,
      name: ' Yash Salave',
      img: require('../Assets/HomeSmall/03.jpeg'),
      stars: 2,
      FeedbackTXT:
        'best website till the date website till the datewebsite till the datewebsite till the datewebsite till the date datewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the datedatewebsite till the date',
    },
    {
      id: 2,
      name: ' Pavan Jagtap',
      img: require('../Assets/HomeSmall/03.jpeg'),
      stars: 3,
      FeedbackTXT:
        'best website till the date best website till the datebest best website till the datebest best website till the datebest best website till the datebest best website till the datebest best website till the datebest ',
    },
    {
      id: 3,
      name: ' Rushabh warkar',
      img: require('../Assets/HomeSmall/03.jpeg'),
      stars: 5,
      FeedbackTXT:
        'best website till the datebest website till the datebest website till the date website till the datewebsite till the datewebsite till the date',
    },
  ];
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <View style={styles.InfoContainer}>
          <FontAwesome5 name="user-circle" size={100} color={'#008374'} />
        </View>
        <View style={{paddingTop: 20}}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={rating}
            selectedStar={rating => onStarRatingPress(rating)}
            fullStarColor={'gold'}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={styles.AddCommentTXT}>Add a Comment</Text>
        </View>

        <View style={styles.TxtInputContainer}>
          <TextInput
            placeholder="What is Your View...?"
            style={styles.TxtInput}
            multiline={true}
          />
        </View>

        <TouchableOpacity style={styles.SendBTN}>
          <Text style={styles.SendBTNTXT}>Send</Text>
        </TouchableOpacity>

        <View style={styles.FeedbackContainerParent}>
          {FEEDBACK.map(item => (
            <View key={item.id} style={styles.RatingCard}>
              <View style={styles.ImgNameContainer}>
                <Image source={item.img} style={styles.FeedbackGiverIMG} />
                <Text style={styles.FeedbackGiver}>{item.name}</Text>
              </View>
              <View>
                <Text style={styles.FeedbackTXT}>{item.FeedbackTXT}</Text>
              </View>
              <View
                style={{
                  // paddingTop: 20,
                  // borderWidth: 1,
                  width: '70%',
                  alignItems: 'flex-start',
                  paddingHorizontal: 15,
                }}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={item.stars}
                  selectedStar={rating => onStarRatingPress(rating)}
                  fullStarColor={'gold'}
                  starSize={15}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  InfoContainer: {
    flexDirection: 'row',
    gap: 20,
    // alignItems:'center',
    padding: 10,
  },
  AddCommentTXT: {
    fontSize: 26,
    color: '#333',
  },
  TxtInput: {
    borderWidth: 1,
    height: 120,
    width: '100%',
    borderRadius: 10,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    fontSize: 16,
    borderColor: '#008374',
  },
  TxtInputContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
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
    alignSelf: 'center',
  },

  RatingCard: {
    // borderWidth: 0.5,
    width: 320,
    padding: 10,
    margin: 8,
    // flexDirection: 'row',
    // alignItems: 'center',
    elevation: 2,
    gap: 5,
    borderRadius: 7,
    backgroundColor: '#ffff',
  },
  FeedbackGiver: {
    fontSize: 20,
    color: '#008374',
  },
  FeedbackGiverIMG: {
    height: 50,
    width: 50,
    borderRadius: 99,
  },
  FeedbackTXT: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#000',
    // backgroundColor: 'red',
  },
  FeedbackContainerParent: {
    marginTop: 50,
  },
  ImgNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
