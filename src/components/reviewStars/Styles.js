import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 20,
    alignSelf: "stretch",
    paddingLeft: 15,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
});
