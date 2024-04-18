const DOMAIN = "http://localhost:3000";

export async function fetchCurrentWeatherData(coords: GeolocationCoordinates) {
  return await fetch(
    `${DOMAIN}/api/current-weather?latitude=${coords.latitude}&longitude=${coords.longitude}`
  );
}