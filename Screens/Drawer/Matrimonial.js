import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList, Button, TextInput } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

const Gender = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' }
];
const Occupation = [
  { label: 'Government', value: 'Government' },
  { label: 'Private', value: 'Private' },
  { label: 'Doctor', value: 'Doctor' },
  { label: 'Engineer', value: 'Engineer' },
  { label: 'Sales', value: 'Sales' },
  { label: 'Marketing', value: 'Marketing' },
];

const Matrimonial = ({ navigation }) => {

  // for State
  const [stateDada, setStateData] = useState([]);
  const [stateSelectedName, setStateSelectedName] = useState();
  const [stateStateSelectedValue, setStateSelectedValue] = useState();

  // for City

  const [cityData, setCityData] = useState([])
  const [citySelectedVale, setCitySelectedVale] = useState('');
  const [citySelectedName, setCitySelectedName] = useState('');
  const [Users, setUsers] = useState([]);

  // for Subcast
  const [subcastData, setSubcastData] = useState([]);
  const [subcastSelectedValue, setSubcastSelectedValue] = useState('');
  const [subcastSelectedName, setsubcastSelectedName] = useState('');

  // for Loader , pagination 
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1);
  const [isDataFetched, setIsDataFetched] = useState(false)

  token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUwLCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjEsInBlcm1pc3Npb25JZCI6MSwiaWF0IjoxNzE3ODM3NTc5LCJleHAiOjE3MTg3MDE1Nzl9.Cg1Kl8KhDDa0glSe3rGGzMSDmmlbB_a6M7xkStgimwY"

  const FetchUsers = () => {
    if (isLoading || isDataFetched) return;

    setIsLoading(true);

    axios.get(`https://uat-api.socialbharat.org/api/partner/search?q=&page=${page}&size=20&community_id=11&state=&city=&gender=&occupation=&cast=&subcastId=`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const newUsers = response.data.data.users;

      if (newUsers.length > 0) {
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setPage(prevPage => prevPage + 1);
      } else {
        setIsDataFetched(true);
      }

      setIsLoading(false);
    })
    .catch(error => {
      console.log("Error is -", error);
      setIsLoading(false);
    });
  };


  useEffect(() => {
    FetchUsers();

  },[page])

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
          Occupation
        </Text>
      );
    }
    return null;
  };

  // for State
  const fetchState = () => {
    axios.get('https://uat-api.socialbharat.org/api/states/101', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      // console.log(response.data.data);
      setStateData(response.data.data);
    }).catch((error) => { console.log(error) });

  }

  const StateDrop = stateDada ? stateDada.map(states => ({
    label: states.name,
    value: states.id.toString(),
  })) : [];

  // const StateDrop = stateDada ? stateDada.map(state => ({})) : [];


  // for City 

  const getCity = (stateID) => {

    axios.get(`https://uat-api.socialbharat.org/api/cities/${stateID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      // console.log(response.data.data)
      setCityData(response.data.data)
    })
      .catch((error) => { console.log('Error is', error) })
  }

  const CityDrop = cityData ? cityData.map(city => ({
    label: city.name,
    value: city.id.toString(),
  })) : []

  // for Subcast
  const fetchSubcast = () => {
    axios.get('https://uat-api.socialbharat.org/api/fetch/11/subcasts',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((response) => {
      // console.log("--------------------")
      // console.log(response.data.data)
      // console.log("--------------------")
      setSubcastData(response.data.data)
    })
      .catch((error) => {
        console.log("--------------------")
        console.log('Error is = ', error)
      })

  }
  useEffect(() => {
    fetchState()
    getCity()
    fetchSubcast()
  }, [])

  const SubcastDrop = subcastData ? subcastData.map(subcast => ({
    label: subcast.subcast,
    value: subcast.subcast_id.toString(),
  })) : []

  // console.log(SubcastDrop)

  const searchRef = useRef(null);
  return (
    <View style={styles.ParentContainer}>
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
                          color={isFocus ? 'green' : 'black'}
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
                />
              </View>


              {/* clear Button */}
              <View style={styles.container}>
                {renderLabel2()}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus2 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={StateDrop}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus2 ? 'Select State' : '...'}
                  searchPlaceholder="Search..."
                  value={stateStateSelectedValue}
                  onFocus={() => setIsFocus2(true)}
                  onBlur={() => setIsFocus2(false)}


                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setStateSelectedValue(null) }} >
                      {stateStateSelectedValue ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus2 ? 'green' : 'black'}
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
                    setStateSelectedName(item.label);
                    setStateSelectedValue(item.value);
                    getCity(item.value);
                  }}
                />
              </View>
              <View style={styles.container}>
                {renderLabel3()}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus3 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={CityDrop}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus3 ? 'Select City' : '...'}
                  searchPlaceholder="Search..."
                  value={citySelectedVale}
                  onFocus={() => setIsFocus3(true)}
                  onBlur={() => setIsFocus3(false)}



                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setCitySelectedVale(null) }} >
                      {citySelectedVale ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus3 ? 'green' : 'black'}
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
                    setCitySelectedVale(item.value);
                    setCitySelectedName(item.label);
                  }}

                />
              </View>
              <View style={styles.container}>
                {renderLabel4()}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus4 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={SubcastDrop}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus4 ? 'Select Subcast' : '...'}
                  searchPlaceholder="Search..."
                  value={subcastSelectedValue}
                  onFocus={() => setIsFocus4(true)}
                  onBlur={() => setIsFocus4(false)}


                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setSubcastSelectedValue(null) }} >
                      {subcastSelectedValue ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus4 ? 'green' : 'black'}
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
                    setsubcastSelectedName(item.label)
                    setSubcastSelectedValue(item.value);
                  }}
                />
              </View>
              <View style={styles.container}>
                {renderLabel5()}

                {/* call kela */}

                <Dropdown
                  style={[styles.dropdown, isFocus5 && { borderColor: '#ffc107' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={Occupation}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus5 ? 'Select Occupation' : '...'}
                  searchPlaceholder="Search..."
                  value={value5}
                  onFocus={() => setIsFocus5(true)}
                  onBlur={() => setIsFocus5(false)}


                  renderRightIcon={() => (

                    <TouchableOpacity onPress={() => { setValue5(null) }} >
                      {value5 ?
                        <Entypo
                          style={styles.iconAntDesign}
                          color={isFocus5 ? 'green' : 'black'}
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

                />
              </View>



              <View style={{ marginTop: 10 }}>
                {/* <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 10 }}>Add New</Text> */}
                <View style={{ margin: 9 }}>
                  <Button title="ADD MATROMONIAL" color={'#ffc107'} onPress={() => { navigation.navigate('Add_Matrimonial') }} />
                </View>
              </View>
              <View>
              </View>


              <View style={[styles.SearchContainer]}>
                <FontAwesome name={'search'} size={18} />
                <TextInput placeholder='Search ...' style={{ fontSize: 15 }}></TextInput>
              </View>
            </View>
            <View style={styles.cardContainer}>
              {
                Users.map((item, index) =>
                  <View key={index} style={styles.cards}>
                    <View style={styles.cardsImage}>
                      {/* <Image source={{ uri: proposal_photos }} style={styles.image} /> */}
                      {/* <Image source={item.proposal_photos ? { uri: item.proposal_photos } : require('../Assets/04.jpg')} style={styles.image} /> */}

                      {/* <Image source={item.proposal_photos ? { uri: item.proposal_photos } : require('../Assets/04.jpg')} style={styles.image} /> */}

                      {/* <Image source={item.proposal_photos ? { uri: item.proposal_photos } :
                        require('../Assets/04.jpg')} style={styles.image} /> */}
                        {/* <Image source={{uri : item.proposal_photos}} style={styles.image}/> */}
                    </View>
                    <Text style={styles.userName}>{item.matrimonial_profile_name}</Text>
                    <Text style={styles.jobProfile}>{item.matrimonial_profile_occupation}</Text>
                    <Text style={styles.userEducation}>Education - {item.education}</Text>
                    {/* <Text style={styles.userAge}>Age - {age}</Text> */}
                    <Text style={styles.userCity}>City - {item.city}</Text>
                    <Text style={styles.userCity}>Contact No - {item.mobile}</Text>


                    <View style={styles.Icons}>
                      <TouchableOpacity onPress={() => { navigation.navigate('Messages') }} >
                        <Image source={require('../Assets/image.png')} style={styles.chatIcon} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => { navigation.navigate('View') }} >
                        <Text style={{ fontSize: 15.5, color: "#008577" }}>VIEW</Text>
                      </TouchableOpacity>
                    </View>


                    <View >
                      <TouchableOpacity style={styles.BiodataButtonContainer}>
                        <Text style={styles.BiodataButtonTEXT} >Download Biodata</Text>
                      </TouchableOpacity>
                    </View>
                  </View>)
              }
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={FetchUsers}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator size="large" color="#198754" />
          ) : isDataFetched ? (
            <Text style={styles.endOfListText}>--- End of the list ---</Text>
          ) : null
        }
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
  Indicator: {
    marginTop: 20
  },


  modalText: {
    fontSize: 20,
    backgroundColor: '#e9ecef',
    alignSelf: 'center',
    padding: 10,


  },
  ParentContainer: {
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1
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
    marginTop: 6,
    padding: 10,
    // borderRadius: 10,
    // alignSelf: 'center',
    marginLeft: 10.6,
    margin: 10,
    // paddingTop: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.25, //0.25
    // shadowRadius: 3.84,//3.84
    // elevation: 4,//4
    // alignContent:'center',

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
  // SearchContainer: {
  //   borderWidth: 1,
  //   width: 300,
  //   flexDirection: "row",
  //   height: 46,
  //   borderColor: '#198754',
  //   marginTop: 10,

  //   alignSelf: 'center' // new changes

  // },
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
  // search: {
  //   margin: 14,

  // },
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
    // width: 100,
    // height: 100,
    // borderRadius: 50,

    height: 200,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    // resizeMode :'contain',
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
    paddingBottom: 10,
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
  container: {
    // backgroundColor: 'white',
    padding: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    // width:'90%',

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

  BiodataButtonContainer: {
    // borderWidth:,
    alignSelf: 'center',
    padding: 7,
    borderRadius: 9,
    backgroundColor: '#008577',
    elevation: 5,
    // top:10


  },
  BiodataButtonTEXT: {
    fontSize: 15,
    // fontWeight:'600',
    color: '#fff',
  },

  endOfListText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#FF0000',
  },

});

export default Matrimonial;
