import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "./GloablApi";
import HomeStyle from "../../Utils/HomeStyle";
import Heading from "../CommonHeading/Heading";
export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then((res) => {
      setSlider(res?.sliders);
    });
  };
  return (
    <View>
      <Text style={HomeStyle.headingSlider}>Offer For You</Text>
      {/* Flat list */}
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={HomeStyle.sliderImg}
            />
          </View>
        )}
      />
    </View>
  );
}
