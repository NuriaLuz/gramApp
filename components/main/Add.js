import React, { useState, useEffect } from 'react';
import { StyleSheet,Text, View, TouchableOpacity ,  Button} from 'react-native';
import { Camera } from 'expo-camera';

export default function Add() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View>
            <View style={styles.cameraContainer}>
                <Camera 
                style={styles.fixedRation} 
                type={type} 
                ratio={'1:1'}
                />
            </View>

            <Button
                title="Flip Camera"
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    );
                }}>
            </Button>
        </View>
    );
}


const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRation: {
        flex: 1,
        aspectRatio:1
    }
})