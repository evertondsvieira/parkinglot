import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../@types";

export const SearchBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackList, "Pesquisa">>()
  
  const toggleNavigation = () => navigation.navigate("Pesquisa")

  return (
    <TouchableOpacity style={styles.container} onPress={toggleNavigation}>
      <FontAwesome5 name="search" size={24} color="#000" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 999,
    position: "absolute",
    zIndex: 70,
  },
  iconContainer: {
    flex: 1,
  },
  icon: {
    position: "absolute",
    right: 13,
    top: 13
  },
});
