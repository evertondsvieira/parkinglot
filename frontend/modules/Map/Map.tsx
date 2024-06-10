import { View, StyleSheet } from "react-native";
import { Map as ExpoMap } from "../../components/Map";
import { BottomTabs } from "../../components/BottomTabs";
import { SearchBar } from "../../components/SeachBar";

export const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ExpoMap />
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
