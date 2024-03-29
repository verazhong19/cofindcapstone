import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';



export default function TopBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FontAwesome5 name="braille" size={27} color="#ab2222" />
            <FontAwesome name="comments" size={27} color="#5c5c5c" onPress={() => navigation.navigate('Chat')}/>
            <FontAwesome name="user" size={27} color="#5c5c5c" onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
    },
})