import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'
import SwipableImage from './SwipableImage'


export default function BottomBar({handleLikePress, handlePassPress}) {
    return (
        <View style={styles.container}>
            <View />
            <TouchableOpacity style={styles.button} onPress={handleLikePress}>
                <FontAwesome5 name="handshake" size={27} color="#149134"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePassPress}>
                <FontAwesome5 name="times" size={27} color="#ab2323"/>
            </TouchableOpacity>
            <View />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            height: 75,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        button: {
            width: 50,
            height: 50,
            backgroundColor: '#e5e5e5',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 56.46,
            elevation: 9,
        }
    }
)

