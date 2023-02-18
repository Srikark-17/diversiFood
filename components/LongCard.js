import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";

const LongCard = () => {
  return (
    <View style={styles.foodContainer}>
      <TouchableOpacity onPress={() => auth.signOut()}>
        <View style={styles.individualFoodContainer}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            }}
            style={styles.individualFoodImage}
          />

          <View style={styles.foodTextContainer}>
            <View>
              <Text style={styles.placeName}>Chicken soup</Text>
              <Text numberOfLines={1} style={styles.foodItem}>
                HI{" "}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LongCard;

const styles = StyleSheet.create({
  individualFoodContainer: {
    width: WP(39.13),
    height: HP(16.29),
    borderRadius: 12,
    marginLeft: WP(2.42),
    justifyContent: "flex-start",
    marginBottom: HP(1.12),
    backgroundColor: "#D3D3D3",
  },
  individualFoodContainerList: {
    width: WP(80),
    height: HP(16.29),
    borderRadius: 12,
    marginLeft: WP(2.42),
    justifyContent: "flex-start",
    marginBottom: HP(1.12),
    backgroundColor: "#fff",
  },
  individualFoodImage: {
    width: WP(39.13),
    height: HP(10.04),
    alignSelf: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  foodTextContainer: {
    marginLeft: WP(1.93),
    marginTop: HP(1.12),
    paddingLeft: WP(1.2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeName: {
    fontFamily: "Poppins",
    fontSize: HP(1.56),
    lineHeight: HP(2),
  },
  foodItem: {
    color: "#aeaeae",
    fontFamily: "Poppins",
    fontSize: HP(1.45),
    lineHeight: HP(1.9),
    width: WP(25),
  },
});
