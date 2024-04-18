import { CurrentWeatherData } from "@/interfaces/openweathermap-api";
import { fetchCurrentWeatherData } from "@/util/fetch";
import { getCoords } from "@/util/location";
import { useCallback, useEffect, useState } from "react";

export default function useCurrentWeatherData(): [
  CurrentWeatherData | undefined,
  refresh: () => void
] {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherData>();

  const refresh = useCallback(() => {
    (async () => {
      const response = await fetchCurrentWeatherData(await getCoords());

      if (response.status < 300 && response.status >= 200) {
        setCurrentWeatherData(await response.json());
      } else {
        console.error("Can't fetch the current-weather-data");
      }
    })();
  }, []);

  // Initilize the currentWeatherData
  useEffect(() => {
    refresh();
  }, [refresh]);

  return [currentWeatherData, refresh];
}
