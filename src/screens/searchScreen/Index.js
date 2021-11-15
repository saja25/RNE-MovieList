import React, { useState } from "react";
import { styles } from "./Styles";
import { View, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getMovieSearch } from "../../api/Index";
import AnimatedCarasol from "../../components/animatedcarasol/Index";
export default function Index({ route, navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [show, setshow] = useState(false);
  const onChangeSearch = async (query) => {
    setSearchQuery(query);
  };
  const onSubmitEditing = async () => {
    const fetchData = await getMovieSearch(searchQuery);
    fetchData.length > 0 &&
      setResults([{ key: "empty-left" }, ...fetchData, { key: "empty-right" }]);
    fetchData.length == 0 && setResults([]);
    fetchData.length == 0 && setshow(true);
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
      {/* <View> */}
      {results.length > 0 ? (
        <AnimatedCarasol data={results} />
      ) : (
        <View style={styles.nomatch}>
          {show && <Text>No matches found.....</Text>}
        </View>
      )}
      {/* </View> */}
    </>
  );
}
