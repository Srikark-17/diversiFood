import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Card from "../../components/Card";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Italian</Text>
        <Card
          name={"Chicken Soup"}
          description={"Noodles with Chicken"}
          image={
            "https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
          prepTime={"2 hrs"}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    width: WP(81),
    height: HP(5.6),
    left: WP(1),
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderStyle: "solid",
    borderRadius: 12,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    bottom: HP(22),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    color: "#aeaeae",
    marginRight: 10,
    marginLeft: 8,
  },
  textInput: {
    width: WP(63),
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: HP(3),
    bottom: HP(23),
    right: WP(20),
  },
  categoryContainer: {
    right: WP(7),
    bottom: HP(20),
  },
  category: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: HP(2.3),
    marginVertical: HP(1),
  },
});
