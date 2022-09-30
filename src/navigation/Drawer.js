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
import MyTineraries from '../screens/MyTineraries'
import StackMyTineraries from './StackMyTineraries'
import { useSelector } from 'react-redux'
import { FadeInLeft, FadeInRight } from 'react-native-reanimated'
const DrawerNavigation = createDrawerNavigator()


export default function Drawer() {

const loggedIn = useSelector(state=>state.user.logged)

    return (
        <DrawerNavigation.Navigator 
            drawerContent={(props) => <DrawerContent {...props} />} screenOptions={
            {
                drawerStyle:{
                backgroundColor: '#1E212D',
            }, drawerItemStyle:{
                backgroundColor:'#FAF3E0',
                borderRadius: 5,

            },
                headerStyle:{
                backgroundColor: '#1E212D',
            }, headerTitleStyle:{
                color: '#FAF3E0'
            }, drawerLabelStyle:{
                color: '#1E212D',
                fontStyle: 'italic',
                fontWeight: 'bold'
            }, headerTintColor:'#FAF3E0'
            }} >
            <DrawerNavigation.Group >
                <DrawerNavigation.Screen name='Home' component={HomeScreen} />
                <DrawerNavigation.Screen name='Cities' component={Cities} />
            <DrawerNavigation.Screen name="City" component={StackCity} initialParams={{ id: "" }} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
                drawerItemStyle: { display: 'none' }}
                } />
                {loggedIn&& <DrawerNavigation.Screen name="My Tineraries" component={StackMyTineraries} />}
                <DrawerNavigation.Screen name='Sign in' component={SignIn} />
                <DrawerNavigation.Screen name='Sign up' component={SignUp} />
            </DrawerNavigation.Group>
        </DrawerNavigation.Navigator>
    )
}
