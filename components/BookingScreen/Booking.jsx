import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import GloablApi from "../HomeScreen/GloablApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../BusinessListByCategories/BusinessListItem";
import { useNavigation } from "@react-navigation/native";
export default function Booking() {
  const { user } = useUser();
  const [bookingList, setBookingList] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getUserBooking();
  }, []);
  const userEmailAddress = user?.primaryEmailAddress.emailAddress;
  const navigation = useNavigation();

  // Get User Bookings
  const getUserBooking = () => {
    setloading(true);
    GloablApi.getUserBooking(userEmailAddress).then((res) => {
      console.log(res);
      setBookingList(res.bookings);
      setloading(false);
    });
  };
  return (
    <View style={{ padding: 20 }}>
      <View style={{ display: "flex", flexDirection: "row", gap: 5, left: 10 }}>
        <FontAwesome name="bookmark" size={33} color="black" />
        <Text
          style={{ fontSize: 26, fontWeight: "bold" }}
        >{` My Booking`}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={bookingList}
          onRefresh={() => getUserBooking()}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.businessList} booking={item} />
          )}
        />
      </View>
    </View>
  );
}
