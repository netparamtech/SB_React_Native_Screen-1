import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList, TextInput } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const State = [
  { label: 'Maharashtra', value: 'Maharshtra' },
  { label: 'Goa', value: 'Goa' },
  { label: 'UP', value: 'UP' },
  { label: 'Punjab', value: 'Punjab' },
  { label: 'Sikkim', value: 'Sikkim' },
  { label: 'J&K', value: 'J&K' }


];
const City = [
  { label: 'Pune', value: 'Pune' },
  { label: 'Jaipur', value: 'Delhi' }
];

const Matrimonial = ({ navigation }) => {

  const users = [
    {
      name: 'Yash Salave',
      jobProfile: 'Java Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Dhule (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
      Contact_no: '7770089444'

    },
    {
      name: 'Ketan Patil',
      jobProfile: 'Angular Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Mumbai (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
      Contact_no: '9990089222'

    },
    {
      name: 'Saaz Arora',
      jobProfile: 'React Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Nasik (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
      Contact_no: '3330089555'


    },
    {
      name: 'Yash Patil',
      jobProfile: 'MEARN Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Jalgaon (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
      Contact_no: '6660089111'


    },
  ]
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);



  const renderLabel2 = () => {
    if (value2 || isFocus2) {
      return (
        <Text style={[styles.label, isFocus2 && { color: '#198754' }]}>
          State
        </Text>
      );
    }
    return null;
  };


  const renderLabel3 = () => {
    if (value3 || isFocus3) {
      return (
        <Text style={[styles.label, isFocus3 && { color: '#198754' }]}>
          City
        </Text>
      );
    }
    return null;
  };

  // const [selectedState, setSelectedState] = useState("Select State");
  // const [selectedCity, setSelectedCity] = useState("Select City");

  // const [isClicked, setIsClicked] = useState(false);
  // const [isClicked1, setIsClicked1] = useState(false);
  // const [isClicked2, setIsClicked2] = useState(false);
  // const [isClicked3, setIsClicked3] = useState(false);
  // const [isClicked4, setIsClicked4] = useState(false);

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={[{ key: 'dummy' }]}
        renderItem={() => (
          <View>
            <Text style={styles.modalText}>Search Members</Text>
            <View style={styles.content}>
              <View style={styles.container}>
                {renderLabel2()}
                {/* call kela */}
                <Dropdown
                  style={[styles.dropdown, isFocus2 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={State}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus2 ? 'Select State' : '...'}
                  searchPlaceholder="Search..."
                  value={value2}
                  onFocus={() => setIsFocus2(true)}
                  onBlur={() => setIsFocus2(false)}
                  renderRightIcon={() => (
                    <TouchableOpacity onPress={() => { setValue2(null) }} >
                      {value2 ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus2 ? 'blue' : 'black'}
                          name="circle-with-cross"
                          size={20}
                        />

                        : null

                      }
                    </TouchableOpacity>
                  )}
                  onChange={item => {
                    setValue2(item.value);
                    setIsFocus2(false);
                  }}
                />
              </View>

              <View style={styles.container}>
                {renderLabel3()}
                <Dropdown
                  style={[styles.dropdown, isFocus3 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={City}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus3 ? 'Select City' : '...'}
                  searchPlaceholder="Search..."
                  value={value3}
                  onFocus={() => setIsFocus3(true)}
                  onBlur={() => setIsFocus3(false)}
                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setValue3(null) }} >
                      {value3 ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus3 ? 'blue' : 'black'}
                          name="circle-with-cross"
                          size={20}
                        />

                        : null

                      }
                    </TouchableOpacity>
                  )}

                  onChange={item => {
                    setValue3(item.value);
                    setIsFocus3(false);
                  }}
                />

                <View style={[styles.SearchContainer]}>
                  <FontAwesome name={'search'} size={18} />
                  <TextInput placeholder='Search ...' style={{ fontSize: 15 }}></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.cardContainer}>
              {
                users.map(({ name, Education, City, profilPhoto, jobProfile, age, Contact_no }) =>
                  <View key={name} style={styles.cards}>
                    <View style={styles.cardsImage}>
                      <Image source={{ uri: profilPhoto }} style={styles.image} />
                    </View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.jobProfile}>{jobProfile}</Text>
                    <Text style={styles.userEducation}>Education - {Education}</Text>
                    <Text style={styles.userAge}>Age - {age}</Text>
                    <Text style={styles.userCity}>City - {City}</Text>
                    <Text style={styles.userCity}>Contact No - {Contact_no}</Text>
                    <View style={styles.Icons}>
                      <TouchableOpacity onPress={() => { navigation.navigate('Message') }} >
                        <Image source={require('../Assets/image.png')} style={styles.chatIcon} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => { navigation.navigate('View') }} >
                        <Text style={{ fontSize: 15.5, color: "#008577" }}>VIEW</Text>
                      </TouchableOpacity>
                    </View>
                  </View>)
              }
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  modalText: {
    fontSize: 20,
    backgroundColor: '#e9ecef',
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
  },
  content: {
    height: 'auto', // Adjust height as needed
    width: 330,
    // backgroundColor: 'white',
    padding: 10,
    // alignSelf: 'center',
    // marginLeft: 10.6,
    margin: 10,
    // paddingTop: 15,
    // alignContent:'center',
    // alignItems:'center'
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.25, //0.25
    // shadowRadius: 3.84,//3.84
    // elevation: 4,//4
    // alignContent:'center',
    // justifyContent:'center',
    // alignSelf:"center"
  },
  MainContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignContent:'center',
    alignItems: 'center',
    flex: 1
  },
  // icon: {
  //   height: 20,
  //   width: 20,
  // },
  // communityItem: {
  //   width: '82%',
  //   height: 40,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#8e8e8e',
  //   alignSelf: 'center',
  //   justifyContent: 'center'
  // },
  // clearButton: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingBottom: 1,
  //   marginTop: 0
  // },
  // clearButtonText: {
  //   color: '#ffc107',
  //   fontWeight: '400',
  //   right: 28,
  //   bottom: 10
  // },
  // SearchContainer: {
  //   borderWidth: 1,
  //   width: 300,
  //   flexDirection: "row",
  //   height: 46,
  //   borderColor: '#198754',
  //   marginTop: 10,
  //   alignSelf: 'center' // new changes
  // },
  // search: {
  //   margin: 14,
  // },
  // PlaceHolderTitle: {
  //   fontSize: 16,
  //   marginLeft: 2,
  //   fontWeight: '700',
  //   marginTop: 10
  // },
  cardContainer: {
    borderRadius: 10,
    alignSelf: 'center', // new changes
  },
  cards: {
    margin: 10,
    padding: 10,
    height: 'auto',
    width: 300,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'white', // Ensure a solid background color
    shadowColor: '#000',
    bottom: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4, // This is for Android, use shadow properties for iOS
  },
  cardsImage: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    bottom: 9.8
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    paddingHorizontal: 10
  },
  jobProfile: {
    fontSize: 12,
    color: '#555',
    marginTop: 1,
    paddingBottom: 5,
    paddingHorizontal: 10


  },
  userEducation: {
    fontSize: 14,
    marginTop: 5,
    margin: 3,
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#dee2e6',
  },
  userAge: {
    fontSize: 14,
    marginTop: 5,
    backgroundColor: '#dee2e6',
    margin: 3,
    padding: 7,
    borderRadius: 10
  },
  userCity: {
    fontSize: 14,
    marginTop: 5,
    backgroundColor: '#dee2e6',
    margin: 3,
    padding: 7,
    borderRadius: 10
  },
  Icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingBottom: 15
  },
  chatIcon: {
    width: 30,
    height: 30,
    margin: 2
  },
  //---------------------
  // container: {
  //   padding: 12,
  // },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    // width:300
    margin: 5,
    borderColor: '#008577',


  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',   /// new changes
    left: 22,
    top: 0.4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    borderRadius: 10  // new chnges
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  SearchContainer: {
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 9,
    borderColor: '#008577',
    flex: 1,
  },
});

export default Matrimonial;
