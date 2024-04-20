import { CurrentWeatherData } from "@/interfaces/openweathermap-api";
import { fetchCurrentWeatherData } from "@/util/fetch";
import { getCoords } from "@/util/location";
import { useEffect, useState } from "react";

export default function useCurrentWeatherData() {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherData>();

  // Initilize the currentWeatherData
  useEffect(() => {
    (async () => {
      setCurrentWeatherData(await fetchCurrentWeatherData(await getCoords()));
    })();
  }, []);

  return currentWeatherData;
}
