import React, { useState, useEffect } from "react";
import { styles } from "./Styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Genres from "../../components/geners/Index";
import Rating from "../../components/rating/Index";
import { getMovieReviews } from "../../api/Index";
import Start from "../../components/reviewStars/Index";
import firebase from "firebase/compat/app";

export default function Index({ route, navigation }) {
  const item = route.params.item;
  let movieId = item.key;
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("leave a review");

  const addComment = (value) => {
    setComment(value);
  };
  const onSubmitEditing = () => {
    firebase
      .firestore()
      .collection("reviews")
      .add({
        review: comment,
        author: "guest user",
        movieId: item.key,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        avatar: " ",
      })
      .then((error) => console.log(error))
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    fetchData();
  };
  const fetchData = async () => {
    const fetchedReviews = await getMovieReviews(item.key);
    let arr = [];
    const data = await firebase
      .firestore()
      .collection("reviews")
      .where("movieId", "==", movieId)
      .get();
    data.docs.map((doc) => arr.push(doc.data()));
    arr.length > 0 || fetchedReviews.length > 0
      ? setReviews([...fetchedReviews, ...arr])
      : null;
  };
  useEffect(() => {
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
              />
            </View>
            <Start />
          </View>

          {reviews.length > 0 ? (
            <TouchableOpacity
              style={styles.review}
              onPress={() =>
                navigation.navigate("Review", { reviews, movieId })
              }
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
