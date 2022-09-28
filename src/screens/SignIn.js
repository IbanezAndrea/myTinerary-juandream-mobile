import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, setCredentials} from "../features/user/userSlice"
import { ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from "react-native";
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


    return (
        <ScrollView className="signin-page-main">
            <Input inputsData={inputArray} event={signUserForm} />
            <View>
                <Text>{nameUser}!</Text>
            </View>
        </ScrollView>
    )
}

export default SignIn