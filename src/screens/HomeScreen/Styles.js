import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

export const styles = StyleSheet.create({
  icon: {
    margin: 20,
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
});
