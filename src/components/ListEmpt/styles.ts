import { StyleSheet } from "react-native";
import { Colors } from "../../types/colors";

// Styles for the components
const Styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.lable,
  },
});

export { Styles };
