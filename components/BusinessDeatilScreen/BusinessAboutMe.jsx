import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BusinessDetailHeading from "../CommonHeading/BusinessDetailHeading";

export default function BusinessAboutMe({ business }) {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    business && (
      <View>
        <BusinessDetailHeading text={`About Me`} />
        <Text
          style={{ fontWeight: "400", fontSize: 15, lineHeight: 24 }}
          numberOfLines={isReadMore ? 10 : 4}
        >
          {business?.about}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text style={{ color: "#ab32ff", fontSize: 15 }}>
            {isReadMore ? `Read Less` : `Read More..`}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
