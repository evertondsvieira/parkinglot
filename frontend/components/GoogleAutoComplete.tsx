import { RootStackList } from "../@types";
import { useLocationContext } from "../context/Location";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { IGooglePlacesDetails, ILocation } from "../models/Search";

export const GoogleSelect = () => {
  const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  const { setLocation } = useLocationContext();

  const navigation =
    useNavigation<NavigationProp<RootStackList, "Pesquisa" | "Mapa">>();

  const formatLocation = (details: IGooglePlacesDetails): ILocation => ({
    latitude: details.geometry.location.lat,
    longitude: details.geometry.location.lng,
  });

  const toggleLocation = (location: ILocation) => {
    navigation.navigate("Mapa");
    setLocation(location);
  };

  const handlePress = (
    _data: GooglePlaceData,
    detail: GooglePlaceDetail | null
  ) => {
    if (detail && detail.geometry && detail.geometry.location) {
      const location = formatLocation(detail);
      toggleLocation(location);
    }
  };

  return (
    <GooglePlacesAutocomplete
      placeholder="Pesquisar"
      fetchDetails={true}
      onPress={handlePress}
      query={{
        key: API_KEY,
        language: "pt-BR",
      }}
    />
  );
};
