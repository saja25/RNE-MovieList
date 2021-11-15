import React, { useState, useEffect } from "react";
import { styles } from "./Styles";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Platform,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Genres from "../../components/geners/Index";
import Rating from "../../components/rating/Index";
import { getMovieReviews } from "../../api/Index";
import Start from "../../components/reviewStars/Index";
// const { width, height } = Dimensions.get("window");

export default function Index({ route, navigation }) {
  const item = route.params.item;
  // const [screenHeight, setscreenHeight] = useState();
  const [reviews, setReviews] = useState([]);
  // const onContentSizeChange = (contentWidth, contentHeight) => {
  //   setscreenHeight(contentHeight);
  // };
  // const scrollEnable = screenHeight > height;
  const [comment, setComment] = useState("leave a review");

  const addComment = (value) => {
    setComment(value);
    // console.log(value);
  };
  const onSubmitEditing = () => {
    console.log(comment);
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedReviews = await getMovieReviews(item.key);
      setReviews(fetchedReviews);
    };
    if (reviews.length === 0) {
      fetchData();
    }
  }, [reviews]);

  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        />
        <View style={styles.container}>
          <Image source={{ uri: item.poster }} style={styles.posterImage} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsView}>
            <Text style={styles.title} numberOfLines={3}>
              {item.title}
            </Text>
            <Rating rating={item.rating} />
            <Genres genres={item.genres} />
            <Text style={styles.description} numberOfLines={6}>
              {item.description}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.input}>
              <TextInput
                placeholder="leave a review"
                type="text"
                onChangeText={(text) => addComment(text)}
                value={comment}
                onSubmitEditing={onSubmitEditing}
                // style={styles.srearchInput}
              />
            </View>
            <Start />
          </View>

          {reviews.length > 0 ? (
            <TouchableOpacity
              style={styles.review}
              onPress={() => navigation.navigate("Review", { reviews })}
            >
              <Text>SEE ALL REVIEWS ...</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ margin: 8 }}>
              <Text>NO REVIEWS.... </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
}
