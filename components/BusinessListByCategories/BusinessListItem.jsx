import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AllService from "../../Utils/AllService";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function BusinessListItem({ business, booking }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={AllService.Container}
      onPress={() =>
        navigation.push(`business-detail`, {
          business: business,
        })
      }
    >
      <Image source={{ uri: business?.images?.url }} style={AllService.Img} />
      <View style={AllService.subContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            color: "grey",
          }}
        >
          {business?.contactPerson}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {business?.name}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "grey" }}>
          <Entypo name="location-pin" size={24} color="#ab31ff" />
          {business?.address}
        </Text>

        {/* booking */}
        {booking?.id ? (
          <View>
            <Text
              style={{
                backgroundColor: "#f5d6ff",
                color: "#7722b2",
                borderRadius: 3,
                padding: 3,
                paddingTop: 0,
                paddingHorizontal: 10,
                width: 70,
              }}
            >
              {booking.bookingStatus}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 5,
                gap: 3,
              }}
            >
              <Ionicons name="calendar-outline" size={20} color="#853bba" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "grey",
                  gap: 2,
                }}
              >
                {booking.date} at {booking.time}
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
