import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Touchable } from 'react-native';
import Constants from 'expo-constants';
import TopBar from '../components/TopBar'
import axios from 'axios'
import SwipableImage from '../components/SwipableImage'
import BottomBar from '../components/BottomBar'
import Swipes from '../components/Swipes'
import UserBio from '../components/UserBio'
import FlipCard from 'react-native-flip-card'


export default function Main() {
  const swipesRef = useRef(null)
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  async function fetchUsers() {
    try{
      const{data} = await axios.get('https://randomuser.me/api/?results=50')
      setUsers(data.results);
      // console.log(data.results);
    } catch(error) {
      console.log(error);
      Alert.alert('Error users are weird', '', [{text: 'Retry', onPress: () => fetchUsers()}])
    }

  }

  useEffect( () => {
    fetchUsers()
  }, [])

  function handleLike() {
    console.log('like')
    nextUser();
  }

  function handlePass() {
    console.log('nah')
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2  === currentIndex ? 0 : currentIndex+1
    setCurrentIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }

  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 && 
          users.map(
            (u,i) => currentIndex === i && (
          <FlipCard
          friction={1000}
          perspective={8000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}>
            <View style={styles.face}>
              <Swipes key={i} ref={swipesRef} currentIndex={currentIndex} users={users} handleLike={handleLike} handlePass={handlePass}></Swipes>
            </View>
            <View style={styles.back}>
              <UserBio />
            </View>
          </FlipCard>
        ) )
          //<Swipes currentIndex={currentIndex} users={users}></Swipes>
          
        }
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});
