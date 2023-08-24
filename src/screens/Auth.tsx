import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  SafeAreaView,
  Linking,
  AppState,
  StyleSheet,
  Platform,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { StackActions, useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { colors } from "../types/colors";
import { routesKey } from "../types/routesKey";

const Auth = () => {
  const appState = useRef(AppState.currentState);

  const navigation = useNavigation();

  const [enrolledLevel, setEnrolledLevel] = useState<number>(0);

  useEffect(() => {
    // Initialize the authentication settings
    init();

    // Add an AppState change listener to re-initialize on foregrounding
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // Re-initialize when the app is brought to the foreground
        init();
      }
      appState.current = nextAppState;
    });

    // Clean up the listener when the component unmounts
    return () => {
      subscription.remove();
    };
  }, []);

  const init = async () => {
    // Get the enrolled authentication level
    const getEnrolledLevel = await LocalAuthentication.getEnrolledLevelAsync();

    // Update the state with the enrolled level
    setEnrolledLevel(getEnrolledLevel);
  };

  const onClickGoToSetting = () => {
    // Open the device's security settings
    if (Platform.OS === "ios") {
      Linking.openURL("App-Prefs://");
    } else {
      Linking.sendIntent("android.settings.SECURITY_SETTINGS");
    }
  };

  const onClickVerify = () => {
    // Perform authentication using biometrics
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Please authenticate",
      fallbackLabel: "Enter your device PIN to continue:",
    });
    auth.then((res) => {
      // Navigate to the Home screen if authentication succeeds
      if (res.success) {
        navigation.dispatch(StackActions.replace(routesKey.Home));
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Set Authentication to Proceed</Text>
      {enrolledLevel === 0 ? (
        // Display a button to navigate to security settings
        <Button onPress={onClickGoToSetting} title="Go to Settings" />
      ) : (
        // Display a button to verify authentication
        <Button onPress={onClickVerify} title="Verify" />
      )}
    </SafeAreaView>
  );
};

export default Auth;

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: colors.white,
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
