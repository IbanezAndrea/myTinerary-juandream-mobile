import { View, Text, ImageBackground } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import style from "../styles/tableListStyles"
export default function TableList(props) {

    const itemView = (item) => {
        return (
            <View // to={`/city/${item._id}`}
                style={style.tableListItemContainer} key={item._id}>
                <ImageBackground source={{uri:item.photo}} resizeMode="cover"
                    style={style.tableListItem}>
                    <Text style={style.tableListItemTitle}>{item.city}</Text>
                    <Text style={style.tableListItemCountry}>{item.country}</Text>
                </ImageBackground>
            </View>
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