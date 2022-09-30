import { useNavigation } from "@react-navigation/native";
import { View, Text, Image,Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import style from "../styles/itinerariesStyles";


export default function Itinerary(props) {
    const navigation = useNavigation()
    const itinerary = props.data
    const goToComments = () => {
        navigation.navigate("Comments", {
            id: itinerary._id,
            user: itinerary.user
        })
    }
    return (
        <>
            <ScrollView>
                <View style={style.itinerarycontainer}>
                    <Text style={style.itineraryname}>{itinerary.name}</Text>
                    <Image source={{ uri: itinerary.user?.photo }} style={{ width: 100, borderRadius: 50, height: 100, resizeMode: 'contain', }} />
                    <Text style={style.itinerarytext1}>{itinerary.user.name}</Text>
                    <Text style={style.itinerarytext1}>{itinerary.user.country}</Text>
                    <View style={style.itinerarybody}>
                        <View style={style.itinerarydata}>
                            <Text style={style.itinerarydatap}>{itinerary.likes.length} ❤</Text>
                            <Text style={style.itinerarydatap}>{itinerary.duration}hs</Text>
                        </View>
                        <Text style={{ alignSelf: 'center' }}>{"💸".repeat(itinerary.price)}</Text>
                    </View>
                    <View>
                        <Text style={style.itinerarydescription}>{itinerary.description}</Text>
                    </View>
                    <Pressable style={style.commentsbtn}
                        onPress={goToComments} >
                        <Text style={style.text}>Show Comments</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </>
    )
}
