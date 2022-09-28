import React from 'react'
import { Text, View, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Hero from '../components/Hero'

const image =  { uri: "https://images7.alphacoders.com/110/thumb-1920-1108495.png" };

export default function HomeScreen() {


    return (
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <SafeAreaView>
                    <Hero /> 
                <ScrollView />
            </SafeAreaView>
        </ImageBackground>

    )
}
