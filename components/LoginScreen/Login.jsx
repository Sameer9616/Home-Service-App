import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Style from "../../Utils/Style";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <View style={Style.loginImg}>
        <Image
          source={require("./../../assets/LogIn.jpg")}
          style={{
            height: 350,
            left: 49,
          }}
        />
      </View>

      <View style={Style.subContainer}>
        <Text style={{ fontSize: 27, color: "#ffff", textAlign: "center" }}>
          Let's Find{" "}
          <Text style={{ fontWeight: "900" }}>
            Professional Cleaning and Repairs
          </Text>{" "}
          Service
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#ffff",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services near you which deliver you a Professional
          Service and Best Customer Service!
        </Text>
        <TouchableOpacity style={Style.btn} onPress={onPress}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "bold",
              color: "#ab31ff",
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
