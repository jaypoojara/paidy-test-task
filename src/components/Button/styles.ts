import { StyleSheet } from "react-native";
import { Colors } from "../../types/colors";

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

export { styles };
