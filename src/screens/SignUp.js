import Input from "../components/Input";
import { useUserSignUpMutation } from "../features/actions/usersAPI";
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { ImageBackground, Text, View } from "react-native";

export default function SignUp() {
    const emailEl = useRef(null)
    const passwordEl = useRef(null)
    const nameEl= useRef(null)
    const lastnameEl= useRef(null)
    const countryEl= useRef(null)
    const photoEl= useRef(null)
    const inputArray =[
        
        {
            name: "Name",
            ref: nameEl,
            placeholder: "Write your name here!",
        },
        {
            name: "Lastname",
            ref: lastnameEl,
            placeholder: "Write your last name here!",
        },
        {
            name: "Email",
            ref: emailEl,
            placeholder: "Write your email here",
        },
        {
            name: "Country",
            ref: countryEl,
            placeholder: "Where are you from?",
        },
        {
            name: "Password",
            ref: passwordEl,
            placeholder: "Insert your password",
        },
        {
            name: "Photo",
            ref: photoEl,
            placeholder: "Insert the image url for your profile picture!",

        },
    ]
    const dispatch = useDispatch()
    let [userSignUp, { data: resSignUp, error}] = useUserSignUpMutation()

    async function signUpUserForm (arrayform) {
        let data = {
            name: nameEl.current.value,
            lastname: lastnameEl.current.value,
            email: emailEl.current.value,
            password: passwordEl.current.value,
            from: "form",
            Country: countryEl.current.value,
            Photo: photoEl.current.value,
            role: "user"
        }
        await userSignUp(data)
        if (resSignIn) {
            let response = resSignIn.response
            dispatch(setCredentials({user:response.user,token:response.token}))
            logIn()
        }
        userSignUp(data)
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