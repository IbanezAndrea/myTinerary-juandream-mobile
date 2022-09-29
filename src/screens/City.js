import { useGetOneCityQuery } from "../features/actions/citiesAPI"
import { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { ImageBackground, ScrollView, Text, View } from "react-native"
// import {useGetCityItinerariesQuery} from "../features/actions/itinerariesAPI"
// import { useSelector } from "react-redux"
import style from "../styles/cityStyles"

export default function City() {
    const route = useRoute()
    const {id} = route.params
    const { data: resCity} = useGetOneCityQuery(id)
    const [city, setCity] = useState({})
    const itineraries = undefined
    useEffect(() => {
        resCity && setCity(resCity)
    }, [resCity])
    const mainBg = {uri: 'https://wallpapercave.com/wp/wp1809587.jpg'}
    return (
        <ImageBackground source={mainBg} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <ScrollView style={style.cityMain}>
            <ImageBackground style={style.cityContainer}>
                {id ?<>
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
                    {itineraries?.length ? null
                        : <Text style={style.citySubtitle}> We don't have any itineraries here right now...</Text>}
                    </View>
                    </>
                    : <View>
                        <Text>Please Select a city before</Text>
                    </View>
                }
            </ImageBackground>
        </ScrollView>
        </ImageBackground>
    )
}
