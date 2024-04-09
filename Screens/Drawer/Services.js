// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Services() {
//   return (
//     <View>
//       <Text>Services</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})



import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, VirtualizedList } from 'react-native';


const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');



  // Sample data for the list of services
  const services = [
    "Restaurant and Catering Services",
    "Food Delivery Services",
    "Grocery Delivery Services",
    "Ride-sharing Services (e.g., Uber, Lyft)",
    ' Public Transportation',
    '   Taxi Services',
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

    // Add more services here...
  ];

  // Function to handle search query change
  const handleSearch = (text) => {
    setSearchQuery(text);
  }

  // Filter services based on the search query
  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>


      <View style={styles.ServiceConatiner}>




        <Text style={styles.FirstHeadingName}>All SERVICES</Text>
        <Text style={styles.FirstHeadingName}>SERVICES</Text>
      </View>


      <View style={styles.section}>
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder='Search services...'
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>

        {/* List of touchable cards */}
        <ScrollView style={styles.cardContainer} nestedScrollEnabled={true}>
          {filteredServices.map((service, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Text style={styles.cardText}>{service}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.SecondContainer}>



        <View style={styles.ServiceConatiner}>
          <Text style={styles.FirstHeadingName}>ADD SERVICES</Text>
        </View>


        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>

        <View>
            <Dropdown
            
             placeholder='Select Your Service'
             data={data}
             labelField="label"
             valueField="value"
             searchPlaceholder="Search..."
             search


             /> 
        </View>


        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>
        <View>
          <Text style={styles.warningMSG}>अगर आपकी सेवा उपलब्ध नहीं है, तो 'अन्य' (Other) विकल्प चुनें।</Text>
        </View>


      </View>
    </ScrollView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
  },
  section: {
    borderWidth: 2,
    marginBottom: 20,
  },
  searchContainer: {
    margin: 20,
  },
  searchBar: {
    borderWidth: 2,
    height: 40,
    paddingHorizontal: 10,
  },
  cardContainer: {
    borderWidth: 2,
    padding: 10,
    maxHeight: 300, // Adjust this value according to your needs
  },
  card: {
    borderWidth: 2,
    padding: 22,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#C5E2E6',
  },
  cardText: {
    fontSize: 15,
    color: '#0F0F0F',
  },
  ServiceConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#008577',

  },
  FirstHeadingName: {
    color: '#fff',
    fontSize: 16
  },
  SecondContainer: {

  },
  warningMSG: {
    fontSize: 16,
    margin: 10,
    color: '#0F0F0F'
  }
});
