import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react'
import {ImageBackground, StyleSheet, Image, View, Text,Pressable} from 'react-native'
import 'react-native-gesture-handler'
import Cities from '../screens/Cities'

const image =  { uri: "https://images7.alphacoders.com/110/thumb-1920-1108495.png" };

export default function Hero({ navigation }) {

    return (
            <View >
                    <Image source={{
                    uri: "https://my-tinerary-juandream.herokuapp.com/img/logomytinerary.png",
                    }} style={styles.logotype} resizeMode="contain" />
                    <Text style={styles.titleText}>My tineraries</Text>
                    <Text style={styles.text}>Find your perfect trip, designed by insiders who knows and love their cities!</Text>
                    <Pressable style={styles.btn} onPress={ () => navigation.navigate(Cities)}>
                        <Text style={styles.btnText}> Lets go! </Text>
                    </Pressable>
                    
            </View>
        
    )
}

const styles = StyleSheet.create({

    logotype: {
        width: '20%',
        height: 100,
        marginTop: 10,
        alignSelf: 'center'
    },
    text: {
        color: 'rgb(30, 33, 45)',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: 'italic',
        fontFamily: 'sans-serif',
        },
    titleText: {
        color: 'rgb(30, 33, 45)',
        fontSize: 30,
        lineHeight: 60,
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        textAlign: "center",
        },
    btn: {
        borderRadius: 12,
        alignSelf: 'center',
        backgroundColor: 'rgb(30, 33, 45)',
        color: 'rgb(30, 33, 45)',
        margin: 20,
        padding: '2%'
    },
    btnText: {
        color: 'rgb(250, 243, 224)',
        fontSize: 28
    }
    });
    
