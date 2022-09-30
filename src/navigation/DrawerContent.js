import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import SignIn from "../screens/SignIn"
import SignUp from '../screens/SignUp'
import { logOut } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function DrawerContent(props) { 
    const logged = useSelector(state => state.user.logged)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [blackList,setBlackList] = useState(["City"])
    const signOut = () => {
        dispatch(logOut())
        navigation.navigate("Home")
    }
    let filteredProps
    useEffect(() => {
        if (logged) {
            setBlackList(["Sign in","Sign up"])
            console.log(":)")
        } else {
            setBlackList(["My Tineraries"])
            console.log(":(")
        }
    },[logged])
    filteredProps = {
        ...props,
        state: {
            ...props.state,
            routeNames: props.state.routeNames.filter(
                (routeName) => !blackList.includes(routeName)),
            routes: props.state.routes.filter(
                (route) => !blackList.some(r=>r === route.name) ),
        }
    }
    
    return (
        <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
            {logged &&
            <DrawerItem
            label="Sign Out"
            onPress={signOut}
            />
        }
        </DrawerContentScrollView>
    )
}