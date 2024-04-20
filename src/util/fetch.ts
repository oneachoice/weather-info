import axios from "axios";

export async function fetchCurrentWeatherData(coords: GeolocationCoordinates) {
  const response = await axios.get(`/api/current-weather`, {
    params: {
      latitude: coords.latitude,
      longitude: coords.longitude,
    },
  });

  if (response.status === 200) {
    return response.data;
  } else {
    console.error(`${response.status} : ${response.statusText}`);
  }
}
