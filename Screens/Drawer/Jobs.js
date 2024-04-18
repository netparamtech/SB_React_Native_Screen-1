import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo'




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

const Services = [
  { label: 'All', value: 'All' },
  { label: 'PART TIME', value: 'PART TIME' },
  { label: 'FULL TIME', value: 'FULL TIME' },
  { label: 'FREELANCE', value: 'FREELANCE' },
  { label: 'OTHERS', value: 'OTHERS' },
  { label: 'MY JOBS', value: 'MY JOBS' },
  { label: 'APPLIED JOBS', value: 'APPLIED JOBS' },
  { label: 'CREATE JOBS', value: 'CREATE JOBS' },
  { label: 'UPLOAD RESUME', value: 'UPLOAD RESUME' },
  { label: 'CURRENT OPENING', value: 'CURRENT OPENING' },
  { label: 'CONTACT US', value: 'CONTACT US' },
];

const JobApplication = [
  {
    'id': '1',
    'Job_Title': 'SOFTWARE DEVELOPER ',
    'Company_Name': 'Infotrix',
    'Application_Start': 'Sep 08 ,2023',
    'Expire_Date': 'May 08,2024',
    'Sector': 'Private Job',
    'Job_Type': 'Full Time',
    'Company_Address': 'Chaksu,Rajasthan ',
    'Location ': 'Jaipur,Rajasthan',
    'Date': 'Jan 24 2024'
  },
  {
    'id': '2',
    'Job_Title': 'SOFTWARE DEVELOPER',
    'Company_Name ': 'Infotrix',
    'Application_Start': 'Sep 08 ,2023',
    'Expire_Date': 'May 08,2024',
    'Sector': 'Private Job',
    'Job_Type': 'Full Time',
    'Company_Address': 'Chaksu,Rajasthan Jaipur,RajasthanJaipur,Rajasthan',
    'Location ': 'Jaipur,Rajasthan',
    'Date': 'Jan 24 2024'
  }, {
    'id': '3',
    'Job_Title': 'SOFTWARE DEVELOPER',
    'Company_Name ': 'Infotrix',
    'Application_Start': 'Sep 08 ,2023',
    'Expire_Date': 'May 08,2024',
    'Sector': 'Private Job',
    'Job_Type': 'Full Time',
    'Company_Address': 'Chaksu,Rajasthan Jaipur,RajasthanJaipur,RajasthanJaipur,Rajasthan',
    'Location ': 'Jaipur,Rajasthan',
    'Date': 'Jan 24 2024'
  }, {
    'id': '4',
    'Job_Title': 'SOFTWARE DEVELOPER',
    'Company_Name ': 'Infotrix',
    'Application_Start': 'Sep 08 ,2023',
    'Expire_Date': 'May 08,2024',
    'Sector': 'Private Job',
    'Job_Type': 'Full Time',
    'Company_Address': 'Chaksu,Rajasthan Jaipur,RajasthanJaipur,RajasthanJaipur,RajasthanJaipur,Rajasthan',
    'Location ': 'Jaipur,Rajasthan Jaipur,',
    'Date': 'Jan 24 2024'
  }, {
    'id': '5',
    'Job_Title': 'SOFTWARE DEVELOPER',
    'Company_Name ': 'Infotrix',
    'Application_Start': 'Sep 08 ,2023',
    'Expire_Date': 'May 08,2024',
    'Sector': 'Private Job',
    'Job_Type': 'Full Time',
    'Company_Address': 'Chaksu,Rajasthan',
    'Location ': 'Jaipur,Rajasthan Jaipur,RajasthanJaipur,RajasthanJaipur,RajasthanJaipur,RajasthanJaipur,Rajasthan',
    'Date': 'Jan 24 2024'

  },
]

const TableItems =
  [
    {
      'srNo': 1, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },
    {
      'srNo': 2, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },
    {
      'srNo': 3, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },

    {
      'srNo': 4, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },
    {
      'srNo': 5, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },
    {
      'srNo': 6, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },

    {
      'srNo': 7, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },
    {
      'srNo': 8, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    }, {
      'srNo': 9, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    }, {
      'srNo': 10, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    }, {
      'srNo': 11, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    }, {
      'srNo': 12, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    }, {
      'srNo': 13, 'JobRole': "Full Stack", 'CompanyName': 'Infotrix', 'ApplyLink': 'jjjnjfjrjfrjnfrjnfr'
    },
  ];

export default function Jobs() {
  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);

  const [value1, setValue1] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);

  const [serviceLable, setServiceLable] = useState("Select Your Service"); // for printing Label on Screen which select from Dropdown


  const [isCut, setIsCut] = useState(false);

  const HandleServiceChange = (item) => {   // here we create function for when i choose any value from drop-down it will execute its's choosen value's functionality
    setValue1(item.value),
      setServiceLable(item.label),
      setIsFocus1(false)

    if (item.value === 'CURRENT OPENING') {
      setIsCut(true)


    }



  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} >
      <View style={styles.dropdownContainer}>
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

      <View style={styles.dropdownContainer}>
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
          value={value3}
          onFocus={() => setIsFocus3(true)}
          onBlur={() => setIsFocus3(false)}
          onChange={item => {
            setValue3(item.value);
            setIsFocus3(false);
          }}
        />
      </View>



      <View style={styles.dropdownContainer}>
        <Dropdown
          style={[styles.dropdown, isFocus1 && { borderColor: '#008577' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Services}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus1 ? 'Select Job Status' : '...'}
          searchPlaceholder="Search..."
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setValue1(item.value);
            setServiceLable(item.label)
            setIsFocus1(false);
            HandleServiceChange(item) // and here i call that function where in dropdown i choosen value will be send from here 
          }}
        />
      </View>



      {

        (!isFocus1 && serviceLable === 'CURRENT OPENING') && (
          <View>
        {
          isCut ?
            <View>
              <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={() => { setIsCut(false) }}>
                  <Entypo name='circle-with-cross' size={24} />
                </TouchableOpacity>
              </View>

              <View style={{ width: 340, height: 400 }}>
                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>Current Opening</Text>
                </View>

                <ScrollView style={styles.ScrollViews} nestedScrollEnabled={true}>
                  <View style={styles.header}>
                    <Text style={styles.heading}>Sr.No</Text>
                    <Text style={styles.heading}>JOB ROLE</Text>
                    <Text style={styles.heading}>COMPANY NAME</Text>
                    <Text style={styles.heading}>APPLY URL LINK</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <FlatList
                      data={TableItems}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item }) => (
                        <View style={styles.TableDataContainer}>
                          <Text style={styles.TableData}>{item.srNo}</Text>
                          <Text style={styles.TableData}>{item.JobRole}</Text>
                          <Text style={styles.TableData}>{item.CompanyName}</Text>
                          <Text style={styles.TableData}>{item.ApplyLink}</Text>
                        </View>
                      )}
                      nestedScrollEnabled={true}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
            : null
        }
      </View>
        )


      }

      <ScrollView style={styles.MainApplicationCardContainer}>
        {
          JobApplication.map(({ id, Date, Job_Title, Company_Name, Expire_Date, Application_Start, Sector, Job_Type, Company_Address, Location }) => (
            <View key={id} style={styles.ApplicationCard}>
              <View style={styles.DateOnApplication}>
                <Text style={styles.DateTEXT}>{Date}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Job_Title}> Job Title : </Text>
                <Text style={styles.Job_TitleTEXT}>{Job_Title}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Company_Name}>Company Name : </Text>
                <Text style={styles.Company_NameTEXT}> {Company_Name}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Application_Start}>Application Start : </Text>
                <Text style={styles.Application_StartTEXT}>{Application_Start}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Expire_Date}>Expire : </Text>
                <Text style={styles.Expire_DateTEXT}>{Expire_Date}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Sector}>Sector : </Text>
                <Text style={styles.SectorTEXT}>{Sector}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Job_Type}>Job Type : </Text>
                <Text style={styles.Job_TypeTEXT}>{Job_Type}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Company_Address}  >Company Address : </Text>
                <Text style={styles.Company_AddressTEXT} numberOfLines={null}>{Company_Address}</Text>
              </View>

              <View style={styles.Labels}>
                <Text style={styles.Location}>Location : </Text>
                <Text style={styles.LocationTEXT}> {Location}</Text>
              </View>

              <View>
                <TouchableOpacity style={styles.ApplyButton}>
                  <Text style={styles.ApplyButtonTEXT}>Apply</Text>
                </TouchableOpacity>
              </View>


            </View>
          ))
        }

      </ScrollView>



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // borderWidth: 2,

  },
  dropdownContainer: {
    marginVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 47,
    borderColor: '#008577',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 289.8,
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
  menuContainer: {
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'flex-start', // Align menu items to the left
    // paddingLeft:30,
  },
  menuText: {
    paddingVertical: 5,
    fontSize: 15,
    textAlign: 'left',
    padding: 20,
    // margin:1
    color: '#008577'
  },
  headerContainer: {
    backgroundColor: '#008577',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 16,
    color: '#fff'

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 'auto',
    gap: 15,
    backgroundColor: '#008577'

  },
  heading: {
    fontSize: 16,
    padding: 10,
    color: '#fff',
    paddingHorizontal: 13


  },
  tableContainer: {
    borderWidth: 1,
    // paddingHorizontal: 20




  },
  TableDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 'auto',
    gap: 15,
    marginTop: 4,
    // =====
    padding: 22,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#C5E2E6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    // paddingHorizontal: 20

  },
  TableData: {
    fontSize: 17,
    paddingHorizontal: 20

  },
  ScrollViews: {
    // borderWidth: 2,
    // height: 300,
    // margin:10,



  },
  Location: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5
  },
  Company_Address: {
    fontSize: 17,
    color: '#0F0F0F',
    maxWidth: 330,
    flexWrap: 'wrap',


  },
  Job_Type: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5
  },
  Sector: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5
  },
  Expire_Date: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5

  },
  Application_Start: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5
  },
  Company_Name: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5


  },
  Job_Title: {
    fontSize: 17,
    color: '#0F0F0F',
    // padding: 1,
    // margin: 5,


  },
  DateOnApplication: {
    flexDirection: 'row-reverse',
    padding: 8,
    marginBottom: 5,
    bottom: 15,


  },
  DateTEXT: {
    fontSize: 15,
    // color:'#79828a'
    color: '#008577'

  },
  ApplicationCard: {
    // padding: 16,
    // margin: 10,
    // backgroundColor: '#fff',
    // Width: 'auto',
    // height: 'auto',
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
    // elevation: 5,
    // borderRadius: 10,
    // justifyContent: 'center',
    // width: 'auto',
    height: 'auto',
    // borderWidth: 2,
    padding: 16,
    margin: 10,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    maxWidth: 330,
    width: 330,


  },
  MainApplicationCardContainer: {
    //  padding: 10,
    // margin: 10,
    // backgroundColor: '#fff',
    // width: 'auto',
    // height: 'auto',
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
    // elevation: 5,
    // borderRadius: 10,
    // maxWidth:340,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // backgroundColor: '#fff',
    // maxWidth: 340,
    // width:330,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // borderWidth:2
    // paddingHorizontal: 10,


  },
  Job_TitleTEXT: {
    fontSize: 15,
    padding: 1,
    flex: 1


  },
  Company_NameTEXT: {
    fontSize: 15,
    padding: 1,
    flex: 1



  },
  Application_StartTEXT: {
    fontSize: 15,
    padding: 1,
  },
  Expire_DateTEXT: {
    fontSize: 15,
    padding: 1,

  },
  SectorTEXT: {
    fontSize: 15,
    padding: 1,


  },
  Job_TypeTEXT: {
    fontSize: 15,
    padding: 1,



  },
  Company_AddressTEXT: {
    fontSize: 17,
    // color: '#0F0F0F',
    // maxWidth: 330,
    flex: 1


  },
  LocationTEXT: {
    fontSize: 15,


  },
  Labels: {
    flexDirection: 'row',
    padding: 1,
    margin: 5,

  },
  ApplyButton: {
    // borderWidth:2,
    // alignContent:"center",
    alignItems: 'center',
    // alignSelf:'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 9,
    backgroundColor: '#008577',
    elevation: 5,
    top: 10

  },
  ApplyButtonTEXT: {
    fontSize: 20,
    // fontWeight:'600',
    color: '#fff',





  }
});
