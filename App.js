import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import PreferencesScreen from "./screens/AuthScreens/PreferencesScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import SplashScreen from "./screens/AuthScreens/SplashScreen";
import DashboardScreen from "./screens/MainScreens/DashboardScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // !!!!!! PROVIDER TAG HAS TO BE AROUND THE APP RENDERING
  return (
    <Provider>
      <DashboardScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
