import React from "react";
import { Text, View } from "react-native";
import { Styles } from "./styles";

const ListEmpt = () => {
  return (
    <View style={Styles.emptyContainer}>
      <Text style={Styles.emptyText}>ToDos not found!</Text>
    </View>
  );
};

export default ListEmpt;
