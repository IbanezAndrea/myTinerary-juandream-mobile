import Input from "../components/Input";
import { useUserSignUpMutation } from "../features/actions/usersAPI";
import { useRef, useState } from 'react';
import { ImageBackground, ScrollView } from "react-native";

export default function SignUp() {
    const emailEl = useRef(null)
    const passwordEl = useRef(null)
    const nameEl= useRef(null)
    const lastnameEl= useRef(null)
    const countryEl= useRef(null)
    const photoEl= useRef(null)
    
    let [userSignUp] = useUserSignUpMutation()
    
    const inputArray =[
        
        {
            name: "Name",
            ref: nameEl,
            placeholder: "Write your name here!",
        },
        {
            name: "Last Name",
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
            placeholder: "Insert the image url",

        },
    ]


    const [userBody, setUserBody] = useState({
        name: " ",
        lastname: " ",
        email: " ",
        password: " ",
        country: " ",
        photo: " ",
        role:'user',
        from: "form"
    });

    async function signUpUserForm () {
        let data = {
            name: nameEl.current.value,
            lastname: lastnameEl.current.value,
            email: emailEl.current.value,
            password: passwordEl.current.value,
            country: countryEl.current.value,
            photo: photoEl.current.value,
        }
        setUserBody(...userBody, data)
        await userSignUp(userBody)
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