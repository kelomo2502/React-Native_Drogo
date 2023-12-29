import React from "react";
import { View, Text } from "react-native";

export default function OurChild({ message }) {
  return (
    <View style={{ width: 200, height: 200, backgroundColor: "red" }}>
      <Text>{message}</Text>
    </View>
  );
}
