import { View, Text, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import style from "../styles/tableListStyles"

export default function TableList(props) {

    const itemView = (item) => {
        return (
            <View
                // to={`/city/${item._id}`}
                style={style.tableListItemContainer} >
                <ImageBackground source={item.photo} resizeMode="cover"
                    style={style.tableListItem}>
                <Text style={style.TableListItemTitle}>{item.city}</Text>
                <Text style={style.TableListItemCountry}>{item.country}</Text>
                </ImageBackground>
            </View>
        )
    }
    return (
        <View style={style.tableListContainer}>
            <FlatList
                data={props.data}
                renderItem={itemView}
                keyExtractor={item => item._id}
            />
        </View>
    )
}