import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';

const BussinessInfo = [
  {
    "id": 1,
    "business_name": "Ambition Classes",
    "business_category": "Cloths",
    "street_address": "123",
    "country": "India",
    "state": "Rajasthan",
    "city": "Kota",
    "contact1": "7877649916",
    "contact2": "7877649915",
    "contact3": "1212121212",
    "business_email": 'HGh@gmail.com',
    "business_website": "jcjsncjnsjncsnmdklmcklsdmvjdnvkdnvkdnknkesmckidemcdkicmn",
    "business_photos": require('../Assets/service4.png'),
    "user_id": 1,
    "status": 'Active',
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    "google_map_link":"jcjsncjnsjncsnmdklmcklsdmvjdnvkdnvkdnknkesmckidemcdkicmn",
    "name": " Yash Salave"
  },
  {
    "id": 2,
    "business_name": "Infotrix classes",
    "business_category": "IT",
    "street_address": "123",
    "country": "India",
    "state": "Maharashtra",
    "city": "Dhule",
    "contact1": "7877649916",
    "contact2": "7877649915",
    "contact3": "1212121212",
    "business_email": 'jhdj@gmail.com',
    "business_website": "jcjsncjnsjncsnmdklmcklsdmvjdnvkdnvkdnknkesmckidemcdkicmn",
    "business_photos": require('../Assets/04.jpg'),
    "user_id": 2,
    "status": 'Active',
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    "google_map_link": "jcjsncjnsjncsnmdklmcklsdmvjdnvkdnvkdnknkesmckidemcdkicmn",
    "name": "Rahul Borse"
  },
  {
    "id": 3,
    "business_name": "Netparam Technology",
    "business_category": "IT-Sales",
    "street_address": "4994",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "contact1": "7877649916",
    "contact2": "7877649915",
    "contact3": "1212121212",
    "business_email": 'Kell@gmail.com',
    "business_website": 'www.ndcj.com',
    "business_photos": require('../Assets/04.jpg'),
    "user_id": 3,
    "status": 'Active',
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    "google_map_link": "jcjsncjnsjncsnmdklmcklsdmvjdnvkdnvkdnknkesmckidemcdkicmn",
    "name": "Pavan Patil"
  },
  {
    "id": 4,
    "business_name": "Software Solutions",
    "business_category": "IT-Sales",
    "street_address": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jodhpur",
    "contact1": "7877649916",
    "contact2": "7877649915",
    "contact3": "1212121212",
    "business_email": 'SOl@gmail.com',
    "business_website": 'www.ndcj.com',
    "business_photos": require('../Assets/04.jpg'),
    "user_id": 4,
    "status": 'Active',
    "description": null,
    "google_map_link": "jcjsncjnsjncsnmdklmcklsdmvjdnvkdnvkdnknkesmckidemcdkicmn",
    "name": "Jitendra Sing"
  },
  {
    "id": 5,
    "business_name": "Dubey Company",
    "business_category": "IT",
    "street_address": "123",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "contact1": "7877649916",
    "contact2": "7877649915",
    "contact3": "1212121212",
    "business_email": 'molOl@gmail.com',
    "business_website": 'www.ndcj.com',
    "business_photos": require('../Assets/04.jpg'),
    "user_id": 5,
    "status": 'Active',
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    "google_map_link":"https://www.google.com/maps/place/Netparam+Technologies+Pvt.+Ltd./@26.8854726,75.7427703,17z/data=!4m6!3m5!1s0x396dc9787b6e8159:0x7162ee3f35dc8f5a!8m2!3d26.8854726!4d75.7427703!16s%2Fg%2F11n0vbwx38?entry=ttu",
    "name": "Keadr Patil"
  }

]



const State = [
  { label: 'Maharashtra', value: '1' },
  { label: 'Goa', value: '2' },
  { label: 'Rajasthan', value: '3' },
  { label: 'Bihar', value: '4' },
  { label: 'Gujrat', value: '5' },
  { label: 'MP', value: '6' },
  { label: 'Up', value: '7' },
];

const City = [
  { label: 'Jaipur', value: '3' },
  { label: 'Mumbai', value: '1' },
  { label: 'Raipur', value: '4' },
  { label: 'Surat', value: '5' },
  { label: 'Indore', value: '6' },
  { label: 'Ayyodhya', value: '7' }
];



export default function Business({navigation}) {


  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);

  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);


  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.ButtonConatiner}>
        {/* <View> */}
        <TouchableOpacity style={styles.FirstButtonConatiner}>
          <FontAwesome5 name={'filter'} size={15} style={styles.Icons} />
          <Text style={styles.FirstButtonName}>Filter</Text>
        </TouchableOpacity>
        {/* </View> */}

        <TouchableOpacity style={styles.SecondButtonConatiner} onPress={()=>{navigation.navigate('Business_info')}}>
          <MaterialIcons name={'add-business'} size={23} style={styles.Icons} />
          <Text style={styles.SecondButtonName}>Promote Your Bussiness</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.MainSearchContainers}>
        <View style={styles.SearchContainer}>
          <FontAwesome name={'search'} size={18} />
          <TextInput placeholder='Search Bussiness ...' style={{ fontSize: 15 }}></TextInput>
        </View>

        <View style={styles.containerDropDown2}>
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: '#008577' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={State}
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
            data={City}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus3 ? 'Select Your City' : '...'}
            searchPlaceholder="Search..."
            value={City}
            onFocus={() => setIsFocus3(true)}
            onBlur={() => setIsFocus3(false)}
            onChange={item => {
              setValue3(item.value);
              setIsFocus3(false);
            }}

          />
        </View>

      </View>

      <View style={styles.MainCardsContainer}>
        {BussinessInfo.map(({ business_photos, business_name, business_category, name, street_address, city, contact1, description, id, contact3, contact2, state,google_map_link }) => (
          <View style={styles.CardsContainer} key={id}>
            <Image source={business_photos} style={styles.imeges} />
            <View style={styles.businessNameContainer}>
              <View style={{ flex: 1 }}>
                <Text style={styles.business_name}>{business_name}</Text>
              </View>
              <TouchableOpacity onPress={()=>{}}>
              <FontAwesome5 name={'map-marked-alt'} size={22} color={'#ffc107'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.Category}> Category: {business_category}</Text>
            <Text style={styles.PostedBy}>Posted By: {name}</Text>
            <Text style={styles.Street}>Street: {street_address}</Text>
            <Text style={styles.city}>{city} ({state})</Text>
            <Text style={styles.contactNumbers}>Contact Numbers: {contact1}, {contact2}, {contact3}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },
  ButtonConatiner: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    // justifyContent:'center',
    gap: 10,
    right: 10,
    margin: 10,
    // alignContent:'center',
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
    // color: '#008577',
    color:'#fff'
  },
  SecondButtonName: {
    fontSize: 18,
    // color: '#008577',
    color:'#fff'

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
    borderWidth: 0.5,
    width: 320,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 9,
    borderColor: '#008577',
    marginBottom: 15
  }
  ,
  containerDropDown: {
    backgroundColor: 'white',
    padding: 16,
    borderColor: '#008577',
  },
  dropdown: {
    height: 47,
    borderColor: '#008577',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 289.8,
    // left: 5,
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
    // borderWidth: 2,
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



  }
  ,
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
    // borderRadius: 8,
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
    // borderWidth:1,
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


})