import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'


export default function Messages() {

  const navigation = useNavigation();

  const HandleBackButton = () => {


    navigation.goBack();

  }

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.messagesHeader}>
          <TouchableOpacity onPress={() => { HandleBackButton() }} style={{ justifyContent: 'center' }}>
            <MaterialIcons name='arrow-back' size={24} color='#FFFFFF'
            />
          </TouchableOpacity>
          <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
          <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Yash Salave</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.messagesMe}>
            <Text style={styles.messageMeBox}>How Are You</Text>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
          </View>
          <Text style={styles.time}>10:20 AM</Text>

          <View style={styles.messagesFriend}>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
            <Text style={styles.messageFriendBox}>Fine</Text>
            <Text style={styles.timeFriend}>10:20 AM</Text>
          </View>
          {/* ========================================= */}

          <View style={styles.messagesFriend}>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
            <Text style={styles.messageFriendBox}>ok</Text>
            <Text style={styles.timeFriend}>10:20 AM</Text>
          </View>

          <View style={styles.messagesMe}>
            <Text style={styles.messageMeBox}>How Are You</Text>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
          </View>
          <Text style={styles.time}>10:20 AM</Text>

          <View style={styles.messagesFriend}>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
            <Text style={styles.messageFriendBox}>ok </Text>
            <Text style={styles.timeFriend}>10:20 AM</Text>
          </View>


          <View style={styles.messagesMe}>
            <Text style={styles.messageMeBox}>ok</Text>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
          </View>
          <Text style={styles.time}>10:20 AM</Text>


          <View style={styles.messagesFriend}>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
            <Text numberOfLines={10} style={styles.messageFriendBox}>Fine Fine Fine Fine Fine Fine Fine Fine Fine Fine Fine</Text>
            <Text style={styles.timeFriend}>10:20 AM</Text>
          </View>



          <View style={styles.messagesMe}>
            <Text numberOfLines={10} style={styles.messageMeBox}>How Are You How Are You How Are YouHow Are YouHow Are You How Are You How Are You How Are You How Are You How Are You  You How Are You  You How Are You  You How Are You</Text>
            <Image source={require('../Assets/04.jpg')} style={styles.imageContainer} />
          </View>
          <Text style={styles.time}>10:20 AM</Text>

        </ScrollView>
      </View>

      {/* Static TextInput for sending messages */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  messageContainer: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 60,
  },
  messagesHeader: {
    flexDirection: 'row',
    padding: 10,
    gap: 13,
    backgroundColor: '#008577',
  },
  messagesMe: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 12,
    gap: 10,
    marginTop: 20,
    padding: 3,

  },
  messagesFriend: {
    flexDirection: 'row',
    gap: 10,
    left: 12,
    padding: 3,
    width: 'auto'
  },
  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 40
  },
  time: {
    color: '#A8A8A8',
    alignSelf: 'flex-end',
    right: 84,
    bottom: 29,
    fontSize: 12,

  },
  timeFriend: {
    color: '#A8A8A8',
    alignSelf: 'flex-end',
    right: 75,
    bottom: 7,
    fontSize: 12,


  },
  messageMeBox: {
    padding: 20,
    borderTopLeftRadius: 30,
    width: 'auto', height: 'auto',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#EFEFEF',
    color: '#0F0F0F',
    paddingBottom: 26,
    textAlign: 'right',
    maxWidth: 200,
    minWidth: 80,





  },
  messageFriendBox: {
    padding: 25,
    borderTopLeftRadius: 30,
    minWidth: 80,
    maxWidth: 200,
    height: 'auto',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#EFEFEF',
    color: '#0F0F0F',
    paddingBottom: 26,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    borderColor: '#008577'

  },
  sendButton: {
    backgroundColor: '#008577',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
