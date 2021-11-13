import React, { useState } from "react";
import { styles } from "./Styles";
import {
  View,
  FlatList,
  Text,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getMovieSearch } from "../../api/Index";
import AnimatedCarasol from "../../components/animatedcarasol/Index";
export default function Index({ route, navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hide, sethide] = useState(false);
  const onChangeSearch = async (query) => {
    setSearchQuery(query);
    // console.log(searchQuery);
  };
  const onSubmitEditing = async () => {
    const fetchData = await getMovieSearch(searchQuery);
    fetchData &&
      setResults([{ key: "empty-left" }, ...fetchData, { key: "empty-right" }]);
    console.log("resultsssss frommmm searchhhhh", results);
    sethide(true);
  };
  console.log("resultsssss frommmm searchhhhh", results);

  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.searchbar}>
          <TextInput
            type="search"
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={onSubmitEditing}
            style={styles.srearchInput}
          />
        </View>
      </View>
      <View>
        {results.length > 0 ? (
          <AnimatedCarasol data={results} />
        ) : (
          hide && <Text>No matches found.....</Text>
        )}
      </View>
    </>
  );
}
