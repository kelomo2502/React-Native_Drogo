import React from "react";
import CurrentWeather from "./src/screens/Currentweather";
import UpComingWeather from "./src/screens/UpComingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Current"} component={CurrentWeather} />
        <Tab.Screen name={"Upcoming"} component={UpComingWeather} />
        <Tab.Screen name={"City"} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
