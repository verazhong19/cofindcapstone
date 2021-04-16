import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function RegisterInfo() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'Left', justifyContent: 'center', marginLeft: 28}}>
        <Text>Welcome!</Text>
        <TextInput style={styles.input} placeholder='Name'/>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Password'/>
        <TextInput style={styles.input} placeholder='Confirm Password'/>
       
        <Button title='Next' onPress={() => navigation.navigate('RegisterLocation')}/>
      </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width:360,
      marginTop:12,
      borderWidth: 1,
    },
  });
  
