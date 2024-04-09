import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Views() {

  const User = [
    {
      Email: 'narendra@gmail.com',
      DOB: '02-02-2000',
      MaritalStatus: 'Single',
      Gender: 'Male',
      Commumity: 'Rajput',
      City: 'Jaipur',
      State: 'Rajasthan',
      Occupation: 'Java Developer',
      PhoneNo: '770089444',
      Website: 'www.Portfolio.com'
    }
  ]
  return (

    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.UserProfileNameContainer}>
          <Text style={styles.UserProfileName}>User Profile</Text>
        </View>
        <View style={styles.ImageContainer}>
          {/* <Image source={{ uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/shah_rukh_khan_pathaan_fee-one_one.jpg?VersionId=7z5pUufQFZIdbqfpKR3sJ76mb32vhr4f' }} style={styles.ProfileImage} /> */}
          <Image source={require('../Assets/04.jpg')} style={styles.ProfileImage} />

          {/* <Image source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlgjOnCJ3clAUwmN1SY8TeZPBcSJ2lXZf45xSiKyH7FWhe16rR' }} style={styles.ProfileImage} /> */}
          <Image source={require('../Assets/rajput.png')} style={styles.ProfileImage}resizeMode="contain"  />

        </View>
        <View style={styles.UserNameContainer}>
          <Text style={styles.UserName}>Yash Salave</Text>
        </View>
        <View>
          {
            User.map(({ Email, Gender, City, DOB, Commumity, Occupation, MaritalStatus, State }) => (
              <View key={Email} style={styles.UserDetailContainer}>
                <View style={styles.container}>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Email :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{Email}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>DOB :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{DOB}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Marital Status :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{MaritalStatus}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Gender :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{Gender}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Commumity :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{Commumity}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>City :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{City}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>State :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{State}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Occupation :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{Occupation}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
        <View style={styles.InformationContainers}>
          <View style={styles.InformationContainerHeading}>
            <Text style={styles.HeadingStyles}>Matrimonial info</Text>
          </View>
          <View style={{ padding: 20 }} >
            <Text>No Matrimonial Information Available</Text>
          </View>
        </View>
        <View style={styles.InformationContainers}>
          <View style={styles.InformationContainerHeading}>
            <Text style={styles.HeadingStyles}>Address Info</Text>
          </View>
          <View style={{ padding: 20 }} >
            <Text>No Matrimonial Information Available</Text>
          </View>
        </View>
        <View style={styles.InformationContainers}>
          <View style={styles.InformationContainerHeading}>
            <Text style={styles.HeadingStyles}>Jobs Info</Text>
          </View>
          <View style={{ padding: 20 }} >
            <Text>No Matrimonial Information Available</Text>
          </View>
        </View>
        <View style={styles.InformationContainers}>
          <View style={styles.InformationContainerHeading}>
            <Text style={styles.HeadingStyles}>Education Info</Text>
          </View>
          <View style={{ padding: 20 }} >
            <Text>No Matrimonial Information Available</Text>
          </View>
        </View>


        <View style={styles.InformationContainers}>
          <View style={styles.InformationContainerHeading}>
            <Text style={styles.HeadingStyles}>Bussiness info</Text>
          </View>
          <View style={{ padding: 20 }} >
            <Text>No Matrimonial Information Available</Text>
          </View>
        </View>


        <View style={styles.InformationContainers}>
          <View style={styles.InformationContainerHeading}>
            <Text style={styles.HeadingStyles}>Contacts Info</Text>
          </View>
          <View style={{ padding: 5, }} >
            {
              User.map(({ Email, PhoneNo, Website }) => (
                <View key={Email} style={styles.container}>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Email :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{Email}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Phone No :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{PhoneNo}</Text>
                    </View>
                  </View>
                  <View style={styles.pairContainer}>
                    <View style={styles.NameLabel}>
                      <Text style={styles.Labels}>Website :</Text>
                    </View>
                    <View>
                      <Text style={styles.LabelsValues}>{Website}</Text>
                    </View>
                  </View>
                </View>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
  },
  UserProfileNameContainer: {

  },
  UserProfileName: {
    fontSize: 25,
    padding: 10,
    top: 10,
    color: '#212529'
  },
  ImageContainer: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 40

  },
  ProfileImage: {
    height: 120,
    width: 120,
  },
  UserNameContainer: {
    padding: 10
  },
  UserName: {
    fontSize: 20,
    color: '#212529',
    left: 9,
    top: 18

  },
  LabelsValues: {
    fontSize: 14,
    color: '#212529',
  },
  UserDetailContainer: {
    borderWidth: 0.2,
    padding: 5,
    margin: 15,
    width: 'auto',
    height: 'auto',
    width: 'auto',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
  },
  container: {
    padding: 8,
    marginTop: 16,
  },
  pairContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  NameLabel: {
    width: 120,
  },
  Labels: {
    marginRight: 8,
    fontWeight: 'bold',
    color: '#212529',
  },
  InformationContainerHeading: {
    backgroundColor: 'green',
    padding: 9,

  },
  InformationContainers: {
    margin: 13,
    borderBottomEndRadius: 19,
    height: 'auto',
    width: 'auto',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
    // bottom:10,
  },
  HeadingStyles: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  }
})