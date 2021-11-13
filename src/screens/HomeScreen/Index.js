import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { getMovies } from "../../api/Index";
import { styles } from "./Styles";
import Loading from "../../components/loading/Index";
import AnimatedCarasol from "../../components/animatedcarasol/Index";
import { useNavigation } from "@react-navigation/native";
export default function Index() {
  const navigation = useNavigation();
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setMovies([{ key: "empty-left" }, ...movies, { key: "empty-right" }]);
    };

    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }
  return (
    <>
      <AntDesign
        name="search1"
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      />

      <AnimatedCarasol data={movies} />
    </>
  );
}
