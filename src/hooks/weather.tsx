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

  useInit(setCurrentWeatherData);

  return currentWeatherData;
}

export function useForecastData() {
  const [forecastData, setForecastData] = useState<ForecastData>();

  useInit(setForecastData);

  return forecastData;
}

function useInit(dispatch: Dispatch<SetStateAction<any>>) {
  useEffect(() => {
    (async () => {
      dispatch(await fetchCurrentWeatherData(await getCoords()));
    })();
  }, [dispatch]);
}
