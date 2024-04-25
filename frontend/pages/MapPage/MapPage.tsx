import { View, StyleSheet } from "react-native";
import { Map } from "../../components/Map";
import { BottomTabs } from "../../components/BottomTabs";
import { SearchBar } from "../../components/SeachBar";

export const MapPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Map />
      <BottomTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
