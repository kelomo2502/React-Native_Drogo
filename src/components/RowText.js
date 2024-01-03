import React from "react";
import { View, Text } from "react-native";

export default function RowText({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles,
}) {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
}
