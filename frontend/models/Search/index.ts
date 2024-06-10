export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface IGooglePlacesDetails {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}
