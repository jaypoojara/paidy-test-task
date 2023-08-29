import { StyleSheet } from "react-native";
import { Colors } from "../../types/colors";

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    alignItems: "center",
  },
  text: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export { styles };
