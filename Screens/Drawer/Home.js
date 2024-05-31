import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Carousel from 'react-native-snap-carousel';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const Home = () => {

  const images = [
    require('../Assets/HomeSmall/01.jpg'),
    require('../Assets/HomeSmall/02.jpg'),
    require('../Assets/HomeSmall/03.jpeg'),
    require('../Assets/HomeSmall/04.jpg'),
    require('../Assets/HomeSmall/05.jpg'),
    require('../Assets/HomeSmall/06.jpg'),
    require('../Assets/HomeSmall/07.jpg'),
    require('../Assets/HomeSmall/08.jpg'),
    require('../Assets/HomeSmall/09.jpeg'),
    require('../Assets/HomeSmall/10.jpg'),
    require('../Assets/HomeSmall/11.jpg'),
    require('../Assets/HomeSmall/12.jpg'),
    require('../Assets/HomeSmall/13.jpg'),
    require('../Assets/HomeSmall/14.jpg'),
    require('../Assets/HomeSmall/15.jpg'),
    require('../Assets/HomeSmall/16.jpg'),
    require('../Assets/HomeSmall/17.jpg'),
    require('../Assets/HomeSmall/18.jpg'),
    require('../Assets/HomeSmall/19.jpg'),
    require('../Assets/HomeSmall/20.jpg'),
    require('../Assets/HomeSmall/21.jpeg'),
    require('../Assets/HomeSmall/22.jpg'),
    require('../Assets/HomeSmall/23.jpg'),
    require('../Assets/HomeSmall/24.png'),


  ];

  const renderImage = ({ item }) => (
    <View style={styles.item}>
      <Image source={item} style={styles.scrollImage} />
    </View>
  );

  return (


    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollView>
        <TextTicker style={{ color: '#69090b', fontSize: 20, fontWeight: 'bold' }} duration={40000}
          loop
          bounce={false}
          repeatSpacer={0}
          marqueeDelay={0}
        >
          "Building Bridges, Creating Bonds: Social Bharat is your gateway to
          community connections, meaningful relationships, and professional growth.
          Discover a platform where community thrives, love blossoms, careers take
          flight, and services unite. Explore Matrimonial Bliss, Career Opportunities,
          Business Networking, and more. Join us on the journey of empowerment and shared
          prosperity. Your community, your connection, your Social Bharat. #CommunityConnections
          #Matrimony #JobSearch #ServiceSearch #SocialBharat 🌐💑👔🛠"
        </TextTicker>

        {/* ####################################################################################################### */}

        <View style={{ flex: 1 }}>
          <Swiper
            style={styles.wrapper}
            autoplay={true} Enableautoplay
            autoplayTimeout={5}
            showsPagination={false}

          >
            {/* Define your slides with images */}
            <View  >
              <Image
                source={require('../Assets/Social2.png')}  //Replace with your image URL
                style={styles.images}
              />
            </View>
            <View >
              <Image
                source={require('../Assets/social.png')}  //Replace with your image URL
                style={styles.images}
              />
            </View>
            <View >
              <Image
                source={require('../Assets/Social3.png')}  //Replace with your image URL
                style={styles.images}
              />
            </View>
          </Swiper>

        </View>

        {/* ######################################################################################################################## */}

        {/* Scrolling Image */}

        <Carousel

          data={images}
          renderItem={renderImage}
          sliderWidth={400} // Adjust according to your screen width
          itemWidth={150} // Adjust according to your image width
          autoplay={true}
          autoplayInterval={2000} // Adjust interval as needed
          loop={true}
        />

        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginTop: 40 }}>Social Bharat Provides</Text>
        </View>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>

            <View style={{ flexDirection: 'row' }}>

              <View>
                <Icon name="handshake-o" size={20} color="#0066CC" style={styles.icon} />
              </View>

              <View>
                <Title style={styles.cardTitle}>Community Connect</Title>
                <Paragraph style={styles.para}>Social Bharat's Community Connection feature facilitates
                  interaction and engagement among individuals from various
                  backgrounds, promoting a sense of unity and mutual understanding
                  between different communities.</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Icon name="diamond" size={20} color="#0066CC" style={styles.icon} />
              </View>
              <View>
                <Title style={styles.cardTitle}>Matrimonial</Title>
                <Paragraph style={styles.para}>Social Bharat's matrimonial
                  feature simplifies the search for a life partner by allowing
                  users to create detailed profiles, express their preferences,
                  and find compatible matches within a secure and private
                  environment, making the journey to finding a life partner
                  efficient and personalized.</Paragraph>
              </View>

            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Icon name="briefcase" size={20} color="#0066CC" style={styles.icon} />
              </View>
              <View>
                <Title style={styles.cardTitle}>Business Promotion</Title>
                <Paragraph style={styles.para}>Social Bharat provides a
                  powerful platform for businesses to connect with their target
                  audience, enhance their online presence, and effectively
                  promote their products and services, ensuring increased
                  visibility and growth opportunities in the digital
                  landscape.</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Icon name="user-circle-o" size={20} color="#0066CC" style={styles.icon} />
              </View>
              <View>
                <Title style={styles.cardTitle}>Job Posting</Title>
                <Paragraph style={styles.para}>Social Bharat's job posting
                  feature enables employers to effortlessly connect with
                  potential candidates, facilitating seamless recruitment.
                  It streamlines the hiring process, making it efficient for
                  businesses to find the right talent and for job seekers to
                  discover promising opportunities within our
                  platform.</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    marginBottom: 15,
    resizeMode: 'contain'

  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'baseline',
  //   marginBottom:20,
  //   paddingHorizontal: 20,
  //   paddingTop: 20,

  // },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    //paddingHorizontal: ,
  },

  // background: {
  //   flex: 1,
  //   // height: 530,
  //   resizeMode: 'cover',
  //   marginBottom:40,

  // },
  buttonText: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#1bd14c',
    paddingVertical: 10,
    paddingHorizontal: 10
  },

  scrollImage: {
    width: 120,
    height: 120,
    //marginHorizontal: 10, // Adjust spacing between images
    resizeMode: 'cover',


  },
  // imageContainer: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 10,
  //   backgroundColor: 'blue', // Default background color
  //   marginHorizontal: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  card: {
    margin: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 20,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',



  },
  para: {

    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    marginRight: 5

  },
  icon: {
    marginRight: 10,
    marginTop: 5,
    color: '#008000'
  },
  item: {
    width: 120,
    height: '100%',
    backgroundColor: 'orange',
    borderRadius: 10,
    overflow: 'hidden',

  },
  images: {
    width: '100%',
    // height: 200,
    height: '100%',
    // resizeMode: 'cover',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',

  },

});

export default Home;