// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import React from "react";
import firebase from "firebase/app"
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCj47ALBKsre8LSebrnc9QClTqt6jKZjk8",
  authDomain: "cofind-cf936.firebaseapp.com",
  projectId: "cofind-cf936",
  storageBucket: "cofind-cf936.appspot.com",
  messagingSenderId: "394627568291",
  appId: "1:394627568291:web:1aae990c6110c8484be516",
  measurementId: "G-TS1VT3XDPZ",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
