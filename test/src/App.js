import React from 'react';
import firebase from '/firebase/app';
import 'firbase/firestore';
import 'firebase/auth';
import {useauthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCc9WzjHFk-t-IND4oM_jyBVfAlj9E_gYQ",
  authDomain: "chat-app-ee6be.firebaseapp.com",
  projectId: "chat-app-ee6be",
  storageBucket: "chat-app-ee6be.appspot.com",
  messagingSenderId: "888973916905",
  appId: "1:888973916905:web:293652f1354c17085d4e78",
  measurementId: "G-X5D9GJRN84"
})

const auth=firebase.auth();
const firestore=firebase.firestore();

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
