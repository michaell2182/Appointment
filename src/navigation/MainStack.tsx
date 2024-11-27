import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import QRCodeScreen from "../screens/QRCodeScreen";
import { useAuth } from "../contexts/AuthContext";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  const { user } = useAuth();
  const showQRCode = user?.userType === 'business' || user?.userType === 'professional';

  console.log('Current user:', user);
  console.log('Show QR Code:', showQRCode);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Booking") {
            iconName = "calendar";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "QR Code") {
            iconName = "qr-code";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {showQRCode && <Tab.Screen name="QR Code" component={QRCodeScreen} />}
    </Tab.Navigator>
  );
}
