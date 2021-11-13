import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";
export default function Index() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.paragraph}>Loading .......</Text>
    </View>
  );
}
