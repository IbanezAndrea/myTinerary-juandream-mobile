import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import Cities from '../screens/Cities'
import { StyleSheet } from 'react-native'
import SignIn from "../screens/SignIn"
import City from '../screens/City'
const DrawerNavigation = createDrawerNavigator()

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Group>
                <DrawerNavigation.Screen name='Home' component={HomeScreen} />
                <DrawerNavigation.Screen name='Cities' component={Cities} />
                <DrawerNavigation.Screen name='Sign in' component={SignIn} />
            </DrawerNavigation.Group>
            <DrawerNavigation.Screen name='City' component={City}
                initialParams={{ id: "" }} />
        </DrawerNavigation.Navigator>
    )
}
