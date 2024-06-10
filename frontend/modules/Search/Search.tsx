import React from "react";
import { StyleSheet, View } from "react-native";
import { GoogleSelect } from "../../components/GoogleAutoComplete";

export const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <GoogleSelect />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
