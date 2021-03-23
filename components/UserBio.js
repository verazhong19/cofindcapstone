import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function UserBio() {
    return (
        <View>
            <View style={styles.photo}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>Education</Text>
                </View>
               
                <View style={styles.textRow}>
                    <Text style={[styles.textSecondary, styles.textShadow]}>New York University</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>Interactive Media and Cats, 2016 - 2020</Text>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
        backgroundColor: 'grey'
    },
    textContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrimary: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    textSecondary: {
        color: 'white',
        fontSize: 25,
    },
    textTertiary: {
        color: 'white',
        fontSize: 18,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})