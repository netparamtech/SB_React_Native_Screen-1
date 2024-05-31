// import React, { useState } from "react";
// import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList, TextInput } from "react-native";
// import { Dropdown } from 'react-native-element-dropdown';
// import Entypo from 'react-native-vector-icons/Entypo';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const State = [
//   { label: 'Maharashtra', value: 'Maharshtra' },
//   { label: 'Goa', value: 'Goa' },
//   { label: 'UP', value: 'UP' },
//   { label: 'Punjab', value: 'Punjab' },
//   { label: 'Sikkim', value: 'Sikkim' },
//   { label: 'J&K', value: 'J&K' }


// ];
// const City = [
//   { label: 'Pune', value: 'Pune' },
//   { label: 'Jaipur', value: 'Delhi' }
// ];

// const Matrimonial = ({ navigation }) => {

//   const users = [
//     {
//       name: 'Yash Salave',
//       jobProfile: 'Java Developer',
//       age: 26,
//       Education: 'PG-Dac & B.E. Engineering',
//       City: 'Dhule (Maharashtrs)',
//       profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
//       Contact_no: '7770089444'

//     },
//     {
//       name: 'Ketan Patil',
//       jobProfile: 'Angular Developer',
//       age: 26,
//       Education: 'PG-Dac & B.E. Engineering',
//       City: 'Mumbai (Maharashtrs)',
//       profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
//       Contact_no: '9990089222'

//     },
//     {
//       name: 'Saaz Arora',
//       jobProfile: 'React Developer',
//       age: 26,
//       Education: 'PG-Dac & B.E. Engineering',
//       City: 'Nasik (Maharashtrs)',
//       profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
//       Contact_no: '3330089555'


//     },
//     {
//       name: 'Yash Patil',
//       jobProfile: 'MEARN Developer',
//       age: 26,
//       Education: 'PG-Dac & B.E. Engineering',
//       City: 'Jalgaon (Maharashtrs)',
//       profilPhoto: 'https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3.jpg',
//       Contact_no: '6660089111'


//     },
//   ]
//   const [value2, setValue2] = useState(null);
//   const [value3, setValue3] = useState(null);

//   const [isFocus2, setIsFocus2] = useState(false);
//   const [isFocus3, setIsFocus3] = useState(false);



//   const renderLabel2 = () => {
//     if (value2 || isFocus2) {
//       return (
//         <Text style={[styles.label, isFocus2 && { color: '#198754' }]}>
//           State
//         </Text>
//       );
//     }
//     return null;
//   };


//   const renderLabel3 = () => {
//     if (value3 || isFocus3) {
//       return (
//         <Text style={[styles.label, isFocus3 && { color: '#198754' }]}>
//           City
//         </Text>
//       );
//     }
//     return null;
//   };

//   // const [selectedState, setSelectedState] = useState("Select State");
//   // const [selectedCity, setSelectedCity] = useState("Select City");

//   // const [isClicked, setIsClicked] = useState(false);
//   // const [isClicked1, setIsClicked1] = useState(false);
//   // const [isClicked2, setIsClicked2] = useState(false);
//   // const [isClicked3, setIsClicked3] = useState(false);
//   // const [isClicked4, setIsClicked4] = useState(false);

//   return (
//     <View style={styles.MainContainer}>
//       <FlatList
//         data={[{ key: 'dummy' }]}
//         renderItem={() => (
//           <View>
//             <Text style={styles.modalText}>Search Members</Text>
//             <View style={styles.content}>
//               <View style={styles.container}>
//                 {renderLabel2()}
//                 {/* call kela */}
//                 <Dropdown
//                   style={[styles.dropdown, isFocus2 && { borderColor: '#ffc107' }]}
//                   placeholderStyle={styles.placeholderStyle}
//                   selectedTextStyle={styles.selectedTextStyle}
//                   inputSearchStyle={styles.inputSearchStyle}
//                   iconStyle={styles.iconStyle}
//                   data={State}
//                   search
//                   maxHeight={300}
//                   labelField="label"
//                   valueField="value"
//                   placeholder={!isFocus2 ? 'Select State' : '...'}
//                   searchPlaceholder="Search..."
//                   value={value2}
//                   onFocus={() => setIsFocus2(true)}
//                   onBlur={() => setIsFocus2(false)}
//                   renderRightIcon={() => (
//                     <TouchableOpacity onPress={() => { setValue2(null) }} >
//                       {value2 ?
//                         <Entypo
//                           style={styles.iconAntDesign}
//                           color={isFocus2 ? 'blue' : 'black'}
//                           name="circle-with-cross"
//                           size={20}
//                         />

//                         : null

//                       }
//                     </TouchableOpacity>
//                   )}
//                   onChange={item => {
//                     setValue2(item.value);
//                     setIsFocus2(false);
//                   }}
//                 />
//               </View>

//               <View style={styles.container}>
//                 {renderLabel3()}
//                 <Dropdown
//                   style={[styles.dropdown, isFocus3 && { borderColor: '#ffc107' }]}
//                   placeholderStyle={styles.placeholderStyle}
//                   selectedTextStyle={styles.selectedTextStyle}
//                   inputSearchStyle={styles.inputSearchStyle}
//                   iconStyle={styles.iconStyle}
//                   data={City}
//                   search
//                   maxHeight={300}
//                   labelField="label"
//                   valueField="value"
//                   placeholder={!isFocus3 ? 'Select City' : '...'}
//                   searchPlaceholder="Search..."
//                   value={value3}
//                   onFocus={() => setIsFocus3(true)}
//                   onBlur={() => setIsFocus3(false)}
//                   renderRightIcon={() => (

//                     <TouchableOpacity onPress={() => { setValue3(null) }} >
//                       {value3 ?
//                         <Entypo
//                           style={styles.iconAntDesign}
//                           color={isFocus3 ? 'blue' : 'black'}
//                           name="circle-with-cross"
//                           size={20}
//                         />

//                         : null

//                       }
//                     </TouchableOpacity>
//                   )}

//                   onChange={item => {
//                     setValue3(item.value);
//                     setIsFocus3(false);
//                   }}
//                 />

//                 <View style={[styles.SearchContainer]}>
//                   <FontAwesome name={'search'} size={18} />
//                   <TextInput placeholder='Search ...' style={{ fontSize: 15 }}></TextInput>
//                 </View>
//               </View>
//             </View>

//             <View style={styles.cardContainer}>
//               {
//                 users.map(({ name, Education, City, profilPhoto, jobProfile, age, Contact_no }) =>
//                   <View key={name} style={styles.cards}>
//                     <View style={styles.cardsImage}>
//                       <Image source={{ uri: profilPhoto }} style={styles.image} />
//                     </View>
//                     <Text style={styles.userName}>{name}</Text>
//                     <Text style={styles.jobProfile}>{jobProfile}</Text>
//                     <Text style={styles.userEducation}>Education - {Education}</Text>
//                     <Text style={styles.userAge}>Age - {age}</Text>
//                     <Text style={styles.userCity}>City - {City}</Text>
//                     <Text style={styles.userCity}>Contact No - {Contact_no}</Text>
//                     <View style={styles.Icons}>
//                       <TouchableOpacity onPress={() => { navigation.navigate('Messages') }} >
//                         <Image source={require('../Assets/image.png')} style={styles.chatIcon} />
//                       </TouchableOpacity>

//                       <TouchableOpacity onPress={() => { navigation.navigate('View') }} >
//                         <Text style={{ fontSize: 15.5, color: "#008577" }}>VIEW</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>)
//               }
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignContent: 'center',
//   },
//   modalText: {
//     fontSize: 20,
//     backgroundColor: '#e9ecef',
//     marginTop: 10,
//     alignSelf: 'center',
//     padding: 10,
//   },
//   content: {
//     height: 'auto', // Adjust height as needed
//     width: 330,
//     // backgroundColor: 'white',
//     padding: 10,
//     // alignSelf: 'center',
//     // marginLeft: 10.6,
//     margin: 10,
//     // paddingTop: 15,
//     // alignContent:'center',
//     // alignItems:'center'
//     // shadowColor: '#000',
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 3,
//     // },
//     // shadowOpacity: 0.25, //0.25
//     // shadowRadius: 3.84,//3.84
//     // elevation: 4,//4
//     // alignContent:'center',
//     // justifyContent:'center',
//     // alignSelf:"center"
//   },
//   MainContainer: {
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     // alignContent:'center',
//     alignItems: 'center',
//     flex: 1
//   },
//   // icon: {
//   //   height: 20,
//   //   width: 20,
//   // },
//   // communityItem: {
//   //   width: '82%',
//   //   height: 40,
//   //   borderBottomWidth: 1,
//   //   borderBottomColor: '#8e8e8e',
//   //   alignSelf: 'center',
//   //   justifyContent: 'center'
//   // },
//   // clearButton: {
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   paddingBottom: 1,
//   //   marginTop: 0
//   // },
//   // clearButtonText: {
//   //   color: '#ffc107',
//   //   fontWeight: '400',
//   //   right: 28,
//   //   bottom: 10
//   // },
//   // SearchContainer: {
//   //   borderWidth: 1,
//   //   width: 300,
//   //   flexDirection: "row",
//   //   height: 46,
//   //   borderColor: '#198754',
//   //   marginTop: 10,
//   //   alignSelf: 'center' // new changes
//   // },
//   // search: {
//   //   margin: 14,
//   // },
//   // PlaceHolderTitle: {
//   //   fontSize: 16,
//   //   marginLeft: 2,
//   //   fontWeight: '700',
//   //   marginTop: 10
//   // },
//   cardContainer: {
//     borderRadius: 10,
//     alignSelf: 'center', // new changes
//   },
//   cards: {
//     margin: 10,
//     padding: 10,
//     height: 'auto',
//     width: 300,
//     marginTop: 30,
//     borderRadius: 10,
//     backgroundColor: 'white', // Ensure a solid background color
//     shadowColor: '#000',
//     bottom: 30,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 4, // This is for Android, use shadow properties for iOS
//   },
//   cardsImage: {
//     alignItems: 'center',
//   },
//   image: {
//     height: 200,
//     width: 300,
//     alignSelf: 'center',
//     borderRadius: 10,
//     bottom: 9.8
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 5,
//     paddingHorizontal: 10
//   },
//   jobProfile: {
//     fontSize: 12,
//     color: '#555',
//     marginTop: 1,
//     paddingBottom: 5,
//     paddingHorizontal: 10


//   },
//   userEducation: {
//     fontSize: 14,
//     marginTop: 5,
//     margin: 3,
//     padding: 7,
//     borderRadius: 10,
//     backgroundColor: '#dee2e6',
//   },
//   userAge: {
//     fontSize: 14,
//     marginTop: 5,
//     backgroundColor: '#dee2e6',
//     margin: 3,
//     padding: 7,
//     borderRadius: 10
//   },
//   userCity: {
//     fontSize: 14,
//     marginTop: 5,
//     backgroundColor: '#dee2e6',
//     margin: 3,
//     padding: 7,
//     borderRadius: 10
//   },
//   Icons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 30,
//     paddingBottom: 15
//   },
//   chatIcon: {
//     width: 30,
//     height: 30,
//     margin: 2
//   },
//   //---------------------
//   // container: {
//   //   padding: 12,
//   // },
//   dropdown: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     backgroundColor: 'white',
//     // width:300
//     margin: 5,
//     borderColor: '#008577',


//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',   /// new changes
//     left: 22,
//     top: 0.4,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//     borderRadius: 10  // new chnges
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
//   SearchContainer: {
//     borderWidth: 0.5,
//     margin: 5,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     gap: 9,
//     borderColor: '#008577',
//     flex: 1,
//   },
// });

// export default Matrimonial;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList, TextInput, ActivityIndicator } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Matrimonial = ({ navigation }) => {
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [members, setMembers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [allDataFetched, setAllDataFetched] = useState(false);

  //  for States
  const [stateData, setStateData] = useState([]);
  const [stateSelectedName, setstateSelectedName] = useState();
  const [stateSelectedValue, setStateSelectedValue] = useState();

  // for City
  const [cityData, setCityData] = useState([]);
  const [citySelectedName, setCitySelectedName] = useState();
  const [citySelectedValue, setCitySelectedValue] = useState();

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUwLCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjEsInBlcm1pc3Npb25JZCI6MSwiaWF0IjoxNzE3MDU5OTg3LCJleHAiOjE3MTc5MjM5ODd9.a5Cy2cYNZEiB0dwoLHoPkFezigikLWj1dFyqdhiufAE"

  const fetchData = async () => {
    if (allDataFetched || loading) return;

    setLoading(true);
    try {
      const response = await axios.get(`https://uat-api.socialbharat.org/api/users/search?q=&page=${page}&size=20&state=&city=`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const newUsers = response.data.data.users;
      console.log(newUsers);

      if (newUsers.length === 0) {
        setAllDataFetched(true);
      } else {
        setMembers(prevMembers => [...prevMembers, ...newUsers]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Network Error: No response received', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error:', error.message);
      }
      console.error('Error config:', JSON.stringify(error.config, null, 2));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Dependency array is empty to ensure fetchData is called only once when the component mounts
  }, []);

  const fetchStateData = async () => {
    try {
      const response = await axios.get('https://uat-api.socialbharat.org/api/states/101', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.data);
      setStateData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStateData();
  }, []);

  const GetCities = async (stateID) => {
    try {
      const response = await axios.get(`https://uat-api.socialbharat.org/api/cities/${stateID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.data);
      setCityData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderLabel = (value, isFocused, label) => {
    if (value || isFocused) {
      return <Text style={[styles.label, isFocused && { color: '#198754' }]}>{label}</Text>;
    }
    return null;
  };

  const calculateAge = dob => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image source={item.photo ? { uri: item.photo } : require('../Assets/04.jpg')} style={styles.image} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.jobProfile}>{item.occupation}</Text>
      <Text style={styles.userEducation}>Education - {item.highest_qualification}</Text>
      <Text style={styles.userAge}>Age - {calculateAge(item.age)}</Text>
      <Text style={styles.userCity}>City - {item.native_place_city}</Text>
      <Text style={styles.userCity}>Contact No - {item.mobile}</Text>
      <View style={styles.Icons}>
        <TouchableOpacity onPress={() => { navigation.navigate('Messages') }}>
          <Image source={require('../Assets/image.png')} style={styles.chatIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('View')}>
          <Text style={{ fontSize: 15.5, color: "#008577" }}>VIEW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const StateDrop = stateData.map(state => ({
    label: state.name,
    value: state.id.toString()
  }));

  const CityDrop = cityData.map(city => ({
    label: city.name,
    value: city.id.toString()
  }));

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.modalText}>Search Members</Text>
      <View style={styles.content}>
        <View style={styles.container}>
          <View style={styles.containerDropDown3}>
            <Dropdown
              style={[styles.dropdown, isFocus3 && { borderColor: '#ffc107' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={StateDrop}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus3 ? 'Select State' : '...'}
              searchPlaceholder="Search..."
              value={stateSelectedValue}
              onFocus={() => setIsFocus3(true)}
              onBlur={() => setIsFocus3(false)}
              renderRightIcon={() => (
                <TouchableOpacity onPress={() => setValue3(null)}>
                  {value3 ? (
                    <Entypo
                      style={styles.iconAntDesign}
                      color={value3 ? 'green' : 'black'}
                      name="circle-with-cross"
                      size={20}
                    />
                  ) : null}
                </TouchableOpacity>
              )}
              onChange={item => {
                setIsFocus3(false);
                setstateSelectedName(item.label);
                setStateSelectedValue(item.value);
                GetCities(item.value);
              }}
            />
          </View>
          <View style={styles.containerDropDown4}>
            <Dropdown
              style={[styles.dropdown, isFocus2 && { borderColor: '#ffc107' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={CityDrop}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!value2 ? 'Select City' : '...'}
              searchPlaceholder="Search..."
              value={value2}
              onFocus={() => setIsFocus2(true)}
              onBlur={() => setIsFocus2(false)}
              renderRightIcon={() => (
                <TouchableOpacity onPress={() => setValue2(null)}>
                  {value2 ? (
                    <Entypo
                      style={styles.iconAntDesign}
                      color={isFocus2 ? 'green' : 'black'}
                      name="circle-with-cross"
                      size={20}
                    />
                  ) : null}
                </TouchableOpacity>
              )}
              onChange={item => {
                setValue2(item.value);
                setIsFocus2(false);
                setCitySelectedName(item.label);
                setCitySelectedValue(item.value);
              }}
            />
          </View>

          <View style={styles.SearchContainer}>
            <FontAwesome name={'search'} size={18} />
            <TextInput placeholder="Search ..." style={styles.search} />
          </View>
        </View>
      </View>
      <FlatList
        data={members}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          if (loading) return <ActivityIndicator size="large" color="#008577" style={styles.loadingIndicator} />;
          if (allDataFetched) return <Text style={styles.endOfListMessage}>🛑 ------- End of list ------- 🛑</Text>;
          return null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  modalText: {
    fontSize: 20,
    backgroundColor: '#e9ecef',
    marginTop: 10,
    alignSelf: 'center',
    padding: 10
  },
  content: {
    width: 330,
    padding: 10,
    margin: 10
  },
  container: {
    alignContent: 'center'
  },
  containerDropDown: {
    marginVertical: 5
  },
  dropdown: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderColor: '#008577'
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 0.4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    borderRadius: 10
  },
  cardContainer: {
    margin: 5,
    padding: 10,
    height: 'auto',
    width: 300,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    bottom: 30,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4
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
    backgroundColor: '#dee2e6'
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
  loadingIndicator: {
    marginTop: 20
  },
  endOfListMessage: {
    fontSize: 20,
    bottom: 8,
    color: '#ff6347',
    alignSelf: 'center'
  },
  containerDropDown4: {
    height: 45,
    marginBottom: 15,
    marginTop: 5,
  },
  containerDropDown3: {
    height: 45,
    marginBottom: 15,
    marginTop: 5,
  },
  SearchContainer: {
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#008577',
    paddingHorizontal: 10,
    marginTop: 5,
    gap: 7
  },
  search: {
    width: 297
  }
});

export default Matrimonial;

