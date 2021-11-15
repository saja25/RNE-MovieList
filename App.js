import React from "react";
import { StatusBar } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { firebaseConfig } from "./src/api/firebaseConfig";

import Stack from "./src/navigation/Index";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack />
    </>
  );
};

export default App;
