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
import LongCard from "../../components/LongCard";

const ResultsScreen = ({ name, description, image, prepTime }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.alignment}>
        <Text style={styles.heading}>Results</Text>
      </View>
      <LongCard
        name={"Chicken Soup"}
        description={"Noodles with Chicken"}
        image={
          "https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
        prepTime={"2 hrs"}
      />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  alignment: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: WP(80),
    marginBottom: HP(12),
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: HP(3),
    top: HP(10),
  },
  category: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: HP(2.3),
    marginVertical: HP(1),
  },
  select: {
    width: WP(85),
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
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: HP(2.2),
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
});
