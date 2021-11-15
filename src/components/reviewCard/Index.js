import React, { useState, useCallback } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { styles } from "./Styles";
export default function Index({ item }) {
  // console.log(item);
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };
  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.mainCardView}>
        <View>
          <View>
            <View style={styles.cardHeader}>
              <View style={styles.imageView}>
                <Image source={{ uri: item.avatar }} style={styles.image} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {item.author}
                </Text>
                <Text>{item.time.split("T")[0]}</Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                }}
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 4}
              >
                {item.review}
              </Text>
              {lengthMore ? (
                <Text onPress={toggleNumberOfLines} style={styles.seeMore}>
                  {textShown ? "Read less..." : "Read more..."}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
