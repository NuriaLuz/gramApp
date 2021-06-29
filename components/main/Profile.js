import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'



function Profile(props) {
    const { currentUser, posts } = props;
    console.log(currentUser , posts)
    return (
        <View style={style.container}>

            <View style={style.userInfo}>
                <Text>{currentUser.name}</Text>
                <Text>{currentUser.email}</Text>
            </View>

            <View style={style.gallery}>
                <FlatList
                    numColumns={3}
                    horizontal={false}
                    data={posts}
                    renderItem={({ item }) => (
                        <View
                            style={style.containerImages}>
                            <Image
                                style={style.image}
                                source={{ uri: item.downloadURL}}/>
                        </View>
                    )} />


            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    userInfo: {
        margin: 20
    },
    gallery: {
        flex: 1,
    },
    containerImages: {
        flex: 1/3
    },
    image: {
        flex: 1,
        aspectRatio: 1/1
    }

})




const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})


export default connect(mapStateToProps, null)(Profile)