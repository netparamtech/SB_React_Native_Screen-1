import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextBase, TextInput, TouchableOpacity, View, Modal, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
  { label: "Restaurant and Catering Services", value: "1" },
  { label: "Food Delivery Services", value: '2' },
  { label: "Grocery Delivery Services", value: '3' },
  { label: "Ride-sharing Services (e.g., Uber, Lyft)", value: '4' },
  { label: ' Public Transportation', value: '5' },
  { label: 'Taxi Services', value: '6' },
  { label: 'Massage and Spa Services', value: '7' },
  { label: 'Electrical Services', value: '9' },
  { label: 'Cleaning Services', value: '10' },
  { label: 'Banking Services', value: '11' },
  { label: 'Insurance Services', value: '12' },
  { label: 'Financial Planning Services', value: '13' },
  { label: 'Tutoring Services', value: '14' },
  { label: 'Online Learning Platforms', value: '15' },
  { label: 'Educational Consulting', value: '16' },
  { label: 'Event Planning Services', value: '17' },
  { label: 'Streaming Services (e.g., Netflix, Hulu)', value: '18' },
  { label: 'Ticketing Services', value: '19' },
  { label: 'Internet Service Providers', value: '20' },
  { label: ' Mobile Phone Services', value: '21' },
  { label: 'Postal and Courier Services', value: '22' },
  { label: 'Hair and Beauty Salons', value: '23' },
  { label: 'Dry Cleaning Services', value: '24' },
  { label: 'Tailoring and Alteration Services', value: '25' },
  { label: 'Landscaping Services', value: '26' },
  { label: 'Catering Services', value: '27' },
  { label: 'Hotel and Accommodation Services', value: '28' },
  { label: ' Travel Agencies', value: '29' },
  { label: 'Tour Guide Services', value: '30' },
  { label: 'Photography and Videography Services', value: '31' },
  { label: 'Event Planning and Coordination', value: '32' },
  { label: 'Electronic Device Repair', value: '33' },
  { label: 'IT Support Services', value: '34' },
  { label: 'Computer Repair Services', value: '35' },
  { label: 'Accounting and Tax Service', value: '36' },
  { label: 'Notary Services', value: '37' },
  { label: 'Education Service', value: '38' },
  { label: 'engineering', value: '39' },
  { label: 'mobile operating', value: '40' },
];

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
]

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');

  const [value, setValue] = useState(null);
  const [serviceLable, setServiceLable] = useState("Select Your Service"); // for printing Label on Screen which select from Dropdown
  const [isFocus, setIsFocus] = useState(false);


  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);

  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);



  const services = [
    
    "Restaurant and Catering Services",
    "Food Delivery Services",
    "Grocery Delivery Services",
    "Ride-sharing Services (e.g., Uber, Lyft)",
    ' Public Transportation',
    'Taxi Services',
    'Massage and Spa Services',
    'Electrical Services',
    'Cleaning Services',
    'Banking Services',
    'Insurance Services',
    'Financial Planning Services',
    'Tutoring Services',
    'Online Learning Platforms',
    'Educational Consulting',
    'Event Planning Services',
    'Streaming Services (e.g., Netflix, Hulu)',
    'Ticketing Services',
    'Internet Service Providers',
    ' Mobile Phone Services',
    'Postal and Courier Services',
    'Hair and Beauty Salons',
    'Dry Cleaning Services',
    'Tailoring and Alteration Services',
    'Construction and Renovation Services',
    'Landscaping Services',
    ' Interior Design Services',
    'Catering Services',
    'Hotel and Accommodation Services',
    ' Travel Agencies',
    'Tour Guide Services',
    'Photography and Videography Services',
    'Event Planning and Coordination',
    'Electronic Device Repair',
    'IT Support Services',
    'Computer Repair Services',
    'Accounting and Tax Service',
    'Notary Services',
    'Education Service',
    'engineering',
    'mobile operating',
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
  }

  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} >
      <View style={styles.FirstContainer} >

        <View style={styles.ServiceConatiner}>

          <Text style={styles.FirstHeadingName}>All SERVICES</Text>
          <Text style={styles.FirstHeadingName}>SERVICES</Text>

          <View style={{ alignItems: 'flex-end', alignContent: "center", alignSelf: 'center', right: 140 }}>
            <TouchableOpacity onPress={() => { setIsModalVisible(true) }}>
              <AntDesign name={'down'} size={20} />
            </TouchableOpacity>
          </View>

          {/* ============================================ */}


          <View>
            <View>
              {
                isModalVisible ?
                  <Modal transparent={true}>
                    <View style={{ backgroundColor: '#bb86fc', padding: 10, height: 100, width: 200, margin: 10, borderRadius: 20, left: 140, top: 100 }}>

                      {/* ======================icon 1 ====================== */}

                      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', flex: 1 }}>
                        <Image source={require('../Assets/service4.png')} style={{ height: 30, width: 30, }} />
                        <Text style={{ fontSize: 17 }}>VIEW/CREATE</Text>
                      </View>
                      {/* ======================icon 2 ====================== */}

                      <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center', top: 10, left: 5 }}>
                        <Image source={require('../Assets/maintain.png')} style={{ height: 22, width: 22, }} />
                        <Text style={{ fontSize: 17 }}>MY SERVICES</Text>
                      </View>

                      <TouchableOpacity onPress={() => { setIsModalVisible(false) }}>
                        <Text>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                  :
                  null
              }

            </View>
          </View>


          {/* =========================================================== */}


        </View>





        <View style={styles.section}>
          {/* <View style={styles.searchContainer}>
            <FontAwesome name={'search'} size={18} />
            <TextInput
              style={styles.searchBar}
              placeholder='Search services...'
              onChangeText={handleSearch}
              value={searchQuery}
              placeholderTextColor={'#6c757d'}
            />

          </View> */}
          <View style={styles.searchContainer}>
          <FontAwesome name={'search'} size={18} />
          <TextInput
           placeholder='Search Services ...'  
           style={styles.searchBar}
           onChangeText={handleSearch}
           value={searchQuery}
           placeholderTextColor={'#6c757d'}

           >
            
           </TextInput>
        </View>

          <ScrollView style={styles.cardContainer} nestedScrollEnabled={true}>
            {filteredServices.map((service, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <Text style={styles.cardText}>{service}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.SecondContainer}>
        <View style={styles.ServiceConatinerTwo}>
          <Text style={styles.FirstHeadingName}>ADD SERVICES</Text>
        </View>


        <View style={styles.warningMSG}>
          <Text style={styles.warningMSGtext}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।
          </Text>

        </View>

        <View style={{ alignItems: 'center' }}>

          <View style={styles.containerDropDown}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: '#008577' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Your Service' : '...'}
              searchPlaceholder="Search..."
              value={value}
              // label = {label}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setServiceLable(item.label); // here i set Label Value then use to print Down
                setIsFocus(false);
              }}

            />
            {/* here i used Label's Data  */}

            {

            }

            <View style={styles.SelectedLabel}>
              <Text style={styles.SelectedLabelTEXT}>{serviceLable}</Text>
            </View>

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
              value={State}
              // label = {label}
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


          <View style={styles.DetailInputBox}>
            <TextInput placeholder='Enter Details' multiline={true} placeholderTextColor={'#6c757d'}>
            </TextInput>
          </View>

          {/* </View>       */}

          <View >
            <TouchableOpacity style={styles.SubmitButton}>
              <Text style={styles.SubmitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
        {/* ====================================================== */}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section: {
    // borderWidth: 2,
    marginBottom: 20,
  },
  searchContainer: {
    // margin: 10, //20
    // flexDirection: 'row',
    borderWidth: 0.5,
    width: 338,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 9,
    borderColor: '#008577',
    marginBottom: 15,
    flex:1

  },
  searchBar: {
    fontSize: 16,
  },
  cardContainer: {
    // borderWidth: 2,
    padding: 10,
    maxHeight: 360, // Adjust this value according to your needs


  },
  card: {
    // borderWidth: 2,
    padding: 22,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#C5E2E6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000'
  },
  cardText: {
    fontSize: 15,
    color: '#0F0F0F',
  },
  ServiceConatiner: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#008577',
    gap: 150,
    flex: 1
  },
  FirstHeadingName: {
    color: '#fff',
    fontSize: 16
  },
  SecondContainer: {
    // borderWidth: 4,
    borderColor: 'blue',
    // margin: 10,
    backgroundColor: '#fff'
  },
  warningMSG: {
    fontSize: 16,
    margin: 10,
  },
  containerDropDown: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 47,
    borderColor: '#008577',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 15,
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
  warningMSGtext: {
    color: '#0F0F0F'
  },
  SelectedLabel: {
    borderWidth: 0.5,
    margin: 5,
    marginTop: 25,
    padding: 9,
    paddingHorizontal: 15,
    backgroundColor: '#e9ecef',
    width: 288,

  },
  SelectedLabelTEXT: {
    fontSize: 15,
    color: '#0F0F0F'
  },
  TextInputMobileONE: {
    borderWidth: 0.5,
    height: 47,
    margin: 5,
    width: 289.8,
    // left: 16,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: '#008577',

  },
  FirstContainer: {
    // borderWidth: 4,
    // borderColor: 'red',
    // margin: 10,
    backgroundColor: '#fff'

  },
  TextInputMobileTwo: {
    borderWidth: 0.5,
    height: 47,
    margin: 5,
    width: 289.8,
    // left: 16,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: "center",
    justifyContent: 'center',
    borderColor: '#008577',


  },
  TextInputExperience: {
    borderWidth: 0.5,
    height: 47,
    margin: 5,
    width: 289.8,
    // left: 16,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: '#008577',



  },
  DetailInputBox: {
    borderWidth: 0.5,
    paddingHorizontal: 15,
    margin: 5,
    width: 289.8,
    height: 90,
    bottom: 15,
    borderRadius: 8,
    borderColor: '#008577',


  },
  SubmitButton: {
    // borderWidth: 1,
    margin: 5,
    borderRadius: 16,
    backgroundColor: '#008577',
    bottom: 6,
    width: 90,
  },
  SubmitButtonText:
  {
    fontSize: 15,
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    alignContent: 'center',
    bottom: 1.1,

  },
  containerDropDown2: {
    backgroundColor: 'white',
    padding: 16,

  },
  containerDropDown3: {
    backgroundColor: 'white',
    padding: 16,
    bottom: 15,
    justifyContent: "center",
    // borderRadius: 8,

  },
  TextInputMobiletext: {
    color: 'red'

  },
  ServiceConatinerTwo: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#008577',

  }
});
