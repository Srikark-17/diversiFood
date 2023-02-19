import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import PreferencesScreen from "./screens/AuthScreens/PreferencesScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import SplashScreen from "./screens/AuthScreens/SplashScreen";
import DashboardScreen from "./screens/MainScreens/DashboardScreen";
import ProfileScreen from "./screens/MainScreens/ProfileScreen";
import ResultsScreen from "./screens/MainScreens/ResultsScreen";
import RecipeScreen from "./screens/MainScreens/RecipeScreen";
import CameraScreen from './screens/MainScreens/CameraScreen'

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Main = createMaterialBottomTabNavigator();
const Auth = createStackNavigator();
const Dashboard = createStackNavigator();
const OCRRecognition = createStackNavigator();
const Profile = createStackNavigator();

const inactiveColor = "#fff";
const themecolor = "#E35F21";
const tabcolor = "#000";

const ProfileNavigator = () => {
  return (
    <Profile.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="Profile"
    >
      <Profile.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Profile.Navigator>
  );
};

const OCRRecognitionNavigator = () => {
  return (
    <OCRRecognition.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="OCR"
    >
      <OCRRecognition.Screen
        name="OCR"
        component={CameraScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </OCRRecognition.Navigator>
  );
};

const DashboardNavigator = () => {
  return (
    <Dashboard.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="Dashboard"
    >
      <Dashboard.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Dashboard.Navigator>
  );
};

function MainNavigator() {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Dashboard Navigator"
        activeColor={tabcolor}
        inactiveColor={inactiveColor}
        barStyle={{ backgroundColor: `${themecolor}`}}
        shifting={false}
      >
        <Main.Screen
          name="Dashboard Navigator"
          component={DashboardNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="view-dashboard-variant"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Main.Screen
          name="OCR Navigator"
          component={OCRRecognitionNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="camera"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Main.Screen
          name="Profile Navigator"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  )
}

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Auth.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="Splash" component={SplashScreen} options={{}} />
        <Auth.Screen name="Login" component={LoginScreen} options={{}} />
        <Auth.Screen name="Register" component={RegisterScreen} options={{}} />
      </Auth.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // !!!!!! PROVIDER TAG HAS TO BE AROUND PREFERENCES SCREEN
  // return (
  //   // <Provider>
  //   <RecipeScreen />
  //   // {/* </Provider> */}
  // );

  let user = true

  if (!user) {
    return <AuthNavigator/>
  }

  return <MainNavigator/>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
