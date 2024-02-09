import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AllService from "../../Utils/AllService";
import { Entypo } from "@expo/vector-icons";
import Heading from "../CommonHeading/Heading";
import BusinessPhoto from "./BusinessPhoto";
import BusinessAboutMe from "./BusinessAboutMe";
import BookingModal from "./BookingModal";
import { FontAwesome } from "@expo/vector-icons";

export default function BusinessDetailScreen() {
  const navigation = useNavigation();
  const [business, setBusiness] = useState({});
  const [showModal, setShowModal] = useState(false);
  const param = useRoute().params;

  useEffect(() => {
    param && setBusiness(param.business);
  }, [param]);
  const num = Math.floor(Math.random() * 90) + 10;

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <View>
      <ScrollView style={{ height: "90%" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={AllService.detailbtn}
          >
            <Ionicons name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <Image
            source={{ uri: business?.images?.url }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={AllService.detailInfoContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              {business?.name}
            </Text>
            <View style={AllService.detailSubContainer}>
              <Text
                style={{ fontWeight: "800", fontSize: 23, color: "#ad7ace" }}
              >
                {business?.contactPerson} 🌟
              </Text>
              <Text
                style={{
                  color: "#7722b2",
                  backgroundColor: "#f4d6fe",
                  padding: 5,
                  borderRadius: 5,
                  fontWeight: "500",
                }}
              >
                {business?.category?.name}
              </Text>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 17, color: "grey" }}>
              <Entypo name="location-pin" size={25} color="#ab31ff" />
              {business.address}
            </Text>

            {/* Horizontal Line */}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "grey",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>

            {/* Business About Me */}
            <BusinessAboutMe business={business} />

            {/* Horizontal Line */}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "grey",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>

            {/* BUsiness photos */}
            <BusinessPhoto business={business} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{ display: "flex", flexDirection: "row", margin: 5, gap: 8 }}
      >
        <View style={AllService.messageBtn}>
          <FontAwesome
            name="rupee"
            size={27}
            color="black"
            style={{ fontWeight: "bold", paddingTop: 5 }}
          />
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {" "}
            {`${num}XX`}
          </Text>
        </View>
        <TouchableOpacity
          style={AllService.bookingBtn}
          onPress={() => setShowModal(true)}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "#ffffff",
              fontSize: 17,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
      {/* Booking Screen Modal */}
      <Modal animationType="slide" visible={showModal}>
        <BookingModal businessId={business.id} hideModal={hideModal} />
      </Modal>
    </View>
  );
}
