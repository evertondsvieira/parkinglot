import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useLocationContext } from "../context/Location";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../@types";

export const GoogleSelect = () => {
  const API_KEY = process.env.GOOGLE_API_KEY

  const { setLocation } = useLocationContext();

  const navigation =
    useNavigation<NavigationProp<RootStackList, "Pesquisa" | "Mapa">>();

  const formatLocation = (details: any) => ({
    latitude: details.lat,
    longitude: details.lng,
  });

  const toggleLocation = (details: any) => {
    navigation.navigate("Mapa");
    setLocation(formatLocation(details));
  };

  return (
    <GooglePlacesAutocomplete
      placeholder="Pesquisar"
      fetchDetails={true}
      onPress={(data, details) => {
        if (details && details.geometry && details.geometry.location) {
          const location = details.geometry.location;
          toggleLocation({
            latitude: location.lat,
            longitude: location.lng
          });
        }
      }}
      query={{
        key: API_KEY,
        language: "pt-BR",
      }}
    />
  );
};
