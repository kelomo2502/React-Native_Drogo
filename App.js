import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/components/Currentweather";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import UpComingWeather from "./src/components/UpComingWeather";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<CurrentWeather />*/}
      <UpComingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
