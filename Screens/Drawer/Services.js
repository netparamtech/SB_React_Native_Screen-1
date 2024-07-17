 import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Image, FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Services({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [value, setValue] = useState(null);
  const [serviceLabel, setServiceLabel] = useState("Select Your Service");
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectServiceName,setSelectServiceName] = useState('');
  const [selectServiceValue, setSelectServiceValue] =useState('');
// for State
const [stateData,SetStateData]=useState([]);
const [stateSelectedName,setStateSelectedName] = useState('');
const [stateSelectedValue,setStateSelectedValue] = useState('');

// for City

const [cityData,setCityData] = useState([]);


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU"
  //for Search 
  const fetchServices = async () => {
    try {
      const response = await axios.get('https://uat-api.socialbharat.org/api/user/services', {
        headers: { Authorization: `Bearer ${token}`}
      });
      
      setServices(response.data.data);
      setFilteredServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const filtered = services.filter(service =>
        service.title && service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  }, [searchQuery, services]);

  const ServiceDrops = filteredServices ? filteredServices.map((service)=>({
    label :service.title,
    value:service.id.toString()
  })) :[]


  //for State

const FetchState =()=>{
  axios.get('https://uat-api.socialbharat.org/api/states/101',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>{console.log(response.data.data)
    SetStateData(response.data.data)
  })
  .catch((error)=>{console.error("ERROR IS = ",error)})
}

useEffect(()=>{
  FetchState();
  FetchCities();
},[])

const StateDrop = stateData ? stateData.map(state=>({
  label : state.name,
  value:state.id.toString()
})):[];

// for City 

const FetchCities =(StateID)=>{
  axios.get(`https://uat-api.socialbharat.org/api/cities/${StateID}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then((response)=>{setCityData(response.data.data)})
  .catch((error)=>{console.error("error is == ",error)})
}

const CityDrop = cityData ? cityData.map((City)=>({
  label:City.name,
  value:City.id.toString() 
})):[]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.FirstContainer}>
        <View style={styles.ServiceContainer}>
          <Text style={styles.FirstHeadingName}>All SERVICES</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <AntDesign name={'down'} size={25} color={'#fff'} />
          </TouchableOpacity>
          {isModalVisible && (
            <Modal transparent={true} animationType='slide'>
              <View style={styles.modalContainer}>
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <Text>Close</Text>
                </TouchableOpacity>
                <View style={styles.modalOption}>
                  <Image source={require('../Assets/service4.png')} style={styles.modalIcon} />
                  <Text style={styles.modalText}>VIEW/CREATE</Text>
                </View>
                <View style={styles.modalOption}>
                  <Image source={require('../Assets/maintain.png')} style={styles.modalIcon} />
                  <Text style={styles.modalText}>MY SERVICES</Text>
                </View>
              </View>
            </Modal>
          )}
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder='Search services...'
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholderTextColor={'#6c757d'}
          />
        </View>

        {/* <FlatList
          data={filteredServices}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.cardContainer}
        />  */}

<View style={{ borderWidth:1.2, borderRadius:12}}>

        <ScrollView style={styles.cardContainer} nestedScrollEnabled={true}>
          {filteredServices.map((service, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Text style={styles.cardText}>{service.title}</Text>
              <Text style={styles.cardTextCat}>{service.category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
</View>

      </View>

      <View style={styles.SecondContainer}>
        <View style={styles.ServiceContainerTwo}>
          <Text style={styles.FirstHeadingName}>ADD SERVICES</Text>
        </View>

        <View style={styles.warningMSG}>
          <Text style={styles.warningMSGtext}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>

        <View style={styles.centerContent}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#008577' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={ServiceDrops}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Your Service' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setServiceLabel(item.label);
              setIsFocus(false);
            }}
          />
          <View style={styles.SelectedLabel}>
            <Text style={styles.SelectedLabelTEXT}>{serviceLabel}</Text>
          </View>

          <View style={styles.TextInputMobileONE}>
            <TextInput placeholder='Enter Your Mobile Number 1' placeholderTextColor={'#6c757d'}></TextInput>
          </View>
          <View style={styles.TextInputMobileTwo}>
            <TextInput placeholder='Enter Your Mobile Number 2' placeholderTextColor={'#6c757d'}></TextInput>
          </View>

          <View style={styles.TextInputExperience}>
            <TextInput placeholder='Enter Experience' placeholderTextColor={'#6c757d'}></TextInput>
          </View>

          {/* <TextInput style={styles.TextInput} placeholder='Enter Your Mobile Number 1' placeholderTextColor={'#6c757d'} />
          <TextInput style={styles.TextInput} placeholder='Enter Your Mobile Number 2' placeholderTextColor={'#6c757d'} />
          <TextInput style={styles.TextInput} placeholder='Enter Experience' placeholderTextColor={'#6c757d'} /> */}

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
            value={value2}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setValue2(item.value);
              setIsFocus2(false);
              setStateSelectedName(item.label);
              setStateSelectedValue(item.value);
              FetchCities(item.value)

            }}
          />

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
            value={value3}
            onFocus={() => setIsFocus3(true)}
            onBlur={() => setIsFocus3(false)}
            onChange={item => {
              setValue3(item.value);
              setIsFocus3(false);
            }}
          />

          <TextInput style={styles.DetailInputBox} placeholder='Enter Details' multiline={true} placeholderTextColor={'#6c757d'} />

          <TouchableOpacity style={styles.SubmitButton} onPress={() => navigation.navigate('Sub_Service')}>
            <Text style={styles.SubmitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:'90%'
    
  },
  FirstContainer: {
    backgroundColor: '#fff',
  },
  ServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#008577',
  },
  FirstHeadingName: {
    color: '#fff',
    fontSize: 16,
  },
  searchContainer: {
    margin: 10,
  },
  searchBar: {
    borderWidth: 0.5,
    height: 40,
    paddingHorizontal: 10,
  },
  cardContainer: {
    padding: 10,
    maxHeight: 360,

    
  },
  card: {
    padding: 22,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#C5E2E6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 15,
    color: '#0F0F0F',
  },
  cardTextCat:{
    fontSize: 10,
    color: '#0F0F0F',
  },
  modalContainer: {
    backgroundColor: '#bb86fc',
    padding: 10,
    height: 130,
    width: 200,
    margin: 10,
    borderRadius: 20,
    left: 140,
    top: 30,
    position: 'absolute',
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  modalIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
  },
  SecondContainer: {
    backgroundColor: '#fff',
    marginTop: 15,
  },
  ServiceContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#008577',
  },
  warningMSG: {
    margin: 10,
    backgroundColor: '#E3F4F4',
    borderRadius: 5,
    padding: 10,
  },
  warningMSGtext: {
    color: '#0096C7',
    fontSize: 12,
  },
  centerContent: {
    alignItems: 'center',
  },
  dropdown: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#6c757d',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,

  },
  SelectedLabel: {
    marginBottom: 10,
    width:'90%',
    alignContent:'center',
    alignItems:'center'

  },
  SelectedLabelTEXT: {
    fontSize: 16,
    color: '#000',
    backgroundColor:'#ccc',
    padding:10,
    borderRadius:10,
    flex:1,
    
  },
  TextInput: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
    color: '#6c757d',
  },
  DetailInputBox: {
    width: '90%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: 10,
    color: '#6c757d',
    textAlignVertical:'top'

  },
  SubmitButton: {
    backgroundColor: '#008577',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  SubmitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  TextInputMobileONE: {
        borderWidth: 0.5,
        height: 47,
        margin: 5,
        // width: 289.8,
        width:'90%',
        // left: 16,
        paddingHorizontal: 15,
        borderRadius: 8,
      },
      FirstContainer: {
        // borderWidth: 4,
        borderColor: 'red',
        // margin: 10,
        backgroundColor: '#fff'
      },
      TextInputMobileTwo: {
        borderWidth: 0.5,
        height: 47,
        margin: 5,
        width:'90%',
        // left: 16,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignContent: 'center',
        justifyContent: "center",
        justifyContent: 'center',

      },
      TextInputExperience: {
        borderWidth: 0.5,
        height: 47,
        margin: 5,
        width:'90%',
        // left: 16,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom:10

      },
});

