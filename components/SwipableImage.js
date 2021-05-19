import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function SwipableImage({user, willLike, willPass}) {
    return (
        <View>
            <Image source={{uri: user.picture}} style={styles.photo}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.name.first}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color='white'></FontAwesome>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.location.city}</Text>
                </View> 
                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.occupation}</Text>
                </View> 

            </View>
        </View>
    )
}

const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10

}

const styles = StyleSheet.create ({
    likeBox:{
        ...boxStyle,
        left: 40,
        borderColor: '#64EDCC',
    },
    passBox:{
        ...boxStyle,
        left: 40,
        borderColor: '#AB2222',
    },
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrimary: {
        color: 'white',
        fontSize: 100,
        fontWeight: 'bold',
    },
    textSecondary: {
        color: 'white',
        fontSize: 60,
        marginLeft: 10
    },
    textTertiary: {
        color: 'white',
        fontSize: 60,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})