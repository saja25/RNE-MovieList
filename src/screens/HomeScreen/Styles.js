import { StyleSheet } from "react-native";

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
