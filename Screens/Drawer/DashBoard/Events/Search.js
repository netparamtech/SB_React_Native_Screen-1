import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
export default function Search() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY5LCJjb21tdW5pdHlJZCI6MTEsImlzQWRtaW4iOjAsInBlcm1pc3Npb25JZCI6MTksImlhdCI6MTcyMTIwNzQ4NCwiZXhwIjoxNzIyMDcxNDg0fQ.hTp6Z3i0gqYT1z7kkgOjrkJPx5xk7xdQLW8uBwpGSIU"
    // for State

    const [stateData, setStateData] = useState([]);
    const [selectedStateValue, setSelectedStateValue] = useState('');
    const [selectedStateName, setSelectedStateName] = useState('');
    const [isFocus2, setIsFocus2] = useState(false);

    // for City

    const [cityData, SetCityData] = useState([]);
    const [isFocus3, setIsFocus3] = useState(false);
    const [selectedCityValue, setSelectedCityValue] = useState('');
    const [selectedCityName, setSelectedCityName] = useState('');

    // for SearchBar

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [oldData, setOldData] = useState([]);

    // for Users 
    const [users, SetUsers] = useState([])
    const [allDataFetched, setAllDataFetched] = useState(false);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const handleConfirmDate = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        const formattedDate = `${x1[2]}/${x1[1]}/${x1[0]}`;

        let hours = dt.getHours();
        const minutes = dt.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format, handle midnight as 12

        const formattedTime = `${hours}:${minutes} ${ampm}`;

        return `${formattedDate} ${formattedTime}`;
    };

    // for Users 

    const user = () => {
        axios.get(`https://uat-api.socialbharat.org/api/user/events?searchText=&page=${page}&size=20&state=&city=`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.data.data.events.length === 0) {
                setAllDataFetched(true); // Set allDataFetched to true when no more data is available
            } else {
                SetUsers(prevUsers => [...prevUsers, ...response.data.data.events]);
                setOldData(response.data.data.events);
                setPage(prevPage => prevPage + 1);
            }
            setIsLoading(false);
        })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }
    useEffect(() => {
        user()
    }, [])

    // for States

    useEffect(() => {

        axios.get('https://uat-api.socialbharat.org/api/states/101', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((responce) => { console.log(responce.data.data), setStateData(responce.data.data) })
            .catch((error) => { console.log("Errors are = =", error) })
    }, [])

    const StateDrop = stateData ? stateData.map(states => ({
        label: states.name,
        value: states.id.toString()
    })) : []

    // for Cities

    const GetCities = (StateID) => {
        axios.get(`https://uat-api.socialbharat.org/api/cities/${StateID}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((responce) => { console.log(responce.data.data), SetCityData(responce.data.data) })
            .catch((error) => { console.log("Errors are - ", error) })
    }

    const CityDrop = cityData ? cityData.map(cities => ({
        label: cities.name,
        value: cities.id.toString()
    })) : []


    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        // Calculate the current scroll position as a percentage
        const scrollPosition = contentOffset.y + layoutMeasurement.height; // How much of the content is currently scrolled including visible part
        const totalHeight = contentSize.height;
        const scrolledPercentage = (scrollPosition / totalHeight) * 100;

        // Calculate if the scroll position is close to the bottom
        const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        // Check if the scrolled percentage is greater than or equal to 50% and is close to the bottom
        if (scrolledPercentage >= 100 && isCloseToBottom) {
            if (!isLoading) { // Prevent multiple fetches
                setIsLoading(true); // Start loading when scroll reaches halfway and is close to the bottom
                user(); // Optionally: you can have your fetch logic here or any other action
            }
        }
    };
    return (
        <ScrollView style={styles.mainContainer} onScroll={handleScroll}>
            <View>
                <Text style={styles.Business_info_ContainerTXT}>Search Events</Text>
            </View>
            <View style={styles.BTNcontainer}>
                <TouchableOpacity style={styles.FirstBTNcontainer}>
                    <Text style={styles.BTNtxt}>Post Your Event</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.SecondtBTNcontainer}>
                    <Text style={styles.BTNtxt}>My Events</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.MainSearchContainers}>
                <View style={styles.SearchContainer}>
                    <FontAwesome name={'search'} size={18} />
                    <TextInput placeholder='Search ...' style={styles.searchInput}

                    />
                </View>
                <View style={styles.containerDropDown2}>
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
                        value={selectedStateValue}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}
                        onChange={item => {
                            setIsFocus2(false);
                            setSelectedStateName(item.label);
                            setSelectedStateValue(item.value);
                            GetCities(item.value);

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
                        data={CityDrop}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus3 ? 'Select Your City' : '...'}
                        searchPlaceholder="Search..."
                        value={selectedCityValue}
                        onFocus={() => setIsFocus3(true)}
                        onBlur={() => setIsFocus3(false)}
                        onChange={item => {
                            setIsFocus3(false);
                            setSelectedCityName(item.label);
                            setSelectedCityValue(item.value);
                        }}
                    />
                </View>
            </View>

            <View>
                {users.map((itm, index) => (
                    <View style={styles.CardsContainer} key={index}>
                        {/* {
              itm.business_photos ?
                <Image source={{ uri: itm.photo[0] }} style={styles.imeges} />
                : <Image source={require('../Assets/04.jpg')} style={styles.imeges} />

            } */}
                        {/* <Image source={itm.business_photos ? { uri: itm.photo[0] } : require('../Assets/04.jpg')}  style={styles.imeges} /> */}

                        <Image source={itm.business_photos ? { uri: itm.photo[0] } :
                            require('../../../Assets/04.jpg')} style={styles.imeges} />


                        <View style={styles.businessNameContainer}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.business_name}>{itm.title}</Text>
                            </View>
                        </View>
                        <Text style={styles.PostedBy}>Posted By: {itm.name}</Text>
                        <Text style={styles.Category}> Event For: {itm.event_type}</Text>
                        <Text style={styles.Street}>venue: {itm.venue}</Text>
                        <Text style={styles.city}>City: {itm.city} ({itm.state})</Text>
                        <Text style={styles.contactNumbers}>Start Date: {itm.start_datetime ? handleConfirmDate(itm.start_datetime) : '--'}</Text>
                        <Text style={styles.contactNumbers}>End Date: {itm.end_datetime ? handleConfirmDate(itm.end_datetime) : '--'}</Text>
                        <Text style={styles.description}>{itm.DESCRIPTION}</Text>
                        <TouchableOpacity style={styles.ViewBTNcontainer}>
                            <Text style={styles.ViewBTNtxt}>View</Text>
                        </TouchableOpacity>
                    </View>

                ))}

            </View>
            {/* Loading indicator */}
            {isLoading && <ActivityIndicator size="large" color="#008577" style={styles.loadingIndicator} />}


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Business_info_ContainerTXT: {
        fontSize: 25,
        marginTop: 10,
        backgroundColor: '#e9ecef',
        padding: 5,
        // color: '#fff',
        // paddingHorizontal:15
        textAlign: 'center'
    },
    mainContainer: {
        flex: 1,
        alignContent: 'center',
        padding: 10,
        backgroundColor: '#ffff',
    },
    BTNcontainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        gap: 15

    },
    FirstBTNcontainer: {
        alignItems: 'center',
        padding: 10,
        height: 57,
        width: '50%',
        borderRadius: 10,
        // marginHorizontal: 10,
        backgroundColor: '#198754',
        borderColor: '#ffc107',
    },
    SecondtBTNcontainer: {
        alignItems: 'center',
        padding: 10,
        height: 57,
        borderRadius: 10,
        backgroundColor: '#198754',
        width: '50%',
        borderColor: '#ffc107',

    },
    BTNtxt: {
        fontSize: 20,
        color: '#ffff'
    },
    MainSearchContainers: {
        alignItems: 'center'
    },
    SearchContainer: {
        // borderWidth: 1,
        // width: 289.8,
        width: '93%',
        // margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 10,
        // gap: 9,
        // justifyContent:'space-between',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#008577',
        height: 47,

    },
    containerDropDown2: {
        margin: 10,

    },

    dropdown: {
        height: 47,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        // width: 289.8,
        width: 311,
        // width:'100%',

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
    containerDropDown3: {
        padding: 16,
        bottom: 15,
        justifyContent: "center"
    },
    CardsContainer: {
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
    },
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
    ViewBTNcontainer: {
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        width: '30%',
        backgroundColor: '#198754'
    },
    ViewBTNtxt: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffff'

    }
})
