import React from "react";
import Home from "../components/HomeScreen/Home";
import BusinessListByCategory from "../components/BusinessListByCategories/BusinessListByCategory";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessDetailScreen from "../components/BusinessDeatilScreen/BusinessDetailScreen";
import Booking from "../components/BookingScreen/Booking";
const Stack = createStackNavigator();
export default function BookingNaviagtion() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="booking" component={Booking} />
      <Stack.Screen name="business-detail" component={BusinessDetailScreen} />
    </Stack.Navigator>
  );
}
