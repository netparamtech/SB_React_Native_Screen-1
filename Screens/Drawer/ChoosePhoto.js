import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ChoosePhoto = ({ onImageSelect }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleLaunchImageLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].fileName);

        // Call the onImageSelect callback with the selected image
        //From this we will know that image is selected
        onImageSelect(response.assets[0]);
      }
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 5, padding: 10,borderColor:'#1255'}}>
        <Button title="Choose File" onPress={handleLaunchImageLibrary} color="#008577"/>


        {/* <TouchableOpacity style={{backgroundColor:'#1255'}}>
          <Text style={{fontSize:17,}}>Choose Photo</Text>
        </TouchableOpacity> */}
        <Text style={{ flex: 1, marginLeft: 10, color:'black',fontSize:15 }}>{selectedImage ? selectedImage : 'No file chosen'}</Text>
      </View>

    </View>
  );
};

export default ChoosePhoto;