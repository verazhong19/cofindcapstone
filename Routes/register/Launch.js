import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function Launch() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello I am Chat Screen</Text>
        <Button title='Sign Up' onPress={() => navigation.navigate('RegisterInfo')}/>
        <Button title='Sign In with Google' onPress={() => navigation.navigate('Home')}/>
      </View>
    )
}


