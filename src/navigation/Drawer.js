import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'

    
const DrawerNavigation = createDrawerNavigator()

export default function Drawer() {
    return (
    <DrawerNavigation.Navigator>
        <Drawer.Screen name ='Home' component={HomeScreen}/>
    </DrawerNavigation.Navigator>
    )
}
