import React from 'react'
import { View, Text, Button } from 'react-native'
import * as firebase from './Fire'
import "firebase/database";


export default function Debug() {
    
    function storeHighScore(userId, number) {
        firebase
          .database()
          .ref('users/' + userId)
          .set({
            highscore: number,
          });
      }

      function setupHighscoreListener(userId) {
        firebase.database().ref('users/' + userId).on('value', (snapshot) => {
          const highscore = snapshot.val().highscore;
          console.log("New high score: " + highscore);
        });
      }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='test' onPress={storeHighScore(1, 999)}/>
      </View>
    )
}
