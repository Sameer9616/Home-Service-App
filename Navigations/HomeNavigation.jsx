import { View, Text } from "react-native";
import React from "react";
import Home from "../components/HomeScreen/Home";
import BusinessListByCategory from "../components/BusinessListByCategories/BusinessListByCategory";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessDetailScreen from "../components/BusinessDeatilScreen/BusinessDetailScreen";
import Booking from "../components/BookingScreen/Booking";
const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="business-list" component={BusinessListByCategory} />
      <Stack.Screen name="business-detail" component={BusinessDetailScreen} />
      <Stack.Screen name="booking" component={Booking} />
    </Stack.Navigator>
  );
}
