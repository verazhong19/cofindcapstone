import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import SwipableImage from './SwipableImage'

export default function Swipes({users, currentIndex}) {

    const renderLeftActions = () => {
        return(
        <RectButton style={styles.container}>
            <SwipableImage user={users[currentIndex + 1]}></SwipableImage>
        </RectButton>
        )
    }

    const renderRightActions = () => {
        return(
        <RectButton style={styles.container}>
            <SwipableImage user={users[currentIndex + 1]}></SwipableImage>
        </RectButton>
        )
    }
    
    
    return (
        <Swipeable
            friction={2}
            leftThreshold={40}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
        >
            <SwipableImage user={users[currentIndex]}/>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})