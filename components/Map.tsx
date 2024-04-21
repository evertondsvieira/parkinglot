import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { CustomMarker } from "./CustomMarker";
import { useLocationContext } from "../context/Location";
import { parkingLotData } from "../locations";

export const Map = () => {
  const { location: GoogleLocation, camera: CameraView } = useLocationContext();

  const [location, setLocation] = React.useState<Region>({
    latitude: 0,
    longitude: 0,
    longitudeDelta: 0.01,
    latitudeDelta: 0.01,
  });
  const [errorMsg, setErrorMsg] = React.useState<string>();

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
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

  const API_KEY = process.env.GOOGLE_API_KEY || "";

  const origin = { latitude: location.latitude, longitude: location.longitude };

  React.useEffect(() => {
    setLocation((prev) => {
      if (prev !== location) {
        return location;
      }
      return prev;
    });
  }, [CameraView]);

  return (
    <MapView
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
