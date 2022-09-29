import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import Cities from '../screens/Cities'
import { StyleSheet } from 'react-native'
import SignIn from "../screens/SignIn"
import SignUp from '../screens/SignUp'
import City from '../screens/City'
const DrawerNavigation = createDrawerNavigator()
const stackNav = createNativeStackNavigator()
export default function Drawer() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Group>
                <DrawerNavigation.Screen name='Home' component={HomeScreen} />
                <DrawerNavigation.Screen name='Cities' component={Cities} />
                <DrawerNavigation.Screen name='Sign in' component={SignIn} />
                <DrawerNavigation.Screen name='Sign up' component={SignUp} />
            </DrawerNavigation.Group>
            <stackNav.Screen name="City" component={City} options={{headerBackTitle: true, }} initialParams={{ id: "" }} />       
        </DrawerNavigation.Navigator>
    )
}
