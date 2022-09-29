import React from 'react'
import { Text, View, ScrollView, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import { useGetAllCitiesBaseQuery } from '../features/actions/citiesAPI'

const image =  { uri: "https://images7.alphacoders.com/110/thumb-1920-1108495.png" };

export default function HomeScreen() {
    
    let { data: cities } = useGetAllCitiesBaseQuery()

    return (
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <SafeAreaView>
                <ScrollView>
                    <Hero /> 
                    <Carousel data={cities}/>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>

    )
}

