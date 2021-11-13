import * as React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Platform,
  TouchableOpacity,
} from "react-native";
import Genres from "../geners/Index";
import Rating from "../rating/Index";
import Backdrop from "../backdrop/Indes";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function Index({ data }) {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const renderItem = ({ item, index }) => {
    if (!item.poster) {
      return (
        <View style={{ width: EMPTY_ITEM_SIZE, backgroundColor: "black" }} />
      );
    }

    const inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [100, 50, 100],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        style={{ width: ITEM_SIZE }}
        onPress={() => navigation.navigate("MovieDetailsScreen", { item })}
      >
        <Animated.View
          style={{
            marginHorizontal: SPACING,
            padding: SPACING * 2,
            alignItems: "center",
            transform: [{ translateY }],
            backgroundColor: "white",
            borderRadius: 34,
          }}
        >
          <Image source={{ uri: item.poster }} style={styles.posterImage} />
          <Text style={{ fontSize: 24 }} numberOfLines={1}>
            {item.title}
          </Text>
          <Rating rating={item.rating} />
          <Genres genres={item.genres} />
          <Text
            style={{ fontSize: 12, marginBottom: 6 }}
            numberOfLines={4}
          ></Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Backdrop movies={data} scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  );
}
