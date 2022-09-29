import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import style from "../styles/itinerariesStyles";
import Comments from "./Comments";

export default function Itinerary(props) {

    const itinerary = props.data

    return (
    <> 
    <ScrollView>
        <View style={style.itinerarycontainer}>
                <Text style={style.itineraryname}>{itinerary.name}</Text>
                    <Image source={{uri: itinerary.user?.photo}} style={{width: 100,borderRadius:50,height: 100,resizeMode: 'contain', }}/>
                <Text style={style.itinerarytext1}>{itinerary.user.name}</Text>
                <Text style={style.itinerarytext1}>{itinerary.user.country}</Text>
            <View style={style.itinerarybody}>
                <View style={style.itinerarydata}>
                    <Text style={style.itinerarydatap}>{itinerary.likes.length} ❤</Text>
                    <Text style={style.itinerarydatap}>{itinerary.duration}hs</Text>
                </View> 
                    <Text  style={{alignSelf:'center'}}>{"💸".repeat(itinerary.price)}</Text>
                </View>
                <View>
                    <Text style={style.itinerarydescription}>{itinerary.description}</Text>
                </View>
                <Comments itinerary={itinerary._id} userID={itinerary.user}/>
            </View> 
        </ScrollView>
    </>
    )
}
