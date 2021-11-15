import React, { useState, useEffect } from "react";
import { styles } from "./Styles";
import { View, FlatList, Dimensions, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ReviewCard from "../../components/reviewCard/Index";
export default function Index({ route, navigation }) {
  const reviews = route.params.reviews;
  // console.log(reviews);
  const [comment, setcomment] = useState("");
  const onChange = async (text) => {
    setcomment(text);
  };
  const footer = () => {
    return (
      <View>
        <TextInput
          placeholder="leave a comment"
          type="text"
          onChangeText={onChange}
          value={comment}
          // onSubmitEditing={onSubmitEditing}
          // style={styles.srearchInput}
        />
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <ReviewCard item={item} />}
          contentContainerStyle={styles.contentContainerStyle}
          //   ListHeaderComponent={()=>}
          //   ListFooterComponent={footer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
