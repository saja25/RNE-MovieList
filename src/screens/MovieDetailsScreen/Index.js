import React, { useState, useEffect } from "react";
import { styles } from "./Styles";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Platform,
  Text,
} from "react-native";
import SlidingPanel from "react-native-sliding-up-down-panels";
import { AntDesign } from "@expo/vector-icons";
import Genres from "../../components/geners/Index";
import Rating from "../../components/rating/Index";
import { getMovieReviews } from "../../api/Index";
import ReviewCard from "../../components/reviewCard/Index";
const { width, height } = Dimensions.get("window");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;

export default function Index({ route, navigation }) {
  const item = route.params.item;
  // console.log(item);
  const [screenHeight, setscreenHeight] = useState();
  const [comment, setComment] = useState(" ");
  const [reviews, setReviews] = useState([]);
  const onContentSizeChange = (contentWidth, contentHeight) => {
    setscreenHeight(contentHeight);
  };
  const scrollEnable = screenHeight > height;
  const addComment = ({ value }) => {
    setComment(value);
    console.log(value);
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
  console.log(reviews);

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
        <View
          style={{
            flex: 1,
            // height: BACKDROP_HEIGHT,
            // width,
            // position: "absolute",
          }}
        >
          <Image
            source={{ uri: item.poster }}
            style={{
              width,
              height,
              position: "absolute",
            }}
          />
        </View>
        <SlidingPanel
          headerLayoutHeight={BACKDROP_HEIGHT / 2.8}
          headerLayout={() => (
            <View
              style={{
                flex: 1,
                width,
                backgroundColor: "white",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                paddingTop: 30,
                paddingBottom: 20,
              }}
            >
              <Text style={{ fontSize: 24 }} numberOfLines={1}>
                {item.title}
              </Text>
              <Rating rating={item.rating} />
              <Genres genres={item.genres} />
              <Text style={{ fontSize: 12, marginBottom: 6 }} numberOfLines={4}>
                {item.description}
              </Text>
            </View>
          )}
          slidingPanelLayout={() =>
            reviews.length > 0 ? (
              <FlatList
                data={reviews}
                keyExtractor={(item) => item.key}
                renderItem={ReviewCard}
                style={{
                  flex: 1,
                }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  flex: 1,
                  width,
                  height,
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: 10,
                  paddingTop: 30,
                }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  width,
                  height,
                  backgroundColor: "white",
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: 10,
                  paddingTop: 30,
                }}
              >
                <Text>No comments found !</Text>
              </View>
            )
          }
        />
      </View>

      {/* <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
          }}
          placeholder="leave a comment"
          value={comment}
          onChangeText={addComment}
        ></TextInput> */}
    </>
  );
}
