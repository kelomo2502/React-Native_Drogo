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
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const Empty = () => {};
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
      <ImageBackground
        source={require("../../assets/thunderstorm.jpg")}
        style={styles.image}
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "#fff",
    fontSize: 20,
  },
  date: {
    color: "#fff",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});
