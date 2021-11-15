import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  posterImage: {
    width,
    height,
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  backIcon: {
    position: "absolute",
    top: 0,
    zIndex: 10,
    margin: 20,
  },
  detailsContainer: {
    flex: 1,
    width,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
  },
  detailsView: {
    width,
    marginTop: 45,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    marginBottom: 6,
    textAlign: "center",
  },
  review: {
    // margin: 8,
    fontWeight: "bold",
    // borderWidth: 1,
    // borderRadius: 14,
    borderColor: "gray",
    // marginHorizontal: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    opacity: 0.6,
    alignSelf: "flex-start",
    marginHorizontal: 40,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    width: 170,
    margin: 15,
    padding: 3,
    paddingHorizontal: 10,
    borderColor: "gray",
    // alignSelf: "stretch",
  },
});
