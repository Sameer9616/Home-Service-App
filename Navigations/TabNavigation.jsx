import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Booking from "../components/BookingScreen/Booking";
import Profile from "../components/ProfileScreen/Profile";
import { FontAwesome } from "@expo/vector-icons";
import Style from "../Utils/Style";
import HomeNavigation from "./HomeNavigation";
import BookingNaviagtion from "./BookingNavigation";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ab31ff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Booking"
        component={BookingNaviagtion}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, marginTop: -7 }}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, marginTop: -7 }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
