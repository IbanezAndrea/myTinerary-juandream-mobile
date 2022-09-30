import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, setCredentials} from "../features/user/userSlice"
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

function SignIn() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const actUser = useSelector(state=>state.user.user)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    let [userSignIn] = useUserSignInMutation()
    
    const inputArray =[
        {
            name: "Email",
            onChangeText: value=>setEmail(value),
            placeholder: "Write your email here",
        },
        {
            name: "Password",
            onChangeText: value=>setPassword(value),
            placeholder: "Insert your password",
        }
    ]
    
    async function signUserForm(){
        let data = {
            email,
            password,
            from: "form"
        }
        try {
            let payload = await userSignIn(data).unwrap()
            if (payload) {
                let {token, user} = payload.response
                dispatch(setCredentials(user))
                dispatch(logIn())
                token && await AsyncStorage.setItem("token",token)
                navigation.navigate('Home')
            }
        }catch (err) {
            console.log(err)
        }
    }

const image = { uri: "https://c.wallhere.com/photos/c5/be/Dubai_skyline_city_cityscape-1783753.jpg!d" };

    return (
        <ImageBackground source={image} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <Input inputsData={inputArray} event={signUserForm} />
                <View>
                    <Text>{actUser?.name}!</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default SignIn