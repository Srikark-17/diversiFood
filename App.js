import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import SplashScreen from "./screens/AuthScreens/SplashScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
