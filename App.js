import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/Currentweather";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import UpComingWeather from "./src/screens/UpComingWeather";
import OurChild from "./src/components/OurChild";

export default function App() {
  return (
    <View style={styles.container}>
      <UpComingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
