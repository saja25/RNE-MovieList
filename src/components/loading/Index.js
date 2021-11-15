import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./Styles";
export default function Index() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color="#000" size="large" />
    </View>
  );
}
