import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Style from "./Utils/Style";
import Login from "./components/LoginScreen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import TabNavigation from "./Navigations/TabNavigation";

export default function App() {
  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_Zmx1ZW50LWdyaXp6bHktOTcuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} hidden={false} />

        {/* Sign In Component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>

        {/* Sign out component  */}
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
