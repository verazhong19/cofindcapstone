// @refresh reset
import React, { useState, useEffect } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Routes/Main";
import Chats from "./Routes/Chats";
import Profile from "./Routes/Profile";
import EditProfile from "./Routes/EditProfile";
import Launch from "./Routes/register/Launch";
import RegisterInfo from "./Routes/register/RegisterInfo";
import RegisterExperience from "./Routes/register/RegisterExperience";
import RegisterPhoto from "./Routes/register/RegisterPhoto";
import RegisterLocation from "./Routes/register/RegisterLocation";
import RegisterInterest from "./Routes/register/RegisterInterest";

import ChatList from "./Routes/chat/ChatList";
import ChatRoom from "./Routes/chat/ChatRoom";

import Debug from './Debug'
import UserBio from "./components/UserBio";

const Stack = createStackNavigator();
console.disableYellowBox = true;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ header: () => null }}
          component={Main}
        />
        <Stack.Screen name="Chat" component={Chats} />
        {/* <Stack.Screen name="Debug" component={Debug} /> */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen
          name="Launch"
          options={{ header: () => null }}
          component={Launch}
        />
        <Stack.Screen name="RegisterInfo" component={RegisterInfo} />
        <Stack.Screen
          name="RegisterExperience"
          component={RegisterExperience}
        />
        <Stack.Screen name="RegisterPhoto" component={RegisterPhoto} />
        <Stack.Screen name="RegisterLocation" component={RegisterLocation} />
        <Stack.Screen name="RegisterInterest" component={RegisterInterest} />
        {/* <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={({ route }) => ({
            title: Chat,
            headerBackTitleVisible: false,
          })}
        /> */}
        <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
