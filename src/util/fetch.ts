import axios, { AxiosResponse } from "axios";

export async function fetchCurrentWeatherData(coords: GeolocationCoordinates) {
  const response = await axios.get(`/api/current-weather`, {
    params: {
      latitude: coords.latitude,
      longitude: coords.longitude,
    },
  });

  return handleResponse(response);
}

export async function fetchForecastData(coords: GeolocationCoordinates) {
  const response = await axios.get(`/api/forecast`, {
    params: {
      latitude: coords.latitude,
      longitude: coords.longitude,
    },
  });

  return handleResponse(response);
}

function handleResponse(response: AxiosResponse) {
  if (response.status === 200) {
    return response.data;
  } else {
    console.error(`${response.status} : ${response.statusText}`);
  }
}
