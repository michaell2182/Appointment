import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Platform } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Booking") {
            iconName = "calendar";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: focused ? '#ffffff20' : 'transparent',
            }}>
              <Ionicons
                name={iconName}
                size={22}
                color="#FFFFFF"
              />
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: '#000000',
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 30,
          paddingHorizontal: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
          borderWidth: Platform.OS === 'ios' ? 1 : 0,
          borderColor: '#ffffff10',
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
