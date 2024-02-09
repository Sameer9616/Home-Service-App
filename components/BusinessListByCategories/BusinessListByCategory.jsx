import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../HomeScreen/GloablApi"; // Fixed import statement
import BusinessListItem from "./BusinessListItem";
import HeadingBackButton from "../CommonHeading/HeadingBackButton";

export default function BusinessListByCategory() {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    route.params && getBusinessByCategory();
  }, [route.params.category]);

  // Business List by category
  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(route.params.category).then((res) => {
      setData(res.businessLists);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <HeadingBackButton title={route.params.category} />
      </View>
      {/* Flat list */}
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View>
            <BusinessListItem business={item} />
          </View>
        )}
      />
    </View>
  );
}
