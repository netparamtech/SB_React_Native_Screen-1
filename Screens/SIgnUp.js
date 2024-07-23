import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

const SignUp = props => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU';
  const [isFocus7, setIsFocus7] = useState(false);
  const [value7, setValue7] = useState(null);
  const [data, setData] = useState([]);

  const renderLabel6 = () => {
    if (value7 || isFocus7) {
      return (
        <Text style={[styles.label, isFocus7 && {color: '#198754'}]}>
          JOB Selector
        </Text>
      );
    }
    return null;
  };
  const FetchCast = () => {
    axios
      .get('https://uat-api.socialbharat.org/api/all-active-communities', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log('Error is = ', error);
      });
  };

  const CastDropDown = data
    ? data.map(cast => ({
        label: cast.name,
        value: cast.id.toString(),
      }))
    : [];

  useEffect(() => {
    FetchCast();
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Sign up</Text>
          <TextInput
            placeholderTextColor={'#adb5bd'}
            placeholder="Enter your name"
            style={styles.txtInput1}></TextInput>
          <TextInput
            placeholderTextColor={'#adb5bd'}
            placeholder="Enter your mobile Number"
            style={styles.txtInput2}></TextInput>

          <View style={styles.containerDropDown5}>
            {renderLabel6()}
            <Dropdown
              style={[styles.dropdown, isFocus7 && {borderColor: '#ffc107'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={CastDropDown}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus7 ? '--Select Community--' : '...'}
              searchPlaceholder="Search..."
              value={value7}
              onFocus={() => setIsFocus7(true)}
              onBlur={() => setIsFocus7(false)}
              renderRightIcon={() => (
                <TouchableOpacity
                  onPress={() => {
                    setValue7(null);
                  }}>
                  {value7 ? (
                    <Entypo
                      style={styles.iconAntDesign}
                      color={isFocus7 ? 'green' : 'black'}
                      name="circle-with-cross"
                      size={20}
                    />
                  ) : null}
                </TouchableOpacity>
              )}
              onChange={item => {
                setValue7(item.value);
                setIsFocus7(false);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.RegiBtn}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.RegiBtnTXT}>REGISTER</Text>
          </TouchableOpacity>
          <View style={{padding: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 16, color: '#212529'}}>
              Already User ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Text
                style={{fontSize: 16, fontStyle: 'italic', color: '#198754'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              padding: 5,
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, color: '#212529'}}>
              If you encounter any issues during the registration process,
              please
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Login');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    // fontStyle: 'italic',
                    color: '#198754',
                    borderWidth: 1,
                  }}>
                  {' '}
                  click{' '}
                </Text>
              </TouchableOpacity>
              here for assistance with your queries.{' '}
            </Text>
            {/* <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Text
                style={{fontSize: 16, fontStyle: 'italic', color: '#198754'}}>
                Login
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ced4da',
    flex: 1,
    alignItems: 'center',
  },
  communityItem: {
    width: '82%',
    height: 41,
    borderBottomWidth: 1,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    margin: 17,
    width: 350,
    height: 500,
  },
  title: {
    fontSize: 30,
    color: '#333',
    padding: 12,
  },
  txtInput1: {
    height: 46,
    borderWidth: 1.1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#adb5bd',
  },
  txtInput2: {
    height: 46,
    borderWidth: 1.1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#adb5bd',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 283,
    height: 39,
    borderColor: '#adb5bd',
    // marginLeft: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1.1,
    marginBottom: 20,
  },
  dropdownText: {
    opacity: 0.7,
  },
  icon: {
    height: 20,
    width: 20,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  RegiBtn: {
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#198754',
  },
  RegiBtnTXT: {
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
    color: '#ffff',
  },

  dropdownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
  },
  SearchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    margin: 20,
    paddingLeft: 15,
  },
  containerDropDown5: {
    height: 45,
    marginBottom: 15,
    marginTop: 5,
  },
  dropdown: {
    height: 47,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    width: 'auto',
  },
  placeholderStyle: {
    fontSize: 15,
    color: '#6c757d',
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingHorizontal: 9,
    color: '#0F0F0F',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#6c757d',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default SignUp;
