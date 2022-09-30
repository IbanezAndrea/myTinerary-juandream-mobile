import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import Cities from '../screens/Cities'
import { StyleSheet } from 'react-native'
import SignIn from "../screens/SignIn"
import SignUp from '../screens/SignUp'
import City from '../screens/City'
import DrawerContent from './DrawerContent'
import StackCity from './StackCity'
const DrawerNavigation = createDrawerNavigator()

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <DrawerNavigation.Group>
                <DrawerNavigation.Screen name='Home' component={HomeScreen} />
                <DrawerNavigation.Screen name='Cities' component={Cities} />
                <DrawerNavigation.Screen name='Sign in' component={SignIn} />
                <DrawerNavigation.Screen name='Sign up' component={SignUp} />
            </DrawerNavigation.Group>
            <DrawerNavigation.Screen name="City" component={StackCity} initialParams={{ id: "" }} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
                drawerItemStyle: { display: 'none' }}
                } />
        </DrawerNavigation.Navigator>
    )
}
