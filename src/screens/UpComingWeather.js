import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_text: "2023 - 12 - 27  1661875100",
    main: {
      temp_min: 297.84,
      temp_max: 445.21,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_text: "2023 - 12 - 27  1661875200",
    main: {
      temp_min: 1696.74,
      temp_max: 296.11,
    },
    weather: [
      {
        main: "Cloud",
      },
    ],
  },
  {
    dt_text: "2023 - 12 - 27 -1661875300",
    main: {
      temp_min: 166.34,
      temp_max: 198.0,
    },
    weather: [
      {
        main: "Windy",
      },
    ],
  },
];

export default function UpComingWeather() {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/thunderstorm.jpg")}
        style={image}
      >
        <View>
          <Text>UpComingWeather</Text>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_text}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});
