import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, setCredentials} from "../features/user/userSlice"
import { ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, View } from "react-native";
function SignIn() {
    const emailEl = useRef(null)
    const passwordEl = useRef(null)
    const nameUser = useSelector(state=>state.user.user.name)
    const inputArray =[
        {
            name: "Email",
            ref: emailEl,
            placeholder: "Write your email here",
        },
        {
            name: "Password",
            ref: passwordEl,
            placeholder: "Insert your password",
        }
    ]
    const dispatch = useDispatch()
    let [userSignIn, {data: resSignIn}] = useUserSignInMutation()
    async function signUserForm(){
        let data = {
            email: emailEl.current.value,
            password: passwordEl.current.value,
            from: "form"
        }
        console.log(emailEl.current)
        await userSignIn(data)
        if (resSignIn) {
            let response = resSignIn.response
            dispatch(setCredentials({user:response.user,token:response.token}))
            logIn()
        }
    }
const image = { uri: "https://c.wallhere.com/photos/c5/be/Dubai_skyline_city_cityscape-1783753.jpg!d" };

    return (
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <ScrollView>
            <Input inputsData={inputArray} event={signUserForm} />
            <View>
                <Text>{nameUser}!</Text>
            </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default SignIn