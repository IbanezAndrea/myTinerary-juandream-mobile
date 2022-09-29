
import React from 'react'
import { StyleSheet, Image, View, Text} from 'react-native'
import 'react-native-gesture-handler'
import Cities from '../screens/Cities'
import Button from './Button';

const image =  { uri: "https://images7.alphacoders.com/110/thumb-1920-1108495.png" };

export default function Hero() {

    return (
            <View style={styles.container}>
                    <Image source={{
                    uri: "https://my-tinerary-juandream.herokuapp.com/img/logomytinerary.png",
                    }} style={styles.logotype} resizeMode="contain" />
                    <Text style={styles.titleText}>My tinerary</Text>
                    <Text style={styles.text}>find your perfect trip, designed by insiders who know and love their cities!</Text>
                    <Button />
                    
            </View>
        
    )
}

const styles = StyleSheet.create({

    logotype: {
        width: '20%',
        height: 100,
        alignSelf: 'center'
    },
    text: {
        color: '#FAF3E0',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
        },
    titleText: {
        marginTop: 35,
        color: '#FAF3E0',
        fontSize: 38,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    
        },
        container:{
            padding: 8,
            marginTop: 10,
            marginBottom: 10,
        },

    });
    
