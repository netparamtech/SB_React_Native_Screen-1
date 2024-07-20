import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import TextTicker from 'react-native-text-ticker';

export default function Dashboard({navigation}) {
  const Cards = [
    {
      id: '1',
      TagName: 'Profile',
      HeadingName: 'Manage Profile',
      Icon: require('../Assets/activities.png'),
      Details: 'VIEW',
      Edit: 'EDIT',
      bgcolor: '#025E73'
    },
    {
      id: '2',
      TagName: 'Become Social',
      HeadingName: 'Search Members',
      Icon: require('../Assets/searchPeople.png'),
      Details: 'Search',
      Edit: 'EDIT',
      bgcolor : '#6AA668'
    },
    {
      id: '3',
      TagName: 'Matrimonial',
      HeadingName: 'Matrimonial',
      Icon: require('../Assets/wedding.png'),
      Details: 'Search',
      Edit: 'EDIT',
      bgcolor : '#F28157'

    },
    {
      id: '4',
      TagName: 'Bussiness',
      HeadingName: 'Business Promotion',
      Icon: require('../Assets/financial-profit.png'),
      Details: 'Search',
      Edit: 'Post Your Ad',
      bgcolor : '#8C654F'

    },
    {
      id: '5',
      TagName: 'Event',
      HeadingName: 'Event(S)',
      Icon: require('../Assets/placard.png'),
      Details: 'VIEW',
      Edit: 'Post Event',
      bgcolor : '#634A00'

    },
    {
      id: '6',
      TagName: 'Event',
      HeadingName: 'Social Activities',
      Icon: require('../Assets/socialActivity.png'),
      Details: 'VIEW',
      Edit: 'Post Activity',
      bgcolor : '#8C654F'

    },
    {
      id: '7',
      TagName: 'Services',
      HeadingName: 'Services',
      Icon: require('../Assets/service3.jpg'),
      Details: 'Search',
      Edit: 'EDIT',
      bgcolor : '#BF7E6F'

    },
    {
      id: '8',
      TagName: 'Jobs',
      HeadingName: 'Jobs',
      Icon: require('../Assets/job1.png'),
      color:'red',
      Details: 'Search',
      Edit: 'Post Job',
      bgcolor : '#6C757D'

    },
    {

      id: '9',
      TagName: 'Share Your Feedback',
      HeadingName: 'Feedback',
      Icon: require('../Assets/fe.png'),
      Details: 'Give FeedBack',
      Edit: 'VIEW',
      bgcolor : '#009BCE'

    },
  ];
const HandleEditPress = (index)=>{
  if(index === 0)
  {
    navigation.navigate('Basic_Profile');

  }
  if(index === 4)
  {
    navigation.navigate('Create_Events')
  }
  if(index === 7)
  {
    navigation.navigate('Post_Job')
  }
 
}
const HandleViewPress = (index)=>{
  if(index === 0)
    {
      navigation.navigate('Profile');
    }
    if(index === 6)
      {
        navigation.navigate('SearchService')
      }
      if(index === 8)
        {
          navigation.navigate('Rating')
        }
}
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.MainCardsContainer}>
        <View style={styles.MarqueeContainer}>
          <TextTicker
            style={styles.Marquee}
            loop
            duration={30000}
            bounce
            repeatSpacer={500}
            marqueeDelay={100}
            marqueeResetDelay={1000}
          >
            "Building Bridges, Creating Bonds: Social Bharat is your gateway to community connections, meaningful relationships, and professional growth. Discover a platform where community thrives, love blossoms, careers take flight, and services unite. Explore Matrimonial Bliss, Career Opportunities, Business Networking, and more. Join us on the journey of empowerment and shared prosperity. Your community, your connection, your Social Bharat. #CommunityConnections #Matrimony #JobSearch #ServiceSearch #SocialBharat 🌐💑👔🛠️"
          </TextTicker>
        </View>
        {Cards.map(({ TagName, HeadingName, Icon, Details, Edit, id, bgcolor },index) => (
          <View style={{ ...styles.Card, backgroundColor: bgcolor }} key={id}>
            <Text style={styles.TagName}>{TagName}</Text>
            <View style={styles.HeadingAndImageContainer}>
              <Text style={styles.HeadingName}>{HeadingName}</Text>
              <Image source={Icon} style={styles.Icon} />
            </View>
            <View style={styles.CardFooter}>
              <TouchableOpacity  onPress={()=>{HandleViewPress(index)}}>
                <Text style={styles.Details}>{Details}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{HandleEditPress(index)}}>
                <Text style={styles.Edit}>{Edit}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor:'#fff',
    width:'100%',

  },
  MainCardsContainer: {
    // paddingHorizontal: 10,
    width:'100%'

  },
  Card: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    paddingHorizontal:20,
    borderTopRightRadius:60,
    borderBottomLeftRadius:60,
  },
  TagName: {
    fontSize: 15,
    paddingBottom: 3,
    paddingHorizontal: 6,
    color: '#fff',
  },
  HeadingName: {
    fontSize: 20,
    paddingVertical: 3,
    color: '#fff',
    bottom:10

  },
  Icon: {
    height: 30,
    width: 30,
  },
  Details: {
    fontSize: 15,
    paddingHorizontal: 2,
    color: '#fff',
  },
  Edit: {
    fontSize: 15,
    color: '#fff',
  },
  HeadingAndImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    alignItems: 'center',
    padding:3,

  },
  CardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 10,
    padding:3,

  },
  Marquee: {
    fontSize: 19,
    color: '#fff',
    backgroundColor: '#800000',
    paddingBottom: 5,
    // borderRadius: 10,
    textAlign: 'center',
    
  },
  MarqueeContainer: {
    margin: 10,

  },
});
