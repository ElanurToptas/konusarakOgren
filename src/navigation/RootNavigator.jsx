import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SpeakScreen from "../screens/SpeakScreen";
import ReportScreen from "../screens/ReportScreen";

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Speak"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#959595",
        tabBarIcon: ({size,color}) => {
          let iconName;

          if (route.name === "Speak") {
            iconName = "mic";
          } else if (route.name === "Report") {
            iconName = "stats-chart";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Speak" component={SpeakScreen} 
      options={{ headerShown: false }}

      />

      <Tab.Screen
        name="MiddleAction"
        component={SpeakScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                top: -20, 
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../../assets/konus.jpg")}
            ></Image>
          ),
        }}
      />

      <Tab.Screen name="Report" component={ReportScreen} 
         options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default RootNavigator;
