import axios from "axios";

const DOMAIN = "http://localhost:3000";

export async function fetchCurrentWeatherData(coords: GeolocationCoordinates) {
  const response =  await axios.get(`/api/current-weather`, {
    params: {
      latitude: coords.latitude,
      longitude: coords.longitude,
    }
  } )
  return response.data;
}