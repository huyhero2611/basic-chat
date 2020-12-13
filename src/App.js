import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // your config
  apiKey: "AIzaSyCNPSsg-1d3yzn92-YfEQOc72_7zJBPk4I",
  authDomain: "basic-chat-dd233.firebaseapp.com",
  projectId: "basic-chat-dd233",
  storageBucket: "basic-chat-dd233.appspot.com",
  messagingSenderId: "316947476178",
  appId: "1:316947476178:web:70305c07dbc644d546c70b",
  measurementId: "G-0Z4825BVE0",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">{user ? <ChatRoom /> : <SignIn />}</header>
    </div>
  );
}

export default App;

function SignIn() {
  return <button onClick={signInWithGoogle}>Sign In with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {
  const messageRef = firestore.collection;
}
