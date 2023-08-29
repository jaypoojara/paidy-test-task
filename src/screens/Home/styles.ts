import { StatusBar, StyleSheet } from "react-native";
import { Colors } from "../../types/colors";

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 15,
    flex: 1,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10,
  },
  flatListContent: {
    flexGrow: 1,
  },
  inputContainer: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    flexDirection: "row",
    borderRadius: 15,
  },
  input: {
    flex: 1,
    fontWeight: "500",
  },
});

export { styles };
