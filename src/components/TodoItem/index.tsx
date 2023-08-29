import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ITodoComponent } from "../../types/interface";
import { Styles } from "./styles";

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
      style={Styles.container}
      onPress={() => onPressTodo && onPressTodo(index)}
    >
      {/* Colored circle icon */}
      <View style={Styles.icon} />

      {/* Todo item title */}
      <Text style={Styles.text}>{title}</Text>

      {/* Remove button */}
      <TouchableOpacity onPress={() => onPressRemove && onPressRemove(index)}>
        <Text style={Styles.removeText}>REMOVE</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoItem;
