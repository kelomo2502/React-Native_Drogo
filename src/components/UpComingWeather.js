import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

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

const Item = (props) => {
  const { dt_text, min, max, condition } = props;
  return (
    <View>
      <Feather name="sun" size={50} color="white" />
      <Text>{dt_text}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
};

export default function UpComingWeather() {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>UpComingWeather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
