import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './components/auth/LandingPage'
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCAUypa4rM6RDt-_gJs_E3GAPABUz9cWPg",
  authDomain: "gramapp-961e4.firebaseapp.com",
  projectId: "gramapp-961e4",
  storageBucket: "gramapp-961e4.appspot.com",
  messagingSenderId: "516376666149",
  appId: "1:516376666149:web:7ded4f14a7c99ba77e5fcc",
  measurementId: "G-W92XEH76GT"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{headerShown : false}} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
