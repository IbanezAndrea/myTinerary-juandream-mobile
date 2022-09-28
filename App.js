import 'react-native-gesture-handler'; 
import React from 'react';
import Drawer from './src/navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import {store} from './src/features/store'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
