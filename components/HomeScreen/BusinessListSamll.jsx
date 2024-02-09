import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyle from "../../Utils/HomeStyle";
import { useNavigation } from "@react-navigation/native";
export default function BusinessListSamll({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={HomeStyle.businessContainer}
      onPress={() =>
        navigation.push(`business-detail`, {
          business: business,
        })
      }
    >
      <Image
        source={{ uri: business?.images?.url }}
        style={HomeStyle.businessImg}
      />
      <View style={HomeStyle.infoContainer}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          {business.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            marginBottom: 3,
            color: "grey",
          }}
        >
          {business.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "#ab31ff",
            backgroundColor: "#c4accc",
            padding: 3,
            borderRadius: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 7,
          }}
        >
          {business?.category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
