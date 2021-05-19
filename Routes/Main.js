import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Constants from "expo-constants";
import TopBar from "../components/TopBar";
import axios from "axios";
import SwipableImage from "../components/SwipableImage";
import BottomBar from "../components/BottomBar";
import Swipes from "../components/Swipes";
import UserBio from "../components/UserBio";
import FlipCard from "react-native-flip-card";
import { useNavigation } from '@react-navigation/native';


export default function Main() {
  const swipesRef = useRef(null);
  // const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // async function fetchUsers() {
  //   try {
  //     const { data } = await axios.get("https://randomuser.me/api/?results=50");
  //     setUsers(data.results);
  //     console.log(data.results);
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert("Error users are weird", "", [
  //       { text: "Retry", onPress: () => fetchUsers() },
  //     ]);
  //   }
  // }

 

  const users = [
    {
      name: {
        first: "Hope",
      },
      location: {
        city: "Shanghai",
      },
      occupation: "AR/VR Developer",
      experience: {},
      education: "NYU Shanghai",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE3qJDbSRglkA/profile-displayphoto-shrink_800_800/0/1616840697004?e=1626912000&v=beta&t=5zc_HAn4z0it_Ygx3nhgpIygQT6RP4CfK6YKuz2HCoI",
      company: ['Oculus', 'MagicLeap', "Alex's New Castle"],
      major: "Interactive Media Arts, 2019 - 2021",
      position: ['Senior VR Developer', 'AR Researcher', 'Solo Project'],
      interests: ['XR', 'Educational Technology', 'Accessible Technology']
      },
    {
      name: {
        first: "Sangjin",
      },
      location: {
        city: "Bangalore",
      },
      occupation: "Economist",
      experience: {},
      education: "University of British Columbia",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQExEq6yye8yNg/profile-displayphoto-shrink_800_800/0/1617440136095?e=1626912000&v=beta&t=KU-g4pdKzNZ48QZ741N450z-hIqDGbSG4wraQBSv1Xg",
        company: ['United Nations', 'Morgan Stanley', "Statistica"],
        major: "Economics, 2008 - 2012",
        position: ['Sustainable Economic Researcher', 'Financial Economic Researcher', 'Statistician'],
      interests: ['Social Welfare', 'Data Modelling', 'Sustainable Entrepreneurship']
      },
    {
      name: {
        first: "Zane",
      },
      location: {
        city: "New York",
      },
      occupation: "Software Engineer",
      experience: {},
      education: "NYU Shanghai",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEQIt2Wfr-sVA/profile-displayphoto-shrink_800_800/0/1615455464111?e=1626912000&v=beta&t=cwzX1nOXSjUCrSW3iUFNxeYjgzUi42Cs-i40v004sec",
        company: ['Google', 'GG Games', "OK STUDIOS"],
        major: "Computer Science, 2017 - 2021",
        position: ['Front End Developer', 'Software Engineering Intern', 'Lead Developer'],
        interests: ['Game Design', 'Web Development', 'Music Production']
      },

    {
      name: {
        first: "Penny",
      },
      location: {
        city: "Miami",
      },
      occupation: "IMA Fellow",
      experience: {},
      education: "NYU Tisch School of the Arts",
      picture:
        "https://media-exp1.licdn.com/dms/image/C5103AQEZ0WUWc0ws9w/profile-displayphoto-shrink_800_800/0/1583850823843?e=1626912000&v=beta&t=KpB1sk-bUxriTPy7g74g65w8ooDVfwZ_XdqrE4CV1RU",
        company: ['NYU Shanghai', 'Guacamole', "Processing Foundation"],
        major: "Interactive Media Arts, 2017 - 2021",
        position: ['IMA Fellow', 'CEO Assistant', 'UI/UX Designer'],
        interests: ['Data Driven Design', 'Sustainable Design', 'Accessible Technology']
      },
    {
      name: {
        first: "Daniel",
      },
      location: {
        city: "Shanghai",
      },
      occupation: "Sales Manager",
      experience: {},
      education: "Duke Kunshan University",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE-0pbeb2ZLNA/profile-displayphoto-shrink_800_800/0/1615994094847?e=1626912000&v=beta&t=Yvy5VNDHDWb4L3v6-QWzfRfPHZS1ngjB0q4CweV-HkI",
        company: ['Guacamole', 'Ogilvy', "Stepping Stones"],
        major: "Marketing, 2016 - 2020",
        position: ['CEO', 'Market Researcher', 'Sales Manager'],
        interests: ['Sustainable Entrepreneurship', 'Financial Technology', 'Product Development']
      },
    {
      name: {
        first: "Frances",
      },
      location: {
        city: "Boston",
      },
      occupation: "Dean of Urban Studies",
      experience: {},
      education: "Harvard University",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFqzzbrIDKDew/profile-displayphoto-shrink_800_800/0/1616438392585?e=1626912000&v=beta&t=YfU0xXt5rd7UtA74zHUSQE71bhy2LChRSOdjjkeZuyI",
        company: ['Harvard', 'Schiller & Sons', "NYC Department of Parks and Recrecreation"],
        major: "Urban Development, 2010 - 2014",
        position: ['Dean of Urban Studies', 'Senior Architect', 'Urban Planner']
        ,
      interests: ['Architecture', 'Urban Design', 'Accessible Technology']
      },
    {
      name: {
        first: "Lily",
      },
      location: {
        city: "Boston",
      },
      occupation: "Marine Biologist",
      experience: {},
      education: "Harvard University",
      picture:
        "https://media-exp1.licdn.com/dms/image/C5603AQG-0-QagYtudg/profile-displayphoto-shrink_800_800/0/1616435380810?e=1626912000&v=beta&t=TMGmzVPp0Y6QcqQkz8Dgwgdf-9OnvKAAYe2YfsH_mik",
        company: ['Wildlife Association of Boston', 'Interplace Foundation for Marine Life', "We Love Whales"],
        major: "Marine Biology, 2010 - 2014",
        position: ['Marine Biologist', 'Founder', 'Whale Conservation Expert'],
        interests: ['Animal Welfare', 'MedTech', 'Marine Life']
      },
    
    {
      name: {
        first: "Kira",
      },
      location: {
        city: "St-Guilhem-le-Désert",
      },
      occupation: "Philosopher",
      experience: {},
      education: "University of Bonn",
      picture:
        "https://media-exp1.licdn.com/dms/image/C5603AQEONBe3tIef_Q/profile-displayphoto-shrink_800_800/0/1572482921700?e=1626912000&v=beta&t=XrqYECaZ-VemM2GcsJzH23oliLWOO6YslHepdDHvhpg",
        company: ['Rubenstein & Sons', 'University of Bonn', "Morgan Stanley"],
        major: "Philosophy, 2011 - 2015",
        position: ['Legal Associate', 'Philosophy Researcher', 'Summer Associate'],
        interests: ['Moral Philosophy', 'Legal Education', 'Existencialism']
      },

    {
      name: {
        first: "Hope",
      },
      location: {
        city: "Shanghai",
      },
      occupation: "AR/VR Developer",
      experience: {},
      education: "NYU Shanghai",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE3qJDbSRglkA/profile-displayphoto-shrink_200_200/0/1616840697004?e=1625097600&v=beta&t=od7l_g_X50PFTUHVFqlvVmIMXNF9M3SvMxcyC-bM92M",
    }
  ];

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const user = users[currentIndex];

  const navigation = useNavigation();

  function handleLike() {
  
    Alert.alert(
      "You matched with " + user.name.first + "!",
      "You can start chatting now, or keep swiping",
      [
        {
          text: "Chat Now",
          onPress: () => navigation.navigate('ChatRoom'),
          style: "cancel"
        },
        {
          text: "Keep Swiping",
          onPress: () => console.log("later"),
          
        },
      ]
    );
    nextUser();
  }

  function handlePass() {
    console.log("nah");
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  function handleLikePress() {
    swipesRef.current.openLeft();
  }

  function handlePassPress() {
    swipesRef.current.openRight();
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {
          users.length > 1 &&
            users.map(
              (u, i) =>
                currentIndex === i && (
                  <FlipCard
                    friction={1000}
                    perspective={8000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                  >
                    <View style={styles.face}>
                      <Swipes
                        key={i}
                        ref={swipesRef}
                        currentIndex={currentIndex}
                        users={users}
                        handleLike={handleLike}
                        handlePass={handlePass}
                      ></Swipes>
                    </View>
                    <View style={styles.back}>
                      <UserBio user={users[currentIndex]} />
                    </View>
                  </FlipCard>
                )
            )
          //<Swipes currentIndex={currentIndex} users={users}></Swipes>
        }
      </View>
      <BottomBar
        handleLikePress={handleLikePress}
        handlePassPress={handlePassPress}
      />
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
