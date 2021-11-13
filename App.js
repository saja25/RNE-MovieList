import React from "react";
import { StatusBar, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/Index";
import Stack from "./src/navigation/Index";
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Text>hello</Text> */}
      {/* <HomeScreen /> */}
      <Stack />
    </>
  );
};

export default App;
