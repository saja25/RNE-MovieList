import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { styles } from "./Styles";
export default function Index({ item }) {
  return (
    <TouchableWithoutFeedback
    // style={{ width: "100%" }}
    >
      <View style={styles.mainCardView}>
        <View
        // style={{ flexDirection: "row", alignItems: "center" }}
        >
          {/* <View
          style={styles.subCardView}
          >
            <Image
              source={item.author_details.avatar_url}
              resizeMode="contain"
              style={{
                borderRadius: 25,
                height: 50,
                width: 50,
              }}
            />
          </View> */}
          <View style={{ padding: 4 }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                // fontFamily: Fonts.nunitoBold,
                textTransform: "capitalize",
              }}
            >
              {item.author}
            </Text>

            <Text
              style={{
                color: "grey",
                fontSize: 12,
              }}
              numberOfLines={5}
            >
              {item.review}
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            height: 25,
            backgroundColor: "red",
            borderWidth: 0,
            width: 25,
            marginLeft: -26,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "white" }}>text here</Text>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
