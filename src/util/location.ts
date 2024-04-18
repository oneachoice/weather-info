export async function getCoords() {
  const coords: GeolocationCoordinates =
    await new Promise<GeolocationCoordinates>(executor);

  return coords;

  function executor(
    resolve: (value: GeolocationCoordinates) => void,
    reject: (reason?: any) => void
  ) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (positionError) => reject(positionError)
    );
  }
}
