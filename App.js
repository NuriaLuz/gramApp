import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import React, { Component } from 'react';
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

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }


  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>User is In</Text>
        </View>
    )
  }
}

export default App;