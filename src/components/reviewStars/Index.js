import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Styles";

export default function Index() {
  const [rating, setreating] = useState(null);
  const [comment, setComment] = useState(" ");

  const addComment = ({ value }) => {
    setComment(value);
    console.log(value);
  };
  return (
    <View style={styles.rating}>
      <View style={styles.rating}>
        {[...Array(5)].map((item, index) => {
          const ratingValue = index + 1;
          return (
            <TouchableOpacity
              onPress={() => setreating(ratingValue)}
              key={index}
            >
              <AntDesign
                name={ratingValue <= rating ? "star" : "staro"}
                size={20}
                color="tomato"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
