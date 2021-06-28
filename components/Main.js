import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/action'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './main/Feed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile from './main/Profile'

const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
    return null
}

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        const { currentUser } = this.props

        return (
            <Tab.Navigator initialRouteName="Feed">
                <Tab.Screen name="Feed" component={Feed} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />


                <Tab.Screen name="AddScreen" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus" color={color} size={26} />
                        ),
                    }} />


                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />


            </Tab.Navigator>

        )
    }
}

const mapStateToProps = store => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)


export default connect(mapStateToProps, mapDispatchProps)(Main)
