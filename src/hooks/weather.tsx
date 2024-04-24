import {
  CurrentWeatherData,
  ForecastData,
} from "@/interfaces/openweathermap-api";
import { fetchCurrentWeatherData, fetchForecastData } from "@/util/fetch";
import { getCoords } from "@/util/location";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useCurrentWeatherData() {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherData>();

  useInit(setCurrentWeatherData, fetchCurrentWeatherData);

  return currentWeatherData;
}

export function useForecastData() {
  const [forecastData, setForecastData] = useState<ForecastData>();

  useInit(setForecastData, fetchForecastData);

  return forecastData;
}

function useInit(
  dispatch: Dispatch<SetStateAction<any>>,
  fetchData: (coords: GeolocationCoordinates) => Promise<any>
) {
  useEffect(() => {
    (async () => {
      dispatch(await fetchData(await getCoords()));
    })();
  }, [dispatch, fetchData]);
}
