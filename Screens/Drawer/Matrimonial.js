// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Matrimonial() {
//   return (
//     <View>
//       <Text>Matrimonial</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList, Button, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';

import Entypo from 'react-native-vector-icons/Entypo';




const Gender = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' }
];
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
const Subcast = [
  { label: 'Rajput', value: 'Rajput' },
  { label: 'Mali', value: 'Mali' }
];
const Gotra = [
  { label: 'xyz', value: 'xyz' },
  { label: 'Abc', value: 'Abc' }
];

const Matrimonial = ({navigation}) => {

  const users = [
    {
      name: 'Yash Salave',
      jobProfile: 'Java Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Dhule (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg'

    },
    {
      name: 'Ketan Patil',
      jobProfile: 'Angular Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Mumbai (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg'
    },
    {
      name: 'Saaz Arora',
      jobProfile: 'React Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Nasik (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg'

    },
    {
      name: 'Yash Patil',
      jobProfile: 'MEARN Developer',
      age: 26,
      Education: 'PG-Dac & B.E. Engineering',
      City: 'Jalgaon (Maharashtrs)',
      profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg'

    },
  ]
  const clearDropdown = (setValue, setSelected) => {
    setValue(null);
    setSelected(`Select ${setSelected}`);
  };

  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);
  const [isFocus5, setIsFocus5] = useState(false);


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#198754' }]}>
          Interested In
        </Text>
      );
    }
    return null;
  };

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

  const renderLabel4 = () => {
    if (value4 || isFocus4) {
      return (
        <Text style={[styles.label, isFocus4 && { color: '#198754' }]}>
          Subcast
        </Text>
      );
    }
    return null;
  };

  const renderLabel5 = () => {
    if (value5 || isFocus5) {
      return (
        <Text style={[styles.label, isFocus5 && { color: '#198754' }]}>
          Gotra
        </Text>
      );
    }
    return null;
  };

  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedSubcast, setSelectedSubcast] = useState("Select Subcast");
  const [selectedGotra, setSelectedGotra] = useState("Select Gotra");

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  const searchRef = useRef(null);


  const [genderData, setGenderData] = useState(Gender);

  return (
    <View >
      <FlatList
        // contentContainerStyle={styles.container}
        data={[{ key: 'dummy' }]}
        renderItem={() => (
          <View>
            <Text style={styles.modalText}>Search Partner</Text>
            <View style={styles.content}>
              <View style={styles.container}>
                {renderLabel(value, isFocus)}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Gender}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"


                  placeholder={!isFocus ? 'select Gender ' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}


                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setValue(null) }} >
                      {value ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus ? 'blue' : 'black'}
                          name="circle-with-cross"
                          size={20}

                        />

                        : null

                      }


                    </TouchableOpacity>

                  )}


                  onChange={(item) => {
                    setValue(item.value),
                      setIsFocus(false);


                  }}

                // renderLeftIcon={() => (
                //   <TouchableOpacity onPress={()=>{setValue(false)}}>
                //   <AntDesign
                //     style={styles.iconAntDesign}
                //     color={isFocus ? 'blue' : 'black'}
                //     name="delete"
                //     size={20}
                //   />
                //   </TouchableOpacity>

                // )}
                />
              </View>


              {/* clear Button */}

              {/* <View>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    // setSelectedGender("Select Gender-----");
                    // if (searchRef.current) {
                    //   searchRef.current.clear();
                    // }
                    clearDropdown(setValue, setSelectedGender)
                  }}
                >
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
              </View> */}

              {/* Repeat the similar structure for other dropdowns */}

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
                // renderLeftIcon={() => (
                //   <AntDesign
                //     style={styles.iconAntDesign}
                //     color={isFocus2 ? 'blue' : 'black'}
                //     name="Safety"
                //     size={20}
                //   />
                // )}
                />
              </View>


              {/* clear Button */}


              {/* <View>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    // setSelectedState("Select State");
                    // if (searchRef.current) {
                    //   searchRef.current.clear();
                    // }
                    clearDropdown(setValue2, setSelectedState)
                  }}
                >
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
              </View> */}


              <View style={styles.container}>
                {renderLabel3()}

                {/* call kela */}

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
                // renderLeftIcon={() => (
                //   <AntDesign
                //     style={styles.iconAntDesign}
                //     color={isFocus3 ? 'blue' : 'black'}
                //     name="Safety"
                //     size={20}
                //   />
                // )}
                />
              </View>


              {/* clear Button */}

              {/* <View>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    clearDropdown(setValue3, setSelectedCity)
                  }}
                >
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
              </View> */}

              <View style={styles.container}>
                {renderLabel4()}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus4 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Subcast}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus4 ? 'Select Subcast' : '...'}
                  searchPlaceholder="Search..."
                  value={value4}
                  onFocus={() => setIsFocus4(true)}
                  onBlur={() => setIsFocus4(false)}


                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setValue4(null) }} >
                      {value4 ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus4 ? 'blue' : 'black'}
                          name="circle-with-cross"
                          size={20}
                        />

                        : null

                      }


                    </TouchableOpacity>

                  )}

                  onChange={item => {
                    setValue4(item.value);
                    setIsFocus4(false);
                  }}
                // renderLeftIcon={() => (
                //   <AntDesign
                //     style={styles.iconAntDesign}
                //     color={isFocus4 ? 'blue' : 'black'}
                //     name="Safety"
                //     size={20}
                //   />
                // )}
                />
              </View>


              {/* clear Button */}

              {/* <View>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    // setSelectedSubcast("Select Subcast");
                    // if (searchRef.current) {
                    //   searchRef.current.clear();
                    // }
                    clearDropdown(setValue4, setSelectedSubcast)
                  }}
                >
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
              </View> */}



              <View style={styles.container}>
                {renderLabel5()}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus5 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Gotra}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus5 ? 'Select Gotra' : '...'}
                  searchPlaceholder="Search..."
                  value={value5}
                  onFocus={() => setIsFocus5(true)}
                  onBlur={() => setIsFocus5(false)}


                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setValue5(null) }} >
                      {value5 ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus5 ? 'blue' : 'black'}
                          name="circle-with-cross"
                          size={20}
                        />

                        : null

                      }


                    </TouchableOpacity>

                  )}

                  onChange={item => {
                    setValue5(item.value);
                    setIsFocus5(false);
                  }}
                // renderLeftIcon={() => (
                //   <AntDesign
                //     style={styles.iconAntDesign}
                //     color={isFocus5 ? 'blue' : 'black'}
                //     name="Safety"
                //     size={20}
                //   />
                // )}
                />
              </View>

              {/* clear Button */}


              {/* <View>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    // setSelectedGotra("Select Gotra");
                    // if (searchRef.current) {
                    //   searchRef.current.clear();
                    // }
                    clearDropdown(setValue5, setSelectedGotra)
                  }}
                >
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
              </View> */}


              <View style={{ marginTop: 20 }}>
                {/* <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 10 }}>Add New</Text> */}
                <View style={{ margin: 9 }}>
                  <Button title="ADD MATROMONIAL" color={'#ffc107'} />
                </View>
              </View>
              <View>
              </View>
            </View>
            <View style={styles.SearchContainer}>
              <View style={styles.search}>
                <Icon name="search" size={16} />
              </View>
              <TextInput placeholder="Search By Name" />
            </View>

            <View style={styles.cardContainer}>
              {
                users.map(({ name, Education, City, profilPhoto, jobProfile, age }) =>
                  <View key={name} style={styles.cards}>
                    <View style={styles.cardsImage}>
                      <Image source={{ uri: profilPhoto }} style={styles.image} />
                    </View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.jobProfile}>{jobProfile}</Text>
                    <Text style={styles.userEducation}>Education - {Education}</Text>
                    <Text style={styles.userAge}>Age - {age}</Text>
                    <Text style={styles.userCity}>City - {City}</Text>

                    <View style={styles.Icons}>
                      <TouchableOpacity onPress={()=>{navigation.navigate('Messages')}} >
                        <Image source={require('../Assets/image.png')} style={styles.chatIcon} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>{navigation.navigate('View')}} >
                        <Text style={{ fontSize: 15.5, color: "#198754" }}>VIEW</Text>
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
    // flexGrow: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    // margin: 10,
    // width: 300,
    // marginTop: 30,
    alignSelf: 'center',
    // paddingBottom: 80,
    // shadowColor: '#212529',
    // elevation: 15,
    // minHeight: '50%'
  },


  modalText: {
    fontSize: 20,
    backgroundColor: '#e9ecef',
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,


  },
  // content: {
  //     borderWidth: 0.5,
  //     height:'auto', // Adjust height as needed
  //     width: 300,
  //     backgroundColor: '#198754',
  //     marginTop: 16,
  //     padding:10,
  //     borderRadius:10,
  //     alignSelf:'center', // new changes
  //     // alignItems:'center',
  //     marginLeft: 10.6,
  //     margin:10,

  //     paddingTop: 5,
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.28,
  //     shadowRadius: 3.88,
  //     elevation: 4,

  // },
  content: {
    height: 'auto', // Adjust height as needed
    width: 330,
    backgroundColor: 'white',
    marginTop: 6,
    padding: 10,
    // borderRadius: 10,
    alignSelf: 'center',
    marginLeft: 10.6,
    margin: 10,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25, //0.25
    shadowRadius: 3.84,//3.84
    elevation: 4,//4
  },


  icon: {
    height: 20,
    width: 20,
  },
  communityItem: {
    width: '82%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  clearButton: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: 160,
    // paddingBottom: 1,
    // marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: ,
    paddingBottom: 1,
    marginTop: 0
  },
  clearButtonText: {
    color: '#ffc107',
    fontWeight: '400',
    right: 28,
    bottom: 10
  },
  // dropdownAreaForGender: {
  //   width: '83%',
  //   height: 80,
  //   borderRadius: 10,
  //   marginTop: 1,
  //   backgroundColor: '#fff',
  //   elevation: 5,
  //   alignSelf: 'center',
  // },
  SearchContainer: {
    borderWidth: 1,
    width: 300,
    flexDirection: "row",
    height: 46,
    borderColor: '#198754',
    marginTop: 10,

    alignSelf: 'center' // new changes

  },
  search: {
    margin: 14,

  },
  PlaceHolderTitle: {
    fontSize: 16,
    marginLeft: 2,
    fontWeight: '700',
    marginTop: 10
  },
  cardContainer: {

    borderRadius: 10,
    alignSelf: 'center' // new changes

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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  jobProfile: {
    fontSize: 12,
    color: '#555',
    marginTop: 1,
    paddingBottom: 10

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
  },
  chatIcon: {
    width: 30,
    height: 30,
    margin: 2

  },
  //---------------------
  container: {
    // backgroundColor: 'white',
    padding: 12,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white'
  },
  // iconAntDesign: {
  //   marginRight: 5,
  // },
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

});

export default Matrimonial;
