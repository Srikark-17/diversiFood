import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import { Checkbox } from "react-native-paper";

const PreferencesScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.heading}>Preferences</Text>
      <Text style={styles.subheading}>
        Enter any preferences you have with your diet
      </Text>
      <Text style={styles.category}>Allergies</Text>
      <View>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>Peanut</Text>
      </View>
      <Text style={styles.category}>Diets</Text>
      {/* TODO: push all of the user's preferences to firestore */}
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PreferencesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: HP(3),
    paddingLeft: WP(10),
    bottom: HP(30),
  },
  subheading: {
    fontFamily: "Poppins",
    fontSize: HP(1.7),
    paddingLeft: WP(10),
    bottom: HP(30),
    color: "#E35F21",
    width: WP(80),
  },
  category: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: HP(2.3),
    paddingLeft: WP(10),
    bottom: HP(25),
  },
  submitButton: {
    borderRadius: 12,
    backgroundColor: "#E35F21",
    height: HP(7),
    shadowOffset: { width: WP(0), height: HP(0.24) },
    shadowColor: "black",
    shadowOpacity: 0.25,
    width: WP(80),
    alignItems: "center",
    top: HP(12),
    left: WP(10),
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: HP(2.2),
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
});
