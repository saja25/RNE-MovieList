import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

export default function Index({ genres }) {
  return (
    <View style={styles.genres}>
      {genres.map((genre, i) => {
        return (
          <View key={genre} style={styles.genre}>
            <Text style={styles.genreText}>{genre}</Text>
          </View>
        );
      })}
    </View>
  );
}
