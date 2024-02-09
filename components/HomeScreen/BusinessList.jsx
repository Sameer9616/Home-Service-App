import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Heading from "../CommonHeading/Heading";
import GlobalApi from "./GloablApi";
import BusinessListSmall from "./BusinessListSamll";
export default function BusinessList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((res) => {
      setList(res.businessLists);
    });
  };

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Heading text={`Latest Business`} isViewAll={true} />
      {/* Flat list */}
      <FlatList
        data={list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <BusinessListSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
