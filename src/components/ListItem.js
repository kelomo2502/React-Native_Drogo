import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ListItem(props) {
  const { dt_text, min, max, condition } = props;
  const { item, temp, date } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={date}>{dt_text}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
