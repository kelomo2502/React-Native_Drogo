import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function IconText({iconName, iconColor, bodyText}) {
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={populationText}>{bodyText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})