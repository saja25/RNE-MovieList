import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { getMovies } from "../../api/Index";
import { styles } from "./Styles";
import Loading from "../../components/loading/Index";
import AnimatedCarasol from "../../components/animatedcarasol/Index";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
export default function Index() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const onCatagorySelection = async (category) => {
    const fetchData = await getMovies(category);
    fetchData &&
      setMovies([{ key: "empty-left" }, ...fetchData, { key: "empty-right" }]);
  };
  useEffect(() => {
    onCatagorySelection("popular");
  }, []);

  if (movies.length === 0) {
    return <Loading />;
  }
  return (
    <>
      <View style={styles.viewIcon}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
        />
        <TouchableOpacity
          style={styles.genre}
          onPress={() => {
            // setCategory();
            onCatagorySelection("top_rated");
          }}
        >
          <Text style={styles.genreText}>TOP RATED</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genre}
          onPress={() => onCatagorySelection("popular")}
        >
          <Text style={styles.genreText}>POPULAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genre}
          onPress={() => onCatagorySelection("upcoming")}
        >
          <Text style={styles.genreText}>UPCOMING</Text>
        </TouchableOpacity>
      </View>

      <AnimatedCarasol data={movies} />
    </>
  );
}
