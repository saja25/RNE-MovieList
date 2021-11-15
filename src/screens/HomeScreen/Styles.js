import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

export const styles = StyleSheet.create({
  viewIcon: {
    margin: 20,
    position: "absolute",
    top: 0,
    zIndex: 10,
    flexDirection: "row",
  },
  genre: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "gray",
    marginHorizontal: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    opacity: 0.6,
  },
  genreText: {
    fontSize: 15,
    color: "gray",
  },
});
