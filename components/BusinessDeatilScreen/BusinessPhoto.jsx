import React from "react";
import { View, Image, Text } from "react-native";
import BusinessDetailHeading from "../CommonHeading/BusinessDetailHeading";

export default function BusinessPhoto({ business }) {
  return (
    <View>
      <BusinessDetailHeading text={`Photos`} />
      <View>
        <Image
          source={{ uri: business?.images?.url }}
          style={{ width: "50%", height: 120, borderRadius: 15, margin: 7 }}
        />
      </View>
    </View>
  );
}
