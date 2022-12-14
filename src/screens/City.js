import { useGetOneCityQuery } from "../features/actions/citiesAPI"
import { useEffect, useState } from "react"
import { ImageBackground, ScrollView, Text, View } from "react-native"
import {useGetCityItinerariesQuery} from "../features/actions/itinerariesAPI"
// import { useSelector } from "react-redux"
import style from "../styles/cityStyles"
import Itinerary from "../components/Itinerary"

export default function City(props) {
    const { idCity:id } = props
    const { data: resCity} = useGetOneCityQuery(id)
    const { data: resItineraries}= useGetCityItinerariesQuery(id)
    const [city, setCity] = useState({})
    const [itineraries, setItineraries] = useState({})

    useEffect(() => {
        resCity && setCity(resCity)
        resItineraries && setItineraries(resItineraries)
    }, [resCity, resItineraries])

    const mainBg = {uri: 'https://wallpapercave.com/wp/wp1809587.jpg'}
    return (
        <ImageBackground source={mainBg} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <ScrollView style={style.cityMain}>
            {id ?<>
            <ImageBackground style={style.cityContainer}>
            <View style={style.details}>
                <ImageBackground style={style.cityItem} source={{ uri: city.photo }}>
                    <Text style={style.cityItemTitle}>{city.city}</Text>
                </ImageBackground>
                <View style={style.cityPDiv}>
                    <View style={style.cityPInnerdiv}>
                        <Text style={style.cityInnerP}>
                            <Text style={style.cityPSpan}>Country: </Text>
                            {city.country}.
                        </Text>
                        <Text style={style.cityInnerP} >
                            <Text style={style.cityPSpan}>Foundation: </Text> {new Date(city.foundation).getFullYear()}.
                        </Text>
                        <Text style={style.cityInnerP} >
                            <Text style={style.cityPSpan}>Population: </Text> {city.population}.
                        </Text>
                    </View>
                    <Text style={style.cityP}>{city.description}</Text>
                    </View>
                    </View>
                        {itineraries?.length?
                            itineraries.map(itinerary => {
                            return (
                                <Itinerary data={itinerary} key={itinerary._id} />
                                    )
                                })
                            :<Text style={style.citySubtitle}> We don't have any itineraries here right now...</Text> }
        </ImageBackground>
            </> 
        : <View>
        <Text>Please Select a city before</Text>
        </View> }
        </ScrollView>
        </ImageBackground>
    )
}
