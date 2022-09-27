import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer/lib/commonjs'
import HomeScreen from '../screens/HomeScreen'

const DrawerNavigation = createDrawerNavigator()

export default function Drawer() {
    return (
    <DrawerNavigation.Navigator>
        <DrawerNavigation.Screen name ='Home' component={HomeScreen}/>
    </DrawerNavigation.Navigator>
    )
}
