import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  mainCardView: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    margin: 4,
    padding: 10,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 4,
    backgroundColor: "gray",
    marginBottom: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  seeMore: {
    lineHeight: 15,
    marginTop: 6,
  },
});
