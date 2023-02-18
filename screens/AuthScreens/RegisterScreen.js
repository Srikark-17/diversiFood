import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Text,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import { auth } from "../../firebase";

function RegisterScreen() {
  // TODO: add google login
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  const handleSubmit = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return auth.currentUser.updateProfile({
          displayName: fullName,
        });
      })
      .catch((error) => Alert.alert(`${error}`));
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // TODO: add navigation to Preferences Screen
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Full Name"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#999"
              style={styles.textColor}
              onChangeText={(text) => setFullName(text)}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#999"
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.textColor}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              style={styles.textColor}
              placeholderTextColor="#999"
              textContentType="password"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => handleSubmit()}>
          <View style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </View>
        </TouchableOpacity>
        <StatusBar barStyle="light-content" />
        <View style={styles.haveAccountContainer}>
          <Text style={styles.haveAccountText}>Have an account?</Text>
          {/* TODO: add navigation login */}
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    bottom: HP(6),
  },
  text: {
    textAlign: "center",
    fontSize: HP(6.5),
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Poppins",
  },
  formContainer: {
    paddingHorizontal: WP(8),
  },
  textInput: {
    paddingLeft: WP(4),
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: WP(85),
    height: HP(7),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#aeaeae",
    marginTop: HP(1),
    fontFamily: "Poppins",
  },
  textColor: {
    color: "#ccc",
    width: WP(80),
    height: HP(5),
    fontFamily: "Poppins",
  },
  registerButton: {
    borderRadius: 12,
    backgroundColor: "#E35F21",
    height: HP(7),
    shadowOffset: { width: WP(0), height: HP(0.24) },
    shadowColor: "black",
    shadowOpacity: 0.25,
    alignItems: "center",
    top: HP(4),
    justifyContent: "center",
  },
  registerButtonText: {
    fontSize: HP(2.2),
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    top: HP(6),
    alignItems: "center",
  },
  haveAccountText: {
    color: "#000",
    fontSize: HP(1.7),
    fontFamily: "Poppins",
  },
  loginText: {
    color: "#E35F21",
    paddingLeft: WP(1),
    fontSize: HP(1.7),
    fontWeight: "bold",
  },
});

export default RegisterScreen;