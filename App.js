// @refresh reset
import React, {useState, useEffect} from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Routes/Main';
import Chats from './Routes/Chats';
import Profile from './Routes/Profile';
import Launch from './Routes/register/Launch'
import RegisterInfo from './Routes/register/RegisterInfo'
import RegisterExperience from './Routes/register/RegisterExperience'
import RegisterPhoto from './Routes/register/RegisterPhoto'
import RegisterLocation from './Routes/register/RegisterLocation'
import RegisterInterest from './Routes/register/RegisterInterest'

import ChatList from './Routes/chat/ChatList';
import ChatRoom from './Routes/chat/ChatRoom';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCj47ALBKsre8LSebrnc9QClTqt6jKZjk8",
  authDomain: "cofind-cf936.firebaseapp.com",
  projectId: "cofind-cf936",
  storageBucket: "cofind-cf936.appspot.com",
  messagingSenderId: "394627568291",
  appId: "1:394627568291:web:1aae990c6110c8484be516",
  measurementId: "G-TS1VT3XDPZ"
};
// Initialize Firebase
if(firebase.apps.length === 0){
firebase.initializeApp(firebaseConfig);
}



const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Home" options={{header: () =>  null}} component={Main} />
        <Stack.Screen name="Chat" component={Chats} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Launch" options={{header: () =>  null}} component={Launch} />
        <Stack.Screen name="RegisterInfo" component={RegisterInfo} />
        <Stack.Screen name="RegisterExperience" component={RegisterExperience} />
        <Stack.Screen name="RegisterPhoto" component={RegisterPhoto} />
        <Stack.Screen name="RegisterLocation" component={RegisterLocation} />
        <Stack.Screen name="RegisterInterest" component={RegisterInterest} />
        <Stack.Screen name='ChatRoom' component={ChatRoom} options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
