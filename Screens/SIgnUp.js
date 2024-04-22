import { useRef, useState } from "react";
import { Button, FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUp = (props) => {
  const [selectedCommunity, setSelectedCommunity] = useState("Select Community");
  const [isClicked, setIsClicked] = useState(false);
  const searchRef = useRef();

  const community = [
    { label: 'Agrawal', value: 'Agrawal' },
    { label: 'Bania', value: 'Bania' },
    { label: 'Muslim', value: 'Muslim' },
    { label: 'Yadav', value: 'Yadav' },
    { label: 'Brahmin', value: 'Brahmin' },
    { label: 'Gujar', value: 'Gujar' },
    { label: 'Ahir', value: 'Ahir' },
    { label: 'Khatris', value: 'Khatris' }
  ];
  const [data, setData] = useState(community);
  const onSearch = (txt) => {

    if (txt !== '') {
      let tempData = data.filter(item => {
        return item.label.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });

      setData(tempData);

    }
    else {

      setData(community)

    }
  }
  return (
    <View style={styles.mainView}>
      {/* <Modal transparent={true}> */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Sign up</Text>
            <TextInput placeholderTextColor={'#adb5bd'} placeholder="Enter your name" style={styles.txtInput1}></TextInput>
            <TextInput placeholderTextColor={'#adb5bd'} placeholder="Enter your mobile Number" style={styles.txtInput2}></TextInput>
            <TouchableOpacity style={styles.dropdown} onPress={() => setIsClicked(!isClicked)}>
              <Text style={styles.dropdownText}> {selectedCommunity} </Text>
              {/* <Image source={isClicked ? require('../Assets/down2.png') : require('../Assets/up.png')} style={styles.icon} /> */}
            </TouchableOpacity>

            {
              isClicked ? <View style={styles.dropdownArea}>

                <TextInput placeholder="Search" style={styles.SearchInput} onChangeText={txt => { onSearch(txt) }} ref={searchRef} />
                <FlatList data={data} renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={styles.communityItem} onPress={() => {
                      setSelectedCommunity(item.label);
                      onSearch('')
                      setIsClicked(false);
                      searchRef.current.clear();
                    }}>
                      <Text>{item.label}</Text>
                    </TouchableOpacity>
                  );
                }} />



              </View>


                : null
            }


            <View style={styles.RegiBtn}>
              <Button color={"#198754"} title="Register" onPress={() => { props.navigation.navigate('Login') }} ></Button>
            </View>
            <View style={{ padding: 5, flexDirection: 'row' }}>

              <Text style={{ fontSize: 16, color: '#212529' }}>Already User ? </Text><TouchableOpacity onPress={() => { props.navigation.navigate('Login') }} ><Text style={{ fontSize: 16, fontStyle: 'italic', color: '#198754' }}>Login</Text></TouchableOpacity>

            </View>

          </View>
        </View>
      {/* </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ced4da',
    flex: 1
  },
  communityItem: {

    width: '82%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
    justifyContent: 'center'

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

  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'left',
    margin: 35
  },
  txtInput1: {
    height: 40,
    borderColor: '#adb5bd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  txtInput2: {
    height: 40,
    borderColor: '#adb5bd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  dropdown: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 283,
    height: 41,
    borderColor: '#adb5bd',
    marginLeft: 1,
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
  dropdownButton: {
    width: '87%',
    height: 53,
    borderWidth: 0.5,
    borderColor: '#adb5bd',
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dropdownButtonText: {
    opacity: 0, // Hide the default button text
  },
  dropdownList: {
    width: '87%',
    marginLeft: 20,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  RegiBtn: {
    margin: 20,
  },

  dropdownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center'
  },
  SearchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    margin: 20,
    paddingLeft: 15
  }
});

export default SignUp;