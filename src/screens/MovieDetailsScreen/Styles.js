import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  posterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLayoutStyle: {
    width,
    height: 100,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: "#7E52A0",
    justifyContent: "center",
    alignItems: "center",
  },
  commonTextStyle: {
    color: "white",
    fontSize: 18,
  },
  backIcon: {
    position: "absolute",
    top: 0,
    zIndex: 10,
    margin: 20,
  },
});
