import { View, Text, ScrollView, TextInput, ImageBackground, StyleSheet } from 'react-native'
// import RNPickerSelect from "react-native-picker-select";
import style from "../styles/citiesStyles"
import { useState, useEffect } from "react";
import { useGetAllCitiesQuery, useGetAllCitiesBaseQuery} from '../features/actions/citiesAPI'
import TableList from '../components/TableList';

export default function Cities() {
    const [searchValue, setSearchValue] = useState("")
    const [orderValue, setOrderValue] = useState("none")
    const [selectedCountry, setselectedCountry] = useState("none")
    const [country, setCountry] = useState([])
    let { data: citiesBase, isSuccess } = useGetAllCitiesBaseQuery()

    let { data: cities} = useGetAllCitiesQuery({
        name: searchValue,
        order: orderValue,
        country: selectedCountry,
    })

    useEffect(() => {
        if (isSuccess){
            let dataCountry = new Set(citiesBase.map(city=>city.country.toLowerCase()))
            dataCountry?
            setCountry([...dataCountry])
            : setCountry([])
        }
    }, [citiesBase])

const bgImage = { uri: 'https://wallpapercave.com/wp/wp1809587.jpg'}

return (
    <ImageBackground source={bgImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
    <ScrollView style={styles.citiesPageMain} nestedScrollEnabled={true}>
    <Text style={styles.citiesPageTitle}>Cities</Text>
    <View style={styles.filterdivs}>
        {/* <RNPickerSelect
            style={style.citiesPageOrder}
            // placeholder={{ label: "↩ Select an order", value: "none" }}
            onValueChange={value => setOrderValue(value)}
            items={[
              { label: "a ≫ Z", value: "a-z" },
              { label: "z ≪ A", value: "z-a" },
              { label: "Lower to highest", value: "up" },
              { label: "Highest to lower", value: "down" },
              { label: "Newest to oldest", value: "new" },
              { label: "Oldest to Newest", value: "old" },
            ]} /> */}
        <TextInput
          onChangeText={value => setSearchValue(value)}
          placeholder="Search"
          style={styles.citiesPageSearch}
        />
        {/* <RNPickerSelect
              style={style.citiespageSelect2}
              placeholder={{ label: "Country ↪", value: "none" }}
              onValueChange={value => setselectedCountry(value)}
              items={country?.map(cntry => {
                return { label: cntry, value: cntry }
              })} /> */}
    </View>
    <View>
        <TableList data={cities} />
    </View>
    </ScrollView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({

    citiesPageTitle: {
        color: 'rgb(30, 33, 45)',
        fontSize: 30,
        lineHeight: 60,
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        textAlign: "center",
        },
        citiesPageSearch: {
            fontSize: 20,
            fontFamily: 'sans-serif',
            fontWeight: "bold",
            
        }
})