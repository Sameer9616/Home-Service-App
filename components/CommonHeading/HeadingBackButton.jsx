import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function HeadingBackButton({ title }) {
  const navigation = useNavigation();

  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
        {title}
      </Text>
    </View>
  );
}
