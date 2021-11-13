import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    marginBottom: -50,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
