import React, {useState, useEffect, useCallback} from 'react'
import { render } from 'react-dom';
import { View, Text } from 'react-native'
import { Bubble, Send, GiftedChat } from 'react-native-gifted-chat';
import {FontAwesome5, FontAwesome, MaterialIcons} from '@expo/vector-icons'


export default function ChatList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi there!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    console.log(messages)
  }, [])

  const renderBubble = (props) => {
    return(
    <Bubble 
      {...props}
      wrapperStyle = {{
        right: {
          backgroundColor: '#ab2222'
        },
        left: {
          backgroundColor: '#c2c2c2'
        }
      }}
      textStyle= {{
        right: {
          color: '#fff'
        },
        left: {
          color: '#000'
        }
      }}
    />);
  }

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <FontAwesome name="send" 
          style={{marginBottom: 5, marginRight: 10}} size={32} color="#ab2222" />
        </View>
      </Send>
    );
  }

    return (
        <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble = {renderBubble}
      renderSend = {renderSend}
      alwaysShowSend
      
    />
    )
}
