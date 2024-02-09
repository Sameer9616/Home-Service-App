import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";
import Heading from "../CommonHeading/Heading";
export default function Home() {
  return (
    <ScrollView>
      <View>
        {/* Header */}
        <Header />
        {/* Slider */}
        <View style={{ padding: 20 }}>
          <Slider />
        </View>
        {/* Categories */}
        <Categories />
        {/* BUsinessList */}
        <BusinessList />
      </View>
    </ScrollView>
  );
}
