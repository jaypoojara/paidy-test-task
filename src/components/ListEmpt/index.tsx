import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const ListEmpt = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>ToDos not found!</Text>
    </View>
  );
};

export default ListEmpt;
