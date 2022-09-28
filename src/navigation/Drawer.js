import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import Cities from '../screens/Cities'
import { StyleSheet } from 'react-native'
import SignIn from "../screens/SignIn"

const DrawerNavigation = createDrawerNavigator()

export default function Drawer() {
    return (
    <DrawerNavigation.Navigator>
        <DrawerNavigation.Screen name ='Home' component={HomeScreen}/>
        <DrawerNavigation.Screen name ='Cities' component={Cities}/>
        <DrawerNavigation.Screen name ='Sign in' component={SignIn}/>
    </DrawerNavigation.Navigator>
    )
}

const styles = StyleSheet.create({



})