import React from "react";
import { Modal,View, Text, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from "../Styles/MessageStyles";
import TopBar from "../components/TopBar";

const Messages = [
  {
    id: "1",
    userName: "Hope Myers",
    userImg: require("../assets/dummy/hope.jpg"),
    messageTime: "9 min ago",
    messageText: "Hi! Nice to meet you!",
  },
  {
    id: "2",
    userName: "Daniel Zamiri",
    userImg: require("../assets/dummy/daniel.jpg"),
    messageTime: "9 min ago",
    messageText: "Hi there!",
  },
  {
    id: "3",
    userName: "Winny Wang",
    userImg: require("../assets/dummy/penny.jpg"),
    messageTime: "9 min ago",
    messageText: "Hello!",
  },
  {
    id: "4",
    userName: "Zane Fadul",
    userImg: require("../assets/dummy/zane.jpg"),
    messageTime: "9 min ago",
    messageText: "What are you up to now?",
  },
];

export default function Chats() {
  const navigation = useNavigation();

  return (
    
    <Container>
      
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate("ChatRoom", { userName: item.userName })
            }
          >
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  chat: {
    width: '100%'
  },
});