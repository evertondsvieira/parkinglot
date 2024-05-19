import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Callout, Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "../style";

type ILocation = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export interface CustomMarkerProps {
  id: number;
  location: ILocation;
  message?: string;
  price: number;
  image: string;
  onSelectMarker: () => void
}

export const CustomMarker = React.memo((props: CustomMarkerProps) => {
  const { id, location, price, message, image, onSelectMarker } = props;

  const { marker, text } = styled

  const markerRef = React.useRef<any>(null);

  return (
    <Marker
      ref={markerRef}
      identifier={String(id)}
      key={id}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
      tracksViewChanges={false}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 54,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (markerRef.current?.isCalloutVisible()) {
              markerRef.current?.hideCallout();
            } else {
              markerRef.current?.showCallout();
            }
          }}
          style={{
            backgroundColor: marker.main,
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "auto",
            flexDirection: "row",
            padding: 4,
            borderRadius: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: text.main, fontWeight: "500" }}>
            R${price ?? 0}
          </Text>
        </TouchableOpacity>
        <View
          style={[styles.markerArrow, { borderBottomColor: marker.main }]}
        ></View>
      </View>
      <Callout
        onPress={onSelectMarker}
        style={{ height: 150, width: 160 }}
      >
        <Text
          style={{
            width: 160,
            height: 144,
            marginTop: -94,
            flex: 1,
          }}
        >
          <Image
            resizeMode={"cover"}
            style={{ width: 160, height: 150 }}
            source={{ uri: image }}
          />
        </Text>
        <Text style={styles.title}>{message}</Text>
        <Text>Iniciar rota</Text>
      </Callout>
    </Marker>
  );
});

const styles = StyleSheet.create({
  markerWrapper: {
    width: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  markerDot: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  markerArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 16,
    color: "#fff",
    borderRightWidth: 16,
    borderBottomWidth: 16,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "180deg" }],
    marginTop: -8,
  },
  callout: {
    width: 250,
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
});
