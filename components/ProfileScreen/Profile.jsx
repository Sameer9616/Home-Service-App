import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { useClerk } from "@clerk/clerk-react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AllService from "../../Utils/AllService";
import { useNavigation } from "@react-navigation/native";
export default function Profile() {
  const { user } = useUser();
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();
  const { signOut } = useClerk();

  const profileMenu = [
    {
      id: 1,
      name: "Booking History",
      icon: "book",
    },
    {
      id: 2,
      name: "Contact Us",
      icon: "mail",
    },
    {
      id: 3,
      name: "Reward",
      icon: "Trophy",
    },
    {
      id: 4,
      name: "Logout",
      icon: "logout",
    },
  ];
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item.icon === "book") {
      navigation.navigate("booking");
    } else if (item.icon === "logout") {
      handleLogout();
    }
  };

  const homeNaviagtion = () => {
    navigation.navigate("home");
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const onBtnClick = () => {
    Linking.openURL(
      "mailto:" +
        "sameerkrexpert@gmail.com" +
        "?subject=I am looking for Service&&body=Hi There,"
    );
  };

  return (
    <View>
      <View style={AllService.profileDiv}>
        <View style={AllService.profileText}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              top: 20,
              color: "#ffff",
            }}
          >
            Profile
          </Text>
        </View>
        <View style={AllService.profileImgDiv}>
          <Image
            source={{ uri: user.imageUrl }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 99,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            {user.fullName}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>

      {/* Icons Sections */}
      <View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            left: 40,
            marginBottom: 20,
          }}
          onPress={() => {
            homeNaviagtion();
          }}
        >
          <View style={AllService.profileIcons}>
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={35}
              color="white"
            />
          </View>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}> Dashboard</Text>
        </TouchableOpacity>
        <View>
          <FlatList
            data={profileMenu}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 25,
                  alignItems: "center",
                  left: 40,
                  marginBottom: 30,
                }}
                onPress={() => handleItemClick(item)}
              >
                <View style={AllService.profileIcons}>
                  <AntDesign name={item.icon} size={35} color="white" />
                </View>
                <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Contact Us here  */}
      {selectedItem && selectedItem.icon === "mail" && (
        <View>
          <Text>{onBtnClick()}</Text>
        </View>
      )}
    </View>
  );
}
