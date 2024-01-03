import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/Currentweather";
import UpComingWeather from "./src/screens/UpComingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
