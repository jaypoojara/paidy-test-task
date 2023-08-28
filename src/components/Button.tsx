import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../types/colors";
import { IButton } from "../types/interface";

// Define the Button component using destructuring for props
const Button = ({ onPress, title, radius = 100 }: IButton) => {
  return (
    // TouchableOpacity is a touchable wrapper that changes opacity when pressed
    <TouchableOpacity
      testID="buttonTestID"
      style={[styles.bottonView, { borderRadius: radius }]}
      onPress={onPress}
    >
      <Text style={styles.bottonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// Styles for the components
const styles = StyleSheet.create({
  bottonView: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  bottonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});
