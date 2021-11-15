import React from "react";
import { styles } from "./Styles";
import { View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ReviewCard from "../../components/reviewCard/Index";
export default function Index({ route, navigation }) {
  const reviews = route.params.reviews;

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
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
