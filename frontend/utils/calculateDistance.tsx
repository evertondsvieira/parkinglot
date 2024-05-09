export const calculateDistance = (
  startLatitude: number,
  startLongitude: number,
  endLatitude: number,
  endLongitude: number
) => {
  const earthRadiusInKilometers = 6371;
  const latitudeDifferenceInRadians = toRadians(endLatitude - startLatitude);
  const longitudeDifferenceInRadians = toRadians(endLongitude - startLongitude);
  const startLatitudeInRadians = toRadians(startLatitude);
  const endLatitudeInRadians = toRadians(endLatitude);

  const haversineFormula =
    Math.sin(latitudeDifferenceInRadians / 2) *
      Math.sin(latitudeDifferenceInRadians / 2) +
    Math.sin(longitudeDifferenceInRadians / 2) *
      Math.sin(longitudeDifferenceInRadians / 2) *
      Math.cos(startLatitudeInRadians) *
      Math.cos(endLatitudeInRadians);
  const angularDistance =
    2 *
    Math.atan2(Math.sqrt(haversineFormula), Math.sqrt(1 - haversineFormula));
  const distanceInKilometers = earthRadiusInKilometers * angularDistance;

  return distanceInKilometers;
};

const toRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};
