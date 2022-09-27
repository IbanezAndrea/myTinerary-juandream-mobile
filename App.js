import 'react-native-gesture-handler'; 
import React from 'react';
import Drawer from './src/navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native/lib/commonjs';



export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
