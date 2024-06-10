import React from "react";
import { ActivityIndicator, StyleSheet,} from "react-native";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { CustomMarker } from "./CustomMarker";
import { useLocationContext } from "../context/Location";
import { parkingLotData } from "../locations";
import { calculateDistance } from "../utils/calculateDistance";
import { Dialog } from "./Dialog";
import useStartRoute from "../hooks/useStartRoute";
import { ILocation } from "../@types";
import { toastMessage } from "../utils/toastMessage";
import { PROVIDER_GOOGLE } from "react-native-maps";

export const Map = () => {
  const { location: GoogleLocation, setTotalValue, totalValue } = useLocationContext();

  const mapRef = React.createRef<MapView>();

  const [location, setLocation] = React.useState<Region>({
    latitude: 0,
    longitude: 0,
    longitudeDelta: 0.01,
    latitudeDelta: 0.01,
  });

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const distance = calculateDistance(
    location.latitude,
    location.longitude,
    GoogleLocation.latitude,
    GoogleLocation.longitude
  );

  React.useEffect(() => {
    if (GoogleLocation) {
      const newRegion = {
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  }, [GoogleLocation]);

  const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY

  const origin = { latitude: location.latitude, longitude: location.longitude };

  const [selectedMarker, setSelectedMarker] = React.useState<boolean | null>(null);

  const { startRoute } = useStartRoute()

  const [locationMarker, setLocationMarker] = React.useState<ILocation>({
    latitude: 0,
    longitude: 0
  })
  const [locationValue, setLocationValue] = React.useState<number>(0)

  const handleStartRoute = () => {
    setSelectedMarker(null)
    startRoute(locationMarker.latitude, locationMarker.longitude)
  }

  const handleReserve = () => {
    if (totalValue < locationValue) {
      setSelectedMarker(null)
      return toastMessage({ title: "Saldo insuficiente", type: "error" })
    }

    handleStartRoute()
    setTotalValue(totalValue - locationValue)
    toastMessage({ title: "Reserva realizada com sucesso", type: "success" })
  }

  return (
    !origin ? (
      <ActivityIndicator size="small" color="red" />
    ) : (
      <>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          style={styles.map}
          customMapStyle={customMapStyle}
          region={location}
          showsUserLocation={true}
          toolbarEnabled={false}
          showsMyLocationButton={false}
        >
          <MapViewDirections
            origin={origin}
            destination={GoogleLocation}
            apikey={API_KEY ?? ''}
            strokeWidth={6}
            strokeColor="#4285F4"
          />
          {parkingLotData.map((item) => (
            <CustomMarker
              onSelectMarker={() => {
                setSelectedMarker(true); 
                setLocationMarker({ latitude: item.latitude, longitude: item.longitude})
                setLocationValue(item.price)
              }}
              id={item.id}
              location={{
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              price={item.price}
              message={item.name}
              image={item.image}
              key={item.id}
            />
          ))}
        </MapView>
        <Dialog
          visible={!!selectedMarker}
          onClose={() => setSelectedMarker(null)}
          onStartRoute={handleStartRoute}
          onReserve={handleReserve}
        />
      </>
    )
  );
};

const customMapStyle = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 30,
  },
});
