import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { colors } from "../types/colors";

const ListEmpt = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>ToDos not found!</Text>
    </View>
  );
};

export default ListEmpt;

// Styles for the components
const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.lable,
  },
});
