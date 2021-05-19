import React , {useState} from 'react'
import { StyleSheet, Alert } from 'react-native'
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler'
import SwipableImage from './SwipableImage'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

function Swipes({users, currentIndex, handleLike, handlePass, swipesRef}) {
    const [willLike, setWillLike] = useState(false)
    const [willPass, setWillPass] = useState(false)
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
            ref={swipesRef}
            friction={2}
            leftThreshold={40}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            onSwipeableLeftOpen={()=>{
                setWillLike(false)
                handleLike()
            }}
            onSwipeableRightOpen={()=>{
                setWillPass(false)
                handlePass()
            }}
            onSwipeableLeftWillOpen={() => setWillLike(true)}
            onSwipeableRightWillOpen={() => setWillPass(true)}
        >
            <TouchableOpacity>
                <SwipableImage user={users[currentIndex]} willLike={willLike} willPass={willPass}/>
            </TouchableOpacity>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>)