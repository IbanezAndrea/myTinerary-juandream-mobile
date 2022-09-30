import Input from "../components/Input";
import { useUserSignUpMutation } from "../features/actions/usersAPI";
import { useRef, useState } from 'react';
import { ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignIn from "./SignIn";

export default function SignUp() {
    const[lastname,setLastname]=useState("")
    const [email,setEmail] = useState("")
    const [country,setCountry] = useState("")
    const [photo,setPhoto] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const navigation = useNavigation()
    let [userSignUp] = useUserSignUpMutation()
    
    const inputArray =[
        
        {
            name: "Name",
            onChangeText: value=>setName(value),
            placeholder: "Write your name here!",
        },
        {
            name: "Last Name",
            onChangeText: value=>setLastname(value),
            placeholder: "Write your last name here!",
        },
        {
            name: "Email",
            onChangeText: value=>setEmail(value),
            placeholder: "Write your email here",
        },
        {
            name: "Country",
            onChangeText: value=>setCountry(value),
            placeholder: "Where are you from?",
        },
        {
            name: "Password",
            onChangeText: value=>setPassword(value),
            placeholder: "Insert your password",
        },
        {
            name: "Photo",
            onChangeText: value=>setPhoto(value),
            placeholder: "Insert the image url",
        },
    ]


    async function signUpUserForm () {
        let data = {
            name,
            lastname,
            email,
            password,
            country,
            photo,
            from: 'form',
            role: 'user'
        } 
        try {
            await userSignUp(data)      
            navigation.navigate('Sign in')
        }  catch (err) {
            console.log(err)
        }
    }
    

    const bgImage = { uri: "https://c.wallhere.com/photos/c5/be/Dubai_skyline_city_cityscape-1783753.jpg!d" };

    return (
        <ImageBackground source={bgImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <ScrollView>
                <Input inputsData={inputArray} event={signUpUserForm} />
            </ScrollView>
        </ImageBackground>
    )
}