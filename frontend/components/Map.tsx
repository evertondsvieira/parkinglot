import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { CustomMarker } from "./CustomMarker";
import { useLocationContext } from "../context/Location";
import { parkingLotData } from "../locations";
import { calculateDistance } from "../utils/calculateDistance";

export const Map = () => {
  const { location: GoogleLocation } = useLocationContext();

  const mapRef = React.createRef<MapView>();
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const [location, setLocation] = React.useState<Region>({
    latitude: -25.457016,
    longitude: -49.235818,
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

  const formatDistance = () => {
    if (distance < 1) {
      const meters = Math.round(distance * 1000);
      return `${meters} metros`;
    }
    return `${distance.toFixed(2)} km`;
  };

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

  const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY || "";

  const origin = { latitude: location.latitude, longitude: location.longitude };

  return (
    <MapView
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
        apikey={API_KEY}
        strokeWidth={6}
        strokeColor="#4285F4"
      />
      {parkingLotData.map((item) => (
        <CustomMarker
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
        />
      ))}
    </MapView>
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
