import { StyleSheet } from "react-native";
import { Colors } from "../../types/colors";

// Styles for the components
const Styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 15,
    backgroundColor: Colors.white,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.lable,
    fontWeight: "500",
    fontSize: 15,
    flex: 1,
    paddingHorizontal: 10,
  },
  removeText: {
    color: Colors.lable,
    fontWeight: "500",
  },
});

export { Styles };
