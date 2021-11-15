import React from "react";
import { styles } from "./Styles";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;

export default function Index({ movies, scrollX }) {
  return (
    <View
      style={{
        height: BACKDROP_HEIGHT,
        width,
        position: "absolute",
      }}
    >
      <FlatList
        data={movies}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: "absolute",
                width: translateX,
                height,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item.backdrop }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: "absolute",
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "white"]}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}
