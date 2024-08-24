import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Address_info() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMjA4MjAxOSwiZXhwIjoxNzIyOTQ2MDE5fQ._3mbp0_zUOvWQQycYlKe5RnOrAuEKGBtmhTL0FaiKpc';

  const AddressType = [
    {label: 'Permanent', value: 'Permanent'},
    {label: 'Current', value: 'Current'},
  ];
  const Gender = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const [stateDada, setStateData] = useState([]);
  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);
  const [stateSelectedValue, setStateSelectedValue] = useState();
  const [stateSelectedName, setstateSelectedName] = useState();

  const [cityData, setCityData] = useState([]);
  const [citySelectedName, setCitySelectedName] = useState();
  const [citySelectedValue, setCitySelectedValue] = useState();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [value4, setValue4] = useState(null);
  const [isFocus4, setIsFocus4] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#198754'}]}>
          Address
        </Text>
      );
    }
    return null;
  };
  const renderLabe4 = () => {
    if (value4 || isFocus4) {
      return (
        <Text style={[styles.label, isFocus4 && {color: '#198754'}]}>
          Country
        </Text>
      );
    }
    return null;
  };
  const fetchState = () => {
    axios
      .get('https://uat-api.socialbharat.org/api/states/101', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        // console.log(response.data.data);
        setStateData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchSubcast = () => {
    axios
      .get('https://uat-api.socialbharat.org/api/fetch/11/subcasts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        // console.log("--------------------")
        // console.log(response.data.data)
        // console.log("--------------------")
        setSubcastData(response.data.data);
      })
      .catch(error => {
        console.log('--------------------');
        console.log('Error is = ', error);
      });
  };

  const StateDrop = stateDada
    ? stateDada.map(states => ({
        label: states.name,
        value: states.id.toString(),
      }))
    : [];

  useEffect(() => {
    fetchState();
    fetchSubcast();
  }, []);

  const GetCities = async stateID => {
    try {
      const response = await axios.get(
        `https://uat-api.socialbharat.org/api/cities/${stateID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(response.data.data);
      setCityData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CityDrop = cityData
    ? cityData.map(city => ({
        label: city.name,
        value: city.id.toString(),
      }))
    : [];

  return (
    <View style={styles.MainContainer}>
      <View style={styles.AddressContainer}>
        <View style={styles.HeadingContainer}>
          <Text style={styles.Heading}>Address</Text>
        </View>
        <View>
          {/* <View style={styles.InputHeadingContainer}>
            <Text style={styles.InputHeadingTXT}>Address Type</Text>
          </View> */}

          <View style={styles.container}>
            {renderLabel(value, isFocus)}
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: '#ffc107'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={AddressType}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Address Type' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              renderRightIcon={() => (
                <TouchableOpacity
                  onPress={() => {
                    setValue(null);
                  }}>
                  {value ? (
                    <Entypo
                      style={styles.iconAntDesign}
                      color={isFocus ? 'green' : 'black'}
                      name="circle-with-cross"
                      size={20}
                    />
                  ) : null}
                </TouchableOpacity>
              )}
              onChange={item => {
                setValue(item.value), setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.container}>
            {renderLabe4(value4, isFocus4)}
            <Dropdown
              style={[styles.dropdown, isFocus4 && {borderColor: '#ffc107'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Gender}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus4 ? 'select Gender ' : '...'}
              searchPlaceholder="Search..."
              value={value4}
              onFocus={() => setIsFocus4(true)}
              onBlur={() => setIsFocus4(false)}
              renderRightIcon={() => (
                <TouchableOpacity
                  onPress={() => {
                    setValue4(null);
                  }}>
                  {value4 ? (
                    <Entypo
                      style={styles.iconAntDesign}
                      color={isFocus4 ? 'green' : 'black'}
                      name="circle-with-cross"
                      size={20}
                    />
                  ) : null}
                </TouchableOpacity>
              )}
              onChange={item => {
                setValue4(item.value), setIsFocus4(false);
              }}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.containerDropDown3}>
              <Dropdown
                style={[styles.dropdown, isFocus3 && {borderColor: '#ffc107'}]}
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
                  <TouchableOpacity onPress={() => setStateSelectedValue(null)}>
                    {stateSelectedValue ? (
                      <Entypo
                        style={styles.iconAntDesign}
                        color={isFocus3 ? 'green' : 'black'}
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
                style={[styles.dropdown, isFocus2 && {borderColor: '#ffc107'}]}
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
              <TextInput
                placeholder="Enter Address Line ..."
                style={styles.search}
              />
            </View>
            <TouchableOpacity style={styles.BTNcontainer}>
              <Text style={styles.BTNtxt}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadingContainer: {
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
    marginBottom: 16,
  },
  // InputHeadingContainer: {
  //   paddingHorizontal: 13,
  // },
  Heading: {
    fontSize: 30,
    color: '#ffff',
  },

  MainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  AddressContainer: {
    borderWidth: 0.4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  // InputHeadingTXT: {
  //   fontSize: 16,
  //   color: '#333',
  // },
  container: {
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

  label: {
    position: 'absolute',
    backgroundColor: 'white', /// new changes
    left: 22,
    top: 0.4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    borderRadius: 10, // new chnges
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
  search: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    fontSize: 16,
  },
  SearchContainer: {
    marginTop: 9,
  },
  BTNcontainer: {
    alignSelf: 'center',
    padding: 10,
    marginTop: 19,
    backgroundColor: '',
  },
  BTNtxt: {
    fontSize: 18,
    color: '#ffff',
  },
  BTNtxt: {
    backgroundColor: '#198754',
    fontSize: 16,
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    color: '#ffff',
  },
});
