import { View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import style from "../styles/inputStyles"

export default function Input(props) {
    const inputArray = props.inputsData
    const formStructure = (item) =>{
        return (
            <View style={style.formLabel} key={item.name}>
                <Text style={style.formP}>{item.name}</Text>
                <TextInput style={style.formInput} placeholder={item.placeholder} ref={item.ref} defaultValue=""/>
            </View>
        )
    }
    return (
            <View style={style.form}>
                {props.children}
                {inputArray.map(formStructure)}
                <Pressable style={style.formButton}
                    onPress={props.event} >
                    <Text>Send</Text>
                </Pressable>
            </View>
        )
}