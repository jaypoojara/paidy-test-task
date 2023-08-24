import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ITodoComponent } from "../types/interface";
import { colors } from "../types/colors";

// TodoItem component receives props from parent component
const TodoItem = ({
  onPressTodo,
  onPressRemove,
  title,
  index,
}: ITodoComponent) => {
  return (
    // TouchableOpacity to make the entire item pressable
    <TouchableOpacity
      testID="todoItemTestID"
      style={styles.container}
      onPress={() => onPressTodo && onPressTodo(index)}
    >
      {/* Colored circle icon */}
      <View style={styles.icon} />

      {/* Todo item title */}
      <Text style={styles.text}>{title}</Text>

      {/* Remove button */}
      <TouchableOpacity onPress={() => onPressRemove && onPressRemove(index)}>
        <Text style={styles.removeText}>REMOVE</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoItem;

// Styles for the components
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 15,
    backgroundColor: colors.white,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.lable,
    fontWeight: "500",
    fontSize: 15,
    flex: 1,
    paddingHorizontal: 10,
  },
  removeText: {
    color: colors.lable,
    fontWeight: "500",
  },
});
