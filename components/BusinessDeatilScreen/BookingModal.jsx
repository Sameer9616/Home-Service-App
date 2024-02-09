import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AllService from "../../Utils/AllService";
import Heading from "../CommonHeading/Heading";
import DateTimePicker from "@react-native-community/datetimepicker";
import GloablApi from "../HomeScreen/GloablApi";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function BookingModal({ businessId, hideModal }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    getTime();
  }, []);

  const handleChangeDate = (event, selectedDate) => {
    if (event.type === "set") {
      setSelectedDate(selectedDate || new Date());
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const handleOnPress = () => {
    setOpen(!open);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: `${i}:00 AM`,
      });
      timeList.push({
        time: `${i}:30 PM`,
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: `${i}:00 PM`,
      });
      timeList.push({
        time: `${i}:30 PM`,
      });
    }
    setTimeList(timeList);
  };

  // create Booking Method
  const createNewBooking = () => {
    if (!selectedTime || !note) {
      ToastAndroid.show("Please select all fields", ToastAndroid.SHORT);
      return;
    }
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      date: selectedDate.toLocaleDateString(undefined, { weekday: "long" }),
      time: selectedTime,
      address: note,
      businessId: businessId,
    };
    console.log(data);
    GloablApi.createBooking(data).then((res) => {
      console.log(res);
      ToastAndroid.show("Booking Created SucessFully", ToastAndroid.LONG);
      hideModal();
    });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 7,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => hideModal()}>
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Booking</Text>
        </View>

        {/* Date Input Section */}
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              left: 10,
              marginTop: 20,
            }}
          >
            <FontAwesome5 name="calendar-day" size={24} color="black" />
            <Heading text={`Select Date`} />
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <TouchableOpacity
              onPress={handleOnPress}
              style={AllService.dateContainer}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#b66feb" }}
              >
                Change Date
              </Text>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={open}>
              <View>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={selectedDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  minimumDate={Date.now()}
                  onChange={handleChangeDate}
                />
                <TouchableOpacity onPress={handleOnPress}></TouchableOpacity>
              </View>
            </Modal>

            {/* Selected Date */}
            <View style={AllService.selectDateContainer}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#ffff" }}
              >
                {selectedDate.toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        {/* Selected Day */}
        <View style={AllService.selectDayContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffff",
              alignItems: "center",
            }}
          >
            {selectedDate.toLocaleDateString(undefined, { weekday: "long" })}
          </Text>
        </View>

        {/* Time List */}
        <View style={{ marginTop: 20 }}>
          <View style={{ display: "flex", flexDirection: "row", left: 9 }}>
            <AntDesign name="clockcircle" size={24} color="black" />
            <Heading text={`Select Time Slot`} />
          </View>
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={[
                    selectedTime === item.time
                      ? AllService.selectedTime
                      : AllService.unselectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* Note Section */}
        <View style={{ paddingTop: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              left: 12,
              marginBottom: 10,
            }}
          >
            <FontAwesome name="address-card" size={24} color="black" />
            <Heading text={`Address`} />
          </View>
          <TextInput
            placeholder="address here.."
            style={AllService.noteTextArea}
            numberOfLines={2}
            multiline={true}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        {/* Confirmation Button */}
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => createNewBooking()}
        >
          <Text style={AllService.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
