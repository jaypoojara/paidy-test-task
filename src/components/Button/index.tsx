import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { IButton } from "../../types/interface";
import { styles } from "./styles";

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
