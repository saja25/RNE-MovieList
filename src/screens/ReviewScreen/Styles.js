import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
