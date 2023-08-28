// Import necessary modules from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routesKey } from "./types/routesKey";

// Create a stack navigator instance
const Stack = createNativeStackNavigator();

// Import your screen components
import Auth from "./screens/Auth";
import Home from "./screens/Home";

// Main App component
export default function App() {
  return (
    // Wrap the app with the NavigationContainer to manage navigation state
    <NavigationContainer>
      {/* Define your navigation stack */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Define screens within the stack */}
        <Stack.Screen name={routesKey.Auth} component={Auth} />
        <Stack.Screen name={routesKey.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
