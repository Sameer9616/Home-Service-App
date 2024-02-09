import { View, Text } from "react-native";
import React from "react";
import Style from "../../Utils/Style";

export default function BusinessDetailHeading({ text, isViewAll = false }) {
  return (
    <View style={Style.BusinessDetailHeading}>
      <Text style={Style.detailHeading}>{text}</Text>
      {isViewAll && (
        <Text style={{ right: 20, fontWeight: "bold" }}>View All</Text>
      )}
    </View>
  );
}
