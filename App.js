import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/Currentweather";
import UpComingWeather from "./src/screens/UpComingWeather";
import City from "./src/screens/City";


export default function App() {
  return (
    <View style={styles.container}>
      <City/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
