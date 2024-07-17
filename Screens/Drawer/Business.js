import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';


export default function Business({ navigation }) {


  const [allDataFetched, setAllDataFetched] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Add loading state


  // for State

  const [stateData, setStateData] = useState([]);
  const [selectedStateValue, setSelectedStateValue] = useState('');
  const [selectedStateName, setSelectedStateName] = useState('');
  const [isFocus2, setIsFocus2] = useState(false);

  // for City

  const [cityData, SetCityData] = useState([]);
  const [isFocus3, setIsFocus3] = useState(false);
  const [selectedCityValue, setSelectedCityValue] = useState('');
  const [selectedCityName, setSelectedCityName] = useState('');

  // for SearchBar

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU"


  const fetchUsers = () => {

    setIsLoading(true); // Set loading to true when fetching data

    axios.get(`https://uat-api.socialbharat.org/api/business/search?searchText=&page=${page}&size=10&state=&city=`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

      .then(response => {
        if (response.data.data.result.length === 0) {
          setAllDataFetched(true); // Set allDataFetched to true when no more data is available
        } else {
          setUsers(prevUsers => [...prevUsers, ...response.data.data.result]);
          setOldData(response.data.data.result);
          setPage(prevPage => prevPage + 1);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  // For State

  useEffect(() => {
    axios.get('https://uat-api.socialbharat.org/api/states/101', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log(response.data.data);
      setStateData(response.data.data);
    }).catch((error) => { console.log(error) });
  }, [])

  const StateDrop = stateData ? stateData.map(states => ({
    label: states.name,
    value: states.id.toString(),
  })) : [];



  // For City

  const GetCities = (stateID) => {

    axios.get(`https://uat-api.socialbharat.org/api/cities/${stateID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => { SetCityData(response.data.data) })
      .catch(error => { console.log(error) })
  }

  const CityDrop = cityData ? cityData.map((cities) => ({
    label: cities.name,
    value: cities.id.toString(),
  })) : [];

  useEffect(() => {
    GetCities();

  }, [])

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    // Calculate the current scroll position as a percentage
    const scrollPosition = contentOffset.y + layoutMeasurement.height; // How much of the content is currently scrolled including visible part
    const totalHeight = contentSize.height;
    const scrolledPercentage = (scrollPosition / totalHeight) * 100;

    // Calculate if the scroll position is close to the bottom
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    // Check if the scrolled percentage is greater than or equal to 50% and is close to the bottom
    if (scrolledPercentage >= 100 && isCloseToBottom) {
      if (!isLoading) { // Prevent multiple fetches
        setIsLoading(true); // Start loading when scroll reaches halfway and is close to the bottom
        fetchUsers(); // Optionally: you can have your fetch logic here or any other action
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // for Provide Link

  const LinkingGOOGLEmap = (loc) => {
    Linking.openURL(loc)
  }

  // for Search Functionality

  const handleSearch = (query) => {
    setQuery(query);
    if (query === '') {
      setData(oldData);
    } else {
      const filteredData = oldData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.business_email.toLowerCase().includes(query.toLowerCase()) ||
        item.country.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredData);
    }
  }
  const handleClear = () => {
    setQuery('');
    setData(oldData); // Reset data to original when clearing
  }
  // if (error) {
  //   return (
  //     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
  //       <Text>Error Fetching Data..... Check Internet Connection</Text>
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={styles.MainContainer} onScroll={handleScroll}>

      <View style={styles.ButtonConatiner}>
        <TouchableOpacity style={styles.FirstButtonConatiner}>
          <FontAwesome5 name={'filter'} size={15} style={styles.Icons} />
          <Text style={styles.FirstButtonName}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SecondButtonConatiner}
          onPress={() => { navigation.navigate('Business_info') }}
        >
          <MaterialIcons name={'add-business'} size={23} style={styles.Icons} />
          <Text style={styles.SecondButtonName}>Promote Your Business</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.MainSearchContainers}>
      <View style={styles.SearchContainer}>
            <FontAwesome name={'search'} size={18} />
            <TextInput placeholder='Search ...' style={styles.searchInput} 
      
            />
          </View>
          {/* <FontAwesome name={'search'} size={18} /> */}

          {/* <TextInput placeholder='Search Business ...'
            style={{ fontSize: 15 }}
            onChangeText={handleSearch}
            clearButtonMode='never'
            autoCapitalize='none'
            value={query}

          >


          </TextInput>
          <TouchableOpacity>
            <Entypo name="circle-with-cross" size={24} color="black" />

          </TouchableOpacity> */}
          
          

        <View style={styles.containerDropDown2}>
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: '#008577' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={StateDrop}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? 'Select Your State' : '...'}
            searchPlaceholder="Search..."
            value={selectedStateValue}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setIsFocus2(false);
              setSelectedStateName(item.label);
              setSelectedStateValue(item.value);
              GetCities(item.value);

            }}
          />
        </View>
        <View style={styles.containerDropDown3}>
          <Dropdown
            style={[styles.dropdown, isFocus3 && { borderColor: '#008577' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={CityDrop}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus3 ? 'Select Your City' : '...'}
            searchPlaceholder="Search..."
            value={selectedCityValue}
            onFocus={() => setIsFocus3(true)}
            onBlur={() => setIsFocus3(false)}
            onChange={item => {
              setIsFocus3(false);
              setSelectedCityName(item.label);
              setSelectedCityValue(item.value);
            }}
          />
        </View>
      </View>
      <View style={styles.MainCardsContainer}>
        {users.map((itm, index) => (
          <View style={styles.CardsContainer} key={index}>
            {/* {
              itm.business_photos ?
                <Image source={{ uri: itm.business_photos[0] }} style={styles.imeges} />
                : <Image source={require('../Assets/04.jpg')} style={styles.imeges} />

            } */}
            {/* <Image source={itm.business_photos ? { uri: itm.business_photos[0] } : require('../Assets/04.jpg')}  style={styles.imeges} /> */}

            <Image source={itm.business_photos ? { uri: itm.business_photos[0] } :
              require('../Assets/04.jpg')} style={styles.imeges} />


            <View style={styles.businessNameContainer}>
              <View style={{ flex: 1 }}>
                <Text style={styles.business_name}>{itm.business_name}</Text>
              </View>
              {
                // for use of  Provide link and navigate
                itm.google_map_link ?
                  <TouchableOpacity onPress={() => {
                    LinkingGOOGLEmap(itm.google_map_link)
                  }}>
                    <FontAwesome5 name={'map-marked-alt'} size={22} color={'#ffc107'} />
                  </TouchableOpacity>
                  : <></>
              }
            </View>
            <Text style={styles.Category}> Category: {itm.business_category}</Text>
            <Text style={styles.PostedBy}>Posted By: {itm.name}</Text>
            <Text style={styles.Street}>Street: {itm.street_address}</Text>
            <Text style={styles.city}>{itm.city} ({itm.state})</Text>
            <Text style={styles.contactNumbers}>Contact Numbers: {itm.contact1}, {itm.contact2}, {itm.contact3}</Text>
            <Text style={styles.description}>{itm.description}</Text>
          </View>
        ))}
      </View>
      {/* Loading indicator */}
      {isLoading && <ActivityIndicator size="large" color="#008577" style={styles.loadingIndicator} />}
      {!allDataFetched && <Text style={styles.LOADINGOfListMessage}>LOADING ...</Text>}

      {allDataFetched && <Text style={styles.endOfListMessage}>🛑 ------- End of list ------- 🛑</Text>}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
        width: 90,
        alignItems: 'center',
        borderRadius: 10,
        gap: 10,
        // borderColor: '#008577',
        alignContent: "center",
        alignSelf: 'center',
        backgroundColor:"#008577",
        borderColor: '#ffc107',
    
        shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 }, // Shadow direction: down
            shadowOpacity: 0.1,
            shadowRadius: 8,
        
            // Shadow property for Android
            elevation: 5, // Increase this value to increase shadow
    
      },
  FirstButtonName: {
    fontSize: 17,
    color: '#fff',
  },
  SecondButtonName: {
        fontSize: 18,
        color: '#fff',
      },
    SecondButtonConatiner: {
    borderWidth: 1,
    width: 220.5,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 10,
    gap: 6,
    paddingHorizontal: 10,
    // borderColor: '#008577',
    borderColor: '#ffc107',

    alignContent: 'center',
    backgroundColor:"#008577",

    shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Shadow direction: down
        shadowOpacity: 0.1,
        shadowRadius: 8,
    
        // Shadow property for Android
        elevation: 6, // Increase this value to increase shadow

  },
  Icons: {
    color: '#ffc107',
  },
  MainSearchContainers: {
    alignItems: 'center'
  },
  SearchContainer: {
    // borderWidth: 1,
    width: 289.8,
    // margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
    // gap: 9,
    // justifyContent:'space-between',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#008577',
    height: 47,

  },
  containerDropDown: {
    backgroundColor: 'white',
    padding: 16,
    borderColor: '#008577',
  },
  dropdown: {
    height: 47,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 289.8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#6c757d'
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingHorizontal: 9,
    color: '#0F0F0F'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  containerDropDown2: {
    margin: 10,
  },
  MainCardsContainer: {
  },
  CardsContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    width: 'auto',
    height: 'auto',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
  imeges: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
  },
  business_name: {
    fontSize: 19,
    color: '#0F0F0F',
    padding: 6,
    margin: 8
  },
  Category: {
    fontSize: 15,
    color: '#0F0F0F',
    margin: 8,
    padding: 3,
  },
  containerDropDown3: {
    padding: 16,
    bottom: 15,
    justifyContent: "center"
  },
  PostedBy: {
    fontSize: 15,
    color: '#0F0F0F',
    borderRadius: 9,
    margin: 10,
    padding: 3,
  },
  Street: {
    fontSize: 15,
    color: '#0F0F0F',
    padding: 3,
    backgroundColor: '#E7EFEF',
    margin: 10,
    borderRadius: 9,
    paddingHorizontal: 5
  },
  city: {
    fontSize: 15,
    color: '#0F0F0F',
    backgroundColor: '#E7EFEF',
    padding: 3,
    margin: 10,
    borderRadius: 9,
    paddingHorizontal: 5
  },
  contactNumbers: {
    fontSize: 15,
    color: '#0F0F0F',
    backgroundColor: '#E7EFEF',
    padding: 3,
    margin: 10,
    borderRadius: 9,
    paddingHorizontal: 5
  },
  description: {
    fontSize: 15,
    color: '#0F0F0F',
    margin: 10,
    borderTopWidth: 1,
    borderTopColor: '#adb5bd',
  },
  businessNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingIndicator: {
    marginTop: 20, // Adjust as needed
  },
  endOfListMessage: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    bottom: 8,
    color: '#ff6347'


  },
  LOADINGOfListMessage: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    bottom: 2,
    color: '#04AA6D'
  }
});
