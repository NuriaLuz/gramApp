import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserPosts } from '../redux/action'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from './main/Feed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile from './main/Profile'

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    return null
}

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
        this.props.fetchUserPosts()
    }
    render() {
        const { currentUser } = this.props

        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}>
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
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserPosts }, dispatch)


export default connect(mapStateToProps, mapDispatchProps)(Main)
