import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import HomeStyle from "../../Utils/HomeStyle";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    navigation.navigate(`business-list`, {
      category: searchText,
    });
    setSearchText("");
  };
  const navigation = useNavigation();
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={HomeStyle.container}>
        {/* Profile Section */}
        <View style={HomeStyle.profileMainContainer}>
          <View style={HomeStyle.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={HomeStyle.userImg} />
            <View>
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{ right: 25 }}
            onPress={() => navigation.push(`booking`)}
          >
            <FontAwesome name="bookmark-o" size={27} color="#ffff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar  Section*/}
        <View style={HomeStyle.serachBarContainer}>
          <TextInput
            placeholder="search"
            style={HomeStyle.textInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity onPress={handleSearch}>
            <FontAwesome
              name="search"
              size={24}
              color="#ab31ff"
              style={HomeStyle.searchBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}
