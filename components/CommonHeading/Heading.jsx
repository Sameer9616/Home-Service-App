import { View, Text } from "react-native";
import React from "react";

import Style from "../../Utils/Style";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View style={Style.HeadingContainer}>
      <Text style={Style.heading}>{text}</Text>
      {isViewAll && (
        <Text style={{ right: 20, fontWeight: "bold" }}>View All</Text>
      )}
    </View>
  );
}
