import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Card from "../../components/Card";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";

const DashboardScreen = () => {
  const data = [
    {
      id: "1",
      title: "Recommended For You",
    },
    {
      id: "2",
      title: "Italian",
    },
    {
      id: "3",
      title: "Chinese",
    },
    {
      id: "4",
      title: "Mexican",
    },
    {
      id: "5",
      title: "Indian",
    },
  ];

  const Category = ({ title }) => (
    <View>
      <Text style={styles.category}>{title}</Text>
      {/* TODO: Make this redirect to recipescreen with the necessary information needed */}
      <TouchableOpacity activeOpacity={1}>
        <Card
          name={"Chicken Soup"}
          description={"Noodles with Chicken"}
          image={
            "https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
          prepTime={"2 hrs"}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Category title={item.title} />}
        keyExtractor={(item) => item.id}
        style={{ width: WP(96), left: WP(4) }}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    marginVertical: HP(2),
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
    fontWeight: "bold",
    fontSize: HP(3),
    bottom: HP(23),
    right: WP(20),
  },
  category: {
    fontWeight: "600",
    fontSize: HP(2.3),
  },
});
