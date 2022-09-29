import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import style from "../styles/tableListStyles"
export default function TableList(props) {
    const navigation = useNavigation()
    const itemView = (item) => {
        const goToCity = () => {
            navigation.navigate('City', {
                id: item._id
              });
        }
        return (
            <Pressable
                style={style.tableListItemContainer} key={item._id}
                onPress={()=>goToCity()}>
                <ImageBackground source={{uri:item.photo}} resizeMode="cover"
                    style={style.tableListItem}>
                    <Text style={style.tableListItemTitle}>{item.city}</Text>
                    <Text style={style.tableListItemCountry}>{item.country}</Text>
                </ImageBackground>
            </Pressable>
        )
    }
    return (
        <ScrollView>
            <View style={style.tableListContainer}>
            {props.data?.map(itemView)}
            </View>
        </ScrollView>
    )
}