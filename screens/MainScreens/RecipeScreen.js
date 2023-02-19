import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";

const RecipeScreen = () => {
  // TODO: Replace all of this information with information from the Tasty API
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }}
        style={styles.image}
      />
      <View style={styles.alignment}>
        <Text style={styles.heading}>Chicken Soup</Text>
      </View>
      <View style={styles.line} />
      <ScrollView style={styles.scroll}>
        <View style={styles.subcontainer}>
          <Text style={styles.category}>Items</Text>
          <Text style={styles.item}>• Chicken</Text>
          <Text style={styles.item}>• Chicken Broth</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.category}>Directions</Text>
          <Text style={styles.item}>• Boil water for 20 minutes</Text>
          <Text style={styles.item}>• Cool water for 10 minutes</Text>
          <Text style={styles.item}>• Eat and enjoy!</Text>
        </View>
      </ScrollView>

      {/* TODO: Redirect to Dashboard */}
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    width: WP(100),
    height: HP(30),
  },
  alignment: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: WP(80),
    marginBottom: HP(3),
    left: WP(8),
  },
  heading: {
    fontWeight: "bold",
    fontSize: HP(3),
    top: HP(2),
  },
  category: {
    fontWeight: "600",
    fontSize: HP(2.3),
    marginVertical: HP(1),
  },
  subcontainer: {
    justifyContent: "flex-start",
    left: WP(8.3),
  },
  scroll: {
    height: HP(30),
    width: WP(100),
  },
  item: {
    fontWeight: "500",
    fontSize: HP(2),
  },
  line: {
    width: WP(100),
    borderWidth: "1px",
    borderColor: "#aeaeae",
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
    bottom: HP(15),
    justifyContent: "center",
    left: WP(10),
  },
  submitButtonText: {
    fontSize: HP(2.2),
    color: "#fff",
    fontWeight: "bold",
  },
});
