import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function UserBio({user}) {
    return (
        <View>
            <View style={styles.photo}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>Education</Text>
                </View>
               
                <View style={styles.textRow}>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.education}</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.major}</Text>
                </View> 
                
                
                <View style={styles.categoryContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>Experience</Text>
                </View>
               
                <View style={styles.textRow}>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.company[0]}</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.position[0]}</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.company[1]}</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.position[1]}</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.company[2]}</Text>
                </View> 

                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.position[2]}</Text>
                </View>  
                </View>

                <View style={styles.categoryContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>Interests</Text>
                </View>

                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.interests[0]}</Text>
                </View> 

            
                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.interests[1]}</Text>
                </View>

                
                <View style={styles.textRow}>
                    <Text style={[styles.textTertiary, styles.textShadow]}>{user.interests[2]}</Text>
                </View> 
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
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
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
    categoryContainer:{
        paddingTop: 20
    },
    textPrimary: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
    },
    textSecondary: {
        color: 'white',
        fontSize: 45,
    },
    textTertiary: {
        color: 'white',
        fontSize: 32,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})