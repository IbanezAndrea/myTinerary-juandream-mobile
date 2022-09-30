import React, { useEffect, useState } from "react";
import { useGetItinerariesUsersMutation } from "../features/actions/itinerariesAPI";
import { useSelector } from "react-redux";
import { View,Text, ScrollView, ImageBackground, Pressable } from "react-native";
import Itinerary from "../components/Itinerary"
import HomeScreen from "./HomeScreen"
import style from "../styles/itinerariesStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function MyTineraries({navigation}) {
    const user = useSelector(state => state.user.user)
    const [itineraries, setItineraries] = useState([])
    const mainBg = {uri: 'https://wallpaperaccess.com/full/222675.jpg'}
    //console.log(props.state)
    const [getItinerariesUsers,{
        data: resItineraries,
        isSuccess
    }] = useGetItinerariesUsersMutation()
       /// console.log(itineraries)
        useEffect(() => {
            if (user){
                AsyncStorage.getItem('token')
                .then( token => getItinerariesUsers(token)
                )
                
            }
        },[ user])

        useEffect(() => {
            if (isSuccess) {
                setItineraries(resItineraries)
            }
        },[resItineraries])

        // const pressBtn = () => { 
        //     navigation.navigate('Home')
        // }
            // <Text style={style.mytinerariestitle}>My Tineraries</Text>
            // <Pressable style={style.gohomebtn} onPress={pressBtn} >
            // <Text style={style.btntext}>Back to Home</Text>
            //</Pressable> 
            // {itineraries.length ? 
            //     itineraries.map(itinerary => {
            //     return (
            //         <Itinerary data={itinerary} key={itinerary._id} />
            //         )
            //     })
            // :

    return (
    <ImageBackground source={mainBg} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <ScrollView>
        {itineraries.length ? 
                itineraries.map(itinerary => {
                return (
                    <Itinerary data={itinerary} key={itinerary._id} />
                    )
                })
            :
                <View>
                    <Text style={style.noitinerariestext}>There are no itineraries here...</Text>
                </View>}
        </ScrollView>
    </ImageBackground>
    )
}
