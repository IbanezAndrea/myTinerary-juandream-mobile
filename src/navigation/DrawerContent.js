import React, { useState } from 'react'
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import SignIn from "../screens/SignIn"
import SignUp from '../screens/SignUp'
import { logOut } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function DrawerContent(props) { 
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const signOut = () => {
        dispatch(logOut())
        navigation.navigate("Home")
    }
    let filteredProps
    
    if (user.role) {
        filteredProps = {
            ...props,
            state: {
                ...props.state,
                routeNames: props.state.routeNames.filter(
                    (routeName) => routeName !== 'Sign in' && routeName !== 'Sign up' && routeName !== "City"),
                routes: props.state.routes.filter(
                    (route) => route.name !== 'Sign in' && route.name !== 'Sign up'),
            }
        }
    } else {
        filteredProps = {
            ...props,
            state: {
                ...props.state,
                routeNames: props.state.routeNames.filter(
                    (routeName) => routeName !== 'MyTineraries' && routeName !== "City"),
                routes: props.state.routes.filter(
                    (route) => route.name !== 'MyTineraries'),
            }
        }
    }
    
    return (
        <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
            {user.role &&
            <DrawerItem
            label="Sign Out"
            onPress={signOut}
            />
        }
        </DrawerContentScrollView>
    )
}