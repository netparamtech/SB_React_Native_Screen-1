import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker, { types } from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU"


const Gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
]
const Manglik = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
]
const Education = [
    { label: '10th', value: '10th' },
    { label: '12th', value: '12th' },
    { label: 'Graduation', value: 'Graduation' },
    { label: 'Diploma', value: 'Diploma' },
    { label: 'Post-Graduation', value: 'Post-Graduation' },
];

const Job = [
    { label: 'Government', value: 'Government' },
    { label: 'Private', value: 'Private' },
    { label: 'Engineer', value: 'Engineer' },
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
];

const Brothers = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
];

const Sisters = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
];
const ProfileCreator = [
    { label: 'Self', value: 'Self' },
    { label: 'Brother', value: 'Brother' },
    { label: 'Sister', value: 'Sister' },
    { label: 'Son', value: 'Son' },
    { label: 'Daughter', value: 'Daughter' },
];
export default function Add_Matrimonial() {

    const navigation = useNavigation();

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    const handleConfirmDate = (Date) => {
        const dt = Date
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        const x2 = x1[0] + '/' + x1[1] + '/' + x1[2];
        setSelectedDate(x2);
        setDateSelectPO(x2)

        // console.log(x2)

    }

    const renderLabel4 = () => {
        if (selectSubcastPO || isFocus5) {
            return (
                <Text style={[styles.label, isFocus5 && { color: '#198754' }]}>
                    Subcast
                </Text>
            );
        }
        return null;
    };

    const renderLabel2 = () => {
        if (value3 || isFocus3) {
            return (
                <Text style={[styles.label, isFocus3 && { color: '#198754' }]}>
                    State
                </Text>
            );
        }
        return null;
    };


    const renderLabel3 = () => {
        if (value4 || isFocus4) {
            return (
                <Text style={[styles.label, isFocus4 && { color: '#198754' }]}>
                    City
                </Text>
            );
        }
        return null;
    };

    const renderLabel1 = () => {
        if (genderSelectPO || isFocus1) {
            return (
                <Text style={[styles.label, isFocus1 && { color: '#198754' }]}>
                    Gender
                </Text>
            );
        }
        return null;
    };
    const renderLabel5 = () => {
        if (selectManglikPO || isFocus6) {
            return (
                <Text style={[styles.label, isFocus6 && { color: '#198754' }]}>
                    Manglik
                </Text>
            );
        }
        return null;
    };

    const renderLabel6 = () => {
        if (selectEducationPO || isFocus7) {
            return (
                <Text style={[styles.label, isFocus7 && { color: '#198754' }]}>
                    Select Education
                </Text>
            );
        }
        return null;
    };

    const renderLabel7 = () => {
        if (selectJobProfilePO || isFocus8) {
            return (
                <Text style={[styles.label, isFocus8 && { color: '#198754' }]}>
                    Job
                </Text>
            );
        }
        return null;
    };

    const renderLabel8 = () => {
        if (selectNumberOfBrotherPO || isFocus9) {
            return (
                <Text style={[styles.label, isFocus9 && { color: '#198754' }]}>
                    Number Of Brothers
                </Text>
            );
        }
        return null;
    };

    const renderLabel9 = () => {
        if (selectNumberOfSisterPO || isFocus10) {
            return (
                <Text style={[styles.label, isFocus10 && { color: '#198754' }]}>
                    Number Of Sisters
                </Text>
            );
        }
        return null;
    };
    const renderLabel10 = () => {
        if (forWhomUserPO || isFocus2) {
            return (
                <Text style={[styles.label, isFocus10 && { color: '#198754' }]}>
                    Creator Of Profile
                </Text>
            );
        }
        return null;
    };

    // for post Data value Set
    const [forWhomUserPO, setForWhomUserPO] = useState()
    const [yourNamePO, setYourNamePO] = useState()
    const [fatherNamePO, setFatherNamePO] = useState()
    const [motherNamePO, setMotherNamePO] = useState()
    const [genderSelectPO, setGenderSelectPO] = useState()
    const [dateSelectPO, setDateSelectPO] = useState()
    const [selectStatePO, setSelectStatePO] = useState()
    const [selectCityPO, setSelectCityPO] = useState()
    const [selectSubcastPO, setSelectSubcastPO] = useState()
    const [selectGotraPO, setSelectGotraPO] = useState()
    const [selectMaternalGotraPO, setSelectMaternalGotraPO] = useState()
    const [selectManglikPO, setSelectManglikPO] = useState()
    const [selectEducationPO, setSelectEducationPO] = useState()
    const [selectJobProfilePO, setSelectJobProfilePO] = useState()
    const [selectNumberOfBrotherPO, setSelectNumberOfBrotherPO] = useState()
    const [selectNumberOfSisterPO, setSelectNumberOfSisterPO] = useState()
    const [selectContactNumberPO, setSelectContactNumberPO] = useState()
    const [selectAnnualPackagePO, setSelectAnnualPackagePO] = useState()
    const [selectDetailEducationPO, setSelectDetailEducationPO] = useState()
    const [selectDetailJobPO, setSelectDetailJobPO] = useState()
    const [feetHeightPO, setFeetHeightPO] = useState()
    const [inchesHeightPO, setInchesHeightPO] = useState()
    const [discriptionPO, setDiscriptionPO] = useState()

    // send PDF
    const [sendPDF, setSendPDF] = useState()
    // to check Form is Submitted or not
    const [isSubmitted, setIsSubmitted] = useState(false)



    const [isFocus1, setIsFocus1] = useState(false);
    const [value1, setValue1] = useState(null);

    const [isFocus2, setIsFocus2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [isFocus3, setIsFocus3] = useState(false);
    const [value3, setValue3] = useState(null);

    const [isFocus4, setIsFocus4] = useState(false);
    const [value4, setValue4] = useState(null);

    const [isFocus5, setIsFocus5] = useState(false);
    const [value5, setValue5] = useState(null);
    const [Sdate, setSdate] = useState();
    // for Image Picker
    const [selectedImage, setSelectedImage] = useState(null);


    // for State
    const [stateData, setStateData] = useState([])

    // for City
    const [cityData, setCityData] = useState([])

    // for Subcast
    const [subCastData, setsubCastData] = useState([])


    // for Toast
    const showToast = () => {
        ToastAndroid.show('Photo Selected... !', ToastAndroid.SHORT);
    };

    const showToastSubmit = () => {
        ToastAndroid.show("Form Submitted SuccessFully...!", ToastAndroid.SHORT);
    };
    const showToastNotSubmit = () => {
        ToastAndroid.show("Please Complete Your Form ...!", ToastAndroid.SHORT);
    };

    //for Photo
    const [selectedImageName, setSelectedImageName] = useState();
    const [BusinessPhotos, setBusinessPhotos] = useState([]);

    // for Documen Picker

    const [DocSelectName, setDocSelectName] = useState()
    const [docNotSelectWarn, setDocNotSelectWarn] = useState();
    const [isSelect, setIsSelect] = useState(false);
    const [documentUrl, setDocumentUrl] = useState([])
    const [DOCname, setDOCname] = useState('');

    const [isFocus6, setIsFocus6] = useState(false);
    const [value6, setValue6] = useState(null);

    const [isFocus7, setIsFocus7] = useState(false);
    const [value7, setValue7] = useState(null);

    const [isFocus8, setIsFocus8] = useState(false);
    const [value8, setValue8] = useState(null);

    const [isFocus9, setIsFocus9] = useState(false);
    const [value9, setValue9] = useState(null);

    const [isFocus10, setIsFocus10] = useState(false);
    const [value10, setValue10] = useState(null);

    const [rangeFeet, setRangeFeet] = useState(0)
    const [rangeInches, setRangeInches] = useState(0)

    // for State 

    const FetchStates = () => {
        axios.get('https://uat-api.socialbharat.org/api/states/101',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((responce) => { setStateData(responce.data.data) })
            .catch((error) => { console.error('ERROR is ==', error) })
    }

    useEffect(() => {
        FetchStates()
        FetchSubcast()
    }, [])

    const StateDrops = stateData ? stateData.map((states) => ({
        label: states.name,
        value: states.id.toString()
    }))
        :
        []

    // for City

    const FetchCities = (stateID) => {
        axios.get(`https://uat-api.socialbharat.org/api/cities/${stateID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((responce) => { setCityData(responce.data.data) })
            .catch((error) => { console.log('Error is', error) })
    }

    const cityDrop = cityData ? cityData.map((citites) => ({
        label: citites.name,
        value: citites.id.toString()
    }))
        :
        []

    // for Subcast

    const FetchSubcast = () => {
        axios.get('https://uat-api.socialbharat.org/api/fetch/11/subcasts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((responce) => { setsubCastData(responce.data.data) }
        ).catch((error) => { console.error("Error is ==", error) })
    }

    const SubcastDrop = subCastData ? subCastData.map((Scast) => ({
        label: Scast.subcast,
        value: Scast.subcast_id.toString()
    }))
        :
        []

    // for Photo Picker

    const handleLaunchImageLibrary = () => {
        launchImageLibrary({ mediaType: 'photo', multiple: true }, response => {
            if (!response.didCancel) {
                const selectedImage = response.assets[0];
                setSelectedImageName(selectedImage.uri); // for Image URL we use states
                const formData = new FormData();
                formData.append('images', {
                    uri: response.assets[0].uri,
                    type: response.assets[0].type,
                    name: response.assets[0].fileName,
                });
                // Post the FormData to the API
                postPhoto(formData);
            }
        });
    };
    const postPhoto = (formData) => {
        axios.post('https://uat-api.socialbharat.org/api/upload-multiple-images', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                // console.log(response)
                if (response.status === 200) {
                    const UpPhotos = response.data.data.files
                    if (Array.isArray(UpPhotos)) {
                        setBusinessPhotos(UpPhotos);
                        console.log("Photo Uploaded By API....", UpPhotos)
                    }
                    else {
                        console.log("Error Posting Photo By API")
                    }
                    console.log("pppppppp = ", response.data.data)
                    showToast();
                    //Alert.alert('Photo posted successfully!');
                } else {
                    throw new Error('Error posting photo');
                }
            })
            .catch(error => {
                console.error('Error posting photo:', error);
                Alert.alert('Error posting photo!');
            });
    };

    const handleUpload = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf]
            });
            if (doc) {
                const formData = new FormData();
                formData.append('pdf', {
                    uri: doc.uri,
                    name: doc.name,
                    type: doc.type,
                });
                postDocument(formData);
                // console.log("Name Is == ",doc)
                setDOCname(doc && doc.name)
            } else {
                console.log("No document selected or upload cancelled.");
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User cancelled the upload", err);
            } else {
                console.log(err);
            }
        }
    };

    const postDocument = (formData) => {
        axios.post('https://uat-api.socialbharat.org/api/upload-pdf', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setDocumentUrl(response.data.data.file);
                console.log(response.data.data.file);
            })
            .catch(error => {
                console.log("Error posting document:", error);
            });
    };
    // for POST API

    const PostData = () => {

        console.log('Submit button Clicked')
        const Data = {
            biodata: documentUrl,
            brother_count: selectNumberOfBrotherPO,
            city: selectCityPO,
            contact_number: selectContactNumberPO,
            description: discriptionPO,
            education: selectEducationPO,
            educational_details: selectDetailEducationPO,
            father_name: fatherNamePO,
            height_in_feet: feetHeightPO,
            is_manglik: selectManglikPO,
            job_profile_description: selectJobProfilePO,
            maternal_gotra: selectMaternalGotraPO,
            matrimonial_profile_dob: dateSelectPO,
            matrimonial_profile_gender: genderSelectPO,
            matrimonial_profile_name: yourNamePO,
            matrimonial_profile_occupation: selectJobProfilePO,
            mother_name: motherNamePO,
            paternal_gotra: selectGotraPO,
            profile_created_for: forWhomUserPO,
            proposal_photos: BusinessPhotos,
            salary_package: selectAnnualPackagePO,
            sister_count: selectNumberOfSisterPO,
            state: selectStatePO,
            subcast_id: selectSubcastPO
        }

        console.log("ALl Data IS Here ", Data)

        axios.post('https://uat-api.socialbharat.org/api/profile/create-matrimonial-details', Data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((responce) => {
            if (responce.status === 200) {
                console.log("Posted Data Successfully.....", responce.data)
                // Alert.alert("Form Submitted SuccessFully...!")
                showToastSubmit();
                setIsSubmitted(true)
                // Add_Matrimonial();
            }
            else {
                console.log("Something Went Wrong")
            }
        }).catch(error => {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Error response data:', error.response.data); // This line prints the response body
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                // Request was made but no response was received
                console.error('Error request data:', error.request);
            } else {
                // Something happened in setting up the request
                console.error('Error message:', error.message);
            }
        })
    }

    // After Submit Navigate to Main Page

    const Navigates = () => {
        if(isSubmitted)
       {
           navigation.goBack('Add_Matrimonial');

       }else{
        showToastNotSubmit();
       }
    }

    // for Submit Form
    const SubmitForm = () => {
        Navigates();
        PostData();
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>

            <View style={styles.MainContainer}>
                <View style={styles.Business_info_Container}>
                    <Text style={styles.Business_info_ContainerTXT}>Matrimonial Info</Text>
                </View>

                <View style={styles.FormContainr}>

                    {/* <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Name</Text>
                    </View> */}
                    {renderLabel10()}
                    <Dropdown
                        style={[styles.dropdown, isFocus2 && { borderColor: '#ffc107' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={ProfileCreator}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus2 ? '---For Whom, You Creating a File*---' : '...'}
                        searchPlaceholder="Search..."
                        value={forWhomUserPO}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}


                        renderRightIcon={() => (

                            <TouchableOpacity onPress={() => { setForWhomUserPO(null) }} >
                                {forWhomUserPO ?
                                    <Entypo
                                        style={styles.iconAntDesign}
                                        color={isFocus2 ? 'green' : 'black'}
                                        name="circle-with-cross"
                                        size={20}
                                    />

                                    : null

                                }
                            </TouchableOpacity>
                        )}
                        onChange={item => {
                            setValue2(item.value);
                            setIsFocus2(false);
                            setForWhomUserPO(item.label)
                        }}
                    />
                    <View style={styles.InputBarContainer}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Candidate Name*' placeholderTextColor={'#6c757d'} onChangeText={(text) => setYourNamePO(text)} value={yourNamePO}></TextInput>
                    </View>
                    {/* 
                    <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Father Name</Text>
                    </View> */}
                    <View style={styles.InputBarContainer2}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Father Name*' placeholderTextColor={'#6c757d'} onChangeText={(text) => setFatherNamePO(text)} value={fatherNamePO} ></TextInput>
                    </View>

                    {/* <View style={styles.InputBarNameContainer}>
                        <Text style={styles.InputBarTXT}>Mother Name</Text>
                    </View> */}
                    <View style={styles.InputBarContainer3}>
                        <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Mother Name*' placeholderTextColor={'#6c757d'} onChangeText={(txt) => setMotherNamePO(txt)} value={motherNamePO} ></TextInput>
                    </View>

                    <View style={styles.containerDropDown1}>

                        {renderLabel1(value1, isFocus1)}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus1 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Gender}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus1 ? '---select Gender--- ' : '...'}
                            searchPlaceholder="Search..."
                            value={genderSelectPO}
                            onFocus={() => setIsFocus1(true)}
                            onBlur={() => setIsFocus1(false)}

                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setGenderSelectPO(null) }} >
                                    {genderSelectPO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus1 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}

                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={(item) => {
                                setValue1(item.value),
                                    setIsFocus1(false);
                                setGenderSelectPO(item.label)

                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.InputBarContainer_Date}>
                            <DatePicker
                                mode={"date"}
                                modal
                                open={open}
                                date={date}

                                onConfirm={(date) => {
                                    setOpen(false)

                                    handleConfirmDate(date)
                                    // setDateSelectPO(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                                onDateChange={(date) => setDateSelectPO(date)}

                            />
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='DD--MM--YY*' placeholderTextColor={'#6c757d'}>
                                {selectedDate}

                            </TextInput>
                            {
                                selectedDate ?

                                    <TouchableOpacity onPress={() => { setSelectedDate(null) }}>

                                        {/* date jar selected asel tarch disel naitr logo disnar nai */}

                                        {selectedDate ?
                                            <Entypo
                                                style={styles.iconAntDesigns}
                                                color={isFocus1 ? 'green' : 'black'}
                                                name="circle-with-cross"
                                                size={20}

                                            />

                                            : null

                                        }
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => { [setOpen(true)] }}>
                                        <Text style={styles.CalenderICON}>
                                            <FontAwesome name={'calendar'} size={22} />
                                        </Text>
                                    </TouchableOpacity>
                            }

                            {/* date la clear karnya sathi */}

                            <TouchableOpacity onPress={() => { setSelectedDate(null) }}>

                                {/* date jar selected asel tarch disel naitr logo disnar nai */}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerDropDown3}>
                        {renderLabel2()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus3 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={StateDrops}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus3 ? '---Select State---' : '...'}
                            searchPlaceholder="Search..."
                            value={value3}
                            onFocus={() => setIsFocus3(true)}
                            onBlur={() => setIsFocus3(false)}

                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setValue3(null) }} >
                                    {value3 ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus3 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }
                                </TouchableOpacity>
                            )}

                            onChange={item => {
                                setValue3(item.value);
                                setIsFocus3(false);
                                FetchCities(item.value)
                                setSelectStatePO(item.label)
                            }}

                        />
                    </View>
                    <View style={styles.containerDropDown4}>
                        {renderLabel3()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus4 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={cityDrop}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus4 ? '---Select City---' : '...'}
                            searchPlaceholder="Search..."
                            value={value4}
                            onFocus={() => setIsFocus4(true)}
                            onBlur={() => setIsFocus4(false)}

                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setValue4(null) }} >
                                    {value4 ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus4 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }

                                </TouchableOpacity>
                            )}
                            onChange={item => {
                                setValue4(item.value);
                                setIsFocus4(false);
                                setSelectCityPO(item.label)
                            }}

                        />
                    </View>
                    <View style={styles.containerDropDown5}>
                        {renderLabel4()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus5 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={SubcastDrop}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus5 ? '---Select Subcast---' : '...'}
                            searchPlaceholder="Search..."
                            value={selectSubcastPO}
                            onFocus={() => setIsFocus5(true)}
                            onBlur={() => setIsFocus5(false)}
                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setSelectSubcastPO(null) }} >
                                    {selectSubcastPO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus5 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue5(item.value);
                                setIsFocus5(false);
                                setSelectSubcastPO(item.value)
                            }}

                        />
                    </View>

                    <View>
                        <View style={styles.InputBarContainer_Contacts}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Paternal Gotra' placeholderTextColor={'#6c757d'} onChangeText={(text) => setSelectGotraPO(text)} value={selectGotraPO}></TextInput>
                        </View>
                    </View>
                    <View>
                        <View style={styles.InputBarContainer_Contacts2}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Maternal Gotra' placeholderTextColor={'#6c757d'} onChangeText={(txt) => { setSelectMaternalGotraPO(txt) }} value={selectMaternalGotraPO}  ></TextInput>
                        </View>
                    </View>
                    <View style={styles.containerDropDown5}>
                        {renderLabel5()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus6 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Manglik}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus6 ? '---Select Manglik---' : '...'}
                            searchPlaceholder="Search..."
                            value={selectManglikPO}
                            onFocus={() => setIsFocus6(true)}
                            onBlur={() => setIsFocus6(false)}
                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setSelectManglikPO(null) }} >
                                    {selectManglikPO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus6 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}
                            onChange={item => {
                                setValue6(item.value);
                                setIsFocus6(false);
                                setSelectManglikPO(item.label)
                            }}

                        />
                    </View>
                    <View style={styles.containerDropDown5}>
                        {renderLabel6()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus7 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Education}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus7 ? '---Select Education---' : '...'}
                            searchPlaceholder="Search..."
                            value={selectEducationPO}
                            onFocus={() => setIsFocus7(true)}
                            onBlur={() => setIsFocus7(false)}
                            renderRightIcon={() => (
                                <TouchableOpacity onPress={() => { setSelectEducationPO(null) }} >
                                    {selectEducationPO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus7 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }

                                </TouchableOpacity>
                            )}

                            onChange={item => {
                                setValue7(item.value);
                                setIsFocus7(false);
                                setSelectEducationPO(item.label)
                            }}
                        />
                    </View>
                    <View style={styles.containerDropDown5}>
                        {renderLabel7()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus8 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Job}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus8 ? '---Select Job Profile---' : '...'}
                            searchPlaceholder="Search..."
                            value={selectJobProfilePO}
                            onFocus={() => setIsFocus8(true)}
                            onBlur={() => setIsFocus8(false)}


                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setSelectJobProfilePO(null) }} >
                                    {selectJobProfilePO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus8 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue8(item.value);
                                setIsFocus8(false);
                                setSelectJobProfilePO(item.label)
                            }}

                        />
                    </View>
                    <View style={styles.containerDropDown5}>
                        {renderLabel8()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus9 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Brothers}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus9 ? 'Select Number Of Brothers...' : '...'}
                            searchPlaceholder="Search..."
                            value={selectNumberOfBrotherPO}
                            onFocus={() => setIsFocus9(true)}
                            onBlur={() => setIsFocus9(false)}


                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setSelectNumberOfBrotherPO(null) }} >
                                    {selectNumberOfBrotherPO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus9 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue9(item.value);
                                setIsFocus9(false);
                                setSelectNumberOfBrotherPO(item.label)
                            }}

                        />
                    </View>
                    <View style={styles.containerDropDown5}>
                        {renderLabel9()}

                        {/* call kela */}

                        <Dropdown
                            style={[styles.dropdown, isFocus10 && { borderColor: '#ffc107' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={Sisters}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus9 ? 'Select Number Of Sisters...' : '...'}
                            searchPlaceholder="Search..."
                            value={selectNumberOfSisterPO}
                            onFocus={() => setIsFocus10(true)}
                            onBlur={() => setIsFocus10(false)}


                            renderRightIcon={() => (

                                <TouchableOpacity onPress={() => { setSelectNumberOfSisterPO(null) }} >
                                    {selectNumberOfSisterPO ?
                                        <Entypo
                                            style={styles.iconAntDesign}
                                            color={isFocus9 ? 'green' : 'black'}
                                            name="circle-with-cross"
                                            size={20}
                                        />

                                        : null

                                    }


                                </TouchableOpacity>

                            )}

                            onChange={item => {
                                setValue10(item.value);
                                setIsFocus10(false);
                                setSelectNumberOfSisterPO(item.label)
                            }}

                        />
                    </View>
                    <View>
                        {/* <View style={styles.InputBarNameContainer_Bussiness_Email}>
                            <Text style={styles.InputBarTXT_Bussiness_Email} >Annual Package</Text>
                        </View> */}
                        <View style={styles.InputBarContainer_Email}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Contact Number' placeholderTextColor={'#6c757d'} onChangeText={(text) => setSelectContactNumberPO(text)} value={selectContactNumberPO}></TextInput>
                        </View>
                        <View style={styles.InputBarContainer_Email}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Annual Package' placeholderTextColor={'#6c757d'} onChangeText={(text) => setSelectAnnualPackagePO(text)} value={selectAnnualPackagePO}></TextInput>
                        </View>
                    </View>
                    <View>
                        <View style={styles.InputBarNameContainer_Business_Website}>
                            <Text style={styles.InputBarTXT_Business_Website} >Educational Details</Text>
                        </View>
                        <View style={styles.InputBarContainer_Business_Website}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Educational Details' placeholderTextColor={'#6c757d'} onChangeText={(text) => { setSelectDetailEducationPO(text) }} value={selectDetailEducationPO} ></TextInput>
                        </View>
                    </View>
                    <View>
                        <View style={styles.InputBarNameContainer_Description}>
                            <Text style={styles.InputBarTXT_Description} >Job Description</Text>
                        </View>
                        <View style={styles.InputBarContainer_Description}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Job Details' placeholderTextColor={'#6c757d'} onChangeText={(text) => { setSelectDetailJobPO(text) }} value={selectDetailJobPO}></TextInput>
                        </View>
                    </View>
                    <View style={styles.FeetTXTContainer}>
                        <Text style={styles.FeetTXT}>Feet : </Text>
                    </View>
                    <View style={styles.SlideContainer}>
                        <Slider
                            style={styles.SlideFIRST}
                            onValueChange={(itm) => { setRangeFeet(itm), setFeetHeightPO(itm) }}
                            minimumValue={0}
                            maximumValue={15}
                            thumbTintColor='orange'

                        />
                        <View>
                            <Text style={styles.SliderRange}>{Math.floor(rangeFeet * 1)}</Text>
                        </View>
                    </View>
                    <View style={styles.FeetTXTContainer}>
                        <Text style={styles.InchesTXT}>Inches : </Text>
                    </View>
                    <View style={styles.SlideContainer}>
                        <Slider
                            style={styles.SlideSECOND}
                            onValueChange={(itm) => { setRangeInches(itm), setInchesHeightPO(itm) }}
                            minimumValue={0}
                            maximumValue={12}
                            thumbTintColor='orange'
                        />
                        <View>
                            <Text style={styles.SliderRange}>{Math.floor(rangeInches * 1)}</Text>
                        </View>
                    </View>
                    <View style={styles.PersonalPHOTOcontainer}>
                        <View >
                            <Text style={styles.PersonalPHOTO_text}>Proposal Photo</Text>
                            <Text>Add atleast 2 and maximum 5 photos(should be in png, jpg, jpeg format)</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.ChoosePhototContainer}>
                                <Button title="Choose File" onPress={handleLaunchImageLibrary} color="" />
                                <Image source={{ uri: selectedImageName }} style={styles.SelectedIMG} />
                                <Text style={{ flex: 1, marginLeft: 10, color: 'black', fontSize: 15 }}>{selectedImageName === null && 'No file choosen'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.PersonalPHOTOcontainer}>
                        <View >
                            <Text style={styles.PersonalBiodata_text}>Biodata</Text>
                            <Text>(upload biodata in pdf format only)</Text>
                        </View>
                        <View style={styles.ChoosePhototContainer}>
                            <Button title="Choose File" onPress={handleUpload} color="" />
                            <Text style={{ flex: 1, marginLeft: 5, color: '#008577', fontSize: 15 }}>{DOCname}</Text>

                        </View>
                    </View>

                    <View>
                        <View style={styles.InputBarContainer_DetailsIFany}>
                            <TextInput style={styles.InputBarPlaceHolder} placeholder='Enter Other Details if Any' placeholderTextColor={'#6c757d'} onChangeText={(item) => { setDiscriptionPO(item) }} value={discriptionPO}></TextInput>
                        </View>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.SubmitButton} onPress={SubmitForm}>
                            <Text style={styles.SubmitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    PersonalPHOTOcontainer: {
        paddingVertical: 5
    },
    PersonalBiodata_text: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000',
        marginTop: 15,
    },
    PersonalPHOTO_text: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000',
        marginTop: 10,
    },
    SliderRange: {
        fontSize: 23,
        color: 'orange',
        bottom: 10

    },
    SlideContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    FeetTXT: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000',
        marginTop: 10
    },
    InchesTXT: {
        fontSize: 18,
        // margin: 10,
        // top:10,
        color: '#000'
    },
    FeetTXTContainer: {
    },
    SlideFIRST: {
        height: 50,
        width: 260,
        bottom: 10
    },
    SlideSECOND: {
        height: 50,
        width: 260,
        bottom: 10
    },
    MainContainer: {
        flex: 1,
        padding: 15,
        margin: 15,
        backgroundColor: '#fff', // Ensure there's a background color, as shadows won't be visible without it

        // Common style for both platforms
        borderRadius: 8, // Optional: if you want rounded corners

        // Shadow properties for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Shadow direction: down
        shadowOpacity: 0.1,
        shadowRadius: 8,

        // Shadow property for Android
        elevation: 5, // Increase this value to increase shadow
    },
    Business_info_Container: {
        justifyContent: 'center',
        paddingBottom: 16

    },
    Business_info_ContainerTXT: {
        fontSize: 25,
        marginTop: 10,
        backgroundColor: '#e9ecef',
        padding: 5,
        // color: '#fff',
        // paddingHorizontal:15
        textAlign: 'center'

    },
    InputBarTXT: {
        fontSize: 20,
        color: '#000',
        marginTop: 18,
        top: 5 // latest closeness to inputbar
    },
    InputBarTXT_Contacts2: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    InputBarTXT_Contacts3: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    InputBarTXT_Bussiness_Email: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    InputBarTXT_Contacts: {
        

        fontSize: 20,
        color: '#000',
        // marginTop:10
        top: 5 // latest closeness to inputbar


    },
    InputBarPlaceHolder: {
        justifyContent: 'center',
        paddingHorizontal: 15,


    },
    InputBarNameContainer_TWO: {
        marginBottom: 8,
        // marginBottom: 15,


    },
    InputBarNameContainer_Three: {
        marginTop: 5

    },
    InputBarNameContainer: {
        // marginTop: 18,

    },
    iconAntDesigns: {
        left: 70,

    },
    InputBarContainer: {
        // height: 45,
        // marginTop: 5,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 18,
        borderColor: 'gray',
        borderWidth: 0.5,

    },
    InputBarContainer2: {
        // height: 45,
        // marginTop: 5,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        // marginTop: 18,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 5,


    }, InputBarContainer3: {
        // height: 45,
        // marginTop: 5,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        // marginTop: 18,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 5,


    },
    InputBarContainer_Street: {
        borderWidth: 1,
        height: 45,
        borderWidth: 0.5,
        borderRadius: 8,

    },
    InputBarContainer_Contacts: {
        
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarContainer_Date: {
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "space-between",
        justifyContent: "space-between"

    },
    CalenderICON: {
        left: 70,
        color: 'green'
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
        color: '#6c757d'
    },
    selectedTextStyle: {
        fontSize: 16,
        paddingHorizontal: 9,
        color: '#0F0F0F'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    containerDropDown1: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarTXT_two: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        top: 1 // latest closeness to inputbar

    },
    InputBarTXT_three: {
        fontSize: 20,
        color: '#000',
        // marginTop:10
        top: 5 // latest closeness to inputbar

    },
    InputBarNameContainer_Six: {
        marginTop: 5,

    },
    InputBarNameContainer_Bussiness_Email: {
        marginTop: 5,

    },
    InputBarNameContainer_Five: {
        marginTop: 5,

    },
    InputBarNameContainer_Four: {
        marginBottom: 5
    },
    InputBarTXT_five: {
        // marginTop: 15,
        fontSize: 20,
        color: '#000',
        top: 1 // latest closeness to inputbar
    },
    InputBarTXT_four: {
        // marginTop: 15,
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar
    },
    InputBarTXT_six: {
        //  marginBottom: 15,
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        top: 1 // latest closeness to inputbar


    },
    containerDropDown2: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,


    },
    containerDropDown3: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    containerDropDown4: {

        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Contacts3: {
        borderWidth: 1,
        height: 45,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Contacts2: {
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarTXT_SIX: {
        fontSize: 20,
        color: '#000',
        top: 5 // latest closeness to inputbar

    },
    containerDropDown5: {
        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarTXT_Business_Website: {
        fontSize: 20,
        color: '#000',
    },
    InputBarNameContainer_Business_Website: {
        marginTop: 5,

    },
    InputBarNameContainer_Description: {
        marginTop: 5,

    },
    InputBarTXT_Description: {
        fontSize: 20,
        color: '#000',
    },
    InputBarContainer_Description:
    {
        height: 120,
        // marginTop: 5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarContainer_DetailsIFany:
    {
        borderWidth: 1,
        height: 120,
        // marginTop: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginVertical: 22,
        borderColor: '#FF9933'
    },
    InputBarContainer_Email: {
    
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    InputBarTXT_Google_Map: {
        fontSize: 20,
        color: '#000',
    },
    InputBarNameContainer_Google_Map: {
        marginTop: 5,

    },
    InputBarContainer_Google_Map:
    {
        borderWidth: 1,
        height: 120,
        borderWidth: 0.5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
    },
    InputBarContainer_Business_Website: {
        // borderWidth: 1,
        height: 120,
        // marginTop: 5,
        borderRadius: 8,
        // marginVertical:10
        marginBottom: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    SubmitButton: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 16,
        backgroundColor: '#008577',
        bottom: 6,
        width: 90,
        alignSelf: 'center',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Shadow direction: down
        shadowOpacity: 0.1,
        shadowRadius: 8,

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
    containerDrops: {
        // flexGrow: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 1,
        alignSelf: 'center',
        padding: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',   /// new changes
        left: 22,
        // top: 0.4,
        top: -10,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 10  // new chnges
    },
    ChoosePhototContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#1255',
        borderRadius: 10,
        gap: 7
    },
    SelectedIMG: {
        height: 50,
        width: 50,
        borderRadius: 7

    },
})
