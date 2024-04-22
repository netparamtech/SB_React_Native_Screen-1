import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./Assets/flag2.png')} style={styles.image}/>
                <Text style={styles.welcomeText}>Welcome To Social Bharat</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            
            <Text style={styles.welcomeText2}>New To Social Bharat ?</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('SignUp')}}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: '#FF9933',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#008374',
        fontSize: 16,
        fontWeight: 'bold',
    },
    welcomeText2:{
        fontSize: 16,
        fontWeight: 'bold',
    }
});
