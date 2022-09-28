import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { View,Text } from 'react-native'

export default function WebsiteLayout(props) {

    return (
    <View>
        <Header />
        {props.children}
        <Footer />
    </View>
    )
}
