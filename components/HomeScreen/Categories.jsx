import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import GlobalApi from "./GloablApi";
import Heading from "../CommonHeading/Heading";
import HomeStyle from "../../Utils/HomeStyle";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    GlobalApi.getCategories().then((res) => {
      setCategories(res?.categories || []);
    });
  };

  return (
    <View>
      <Heading text={`Categories`} isViewAll={true} />
      {/* Flat list */}
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={HomeStyle.IconContianer}
              onPress={() =>
                navigation.push("business-list", {
                  category: item.name,
                })
              }
            >
              <View style={HomeStyle.icon}>
                {item.icon && item.icon.url ? (
                  <>
                    <Image
                      source={{ uri: item.icon.url }}
                      style={{ width: 50, height: 50 }}
                    />
                  </>
                ) : (
                  <Text style={{ fontWeight: "bold" }}>No Icon Available</Text>
                )}
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
