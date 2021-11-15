import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  searchbar: {
    flex: 1,
    marginLeft: 20,
    alignSelf: "stretch",
    paddingLeft: 15,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
  },
  searchBorder: {
    borderColor: "gray",
    borderWidth: 1,
  },
  srearchInput: {
    width: 150,
  },
  nomatch: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
