import styles from "./CurrentWeather.module.scss";

import { fontDoHyeon } from "@/fonts/dohyeon";
import { getFullDate, getFullTime } from "@/util/date";
import { useCurrentWeatherData } from "@/hooks/weather";
import Image from "next/image";

export default function CurrentWeather() {
  const currentWeatherData = useCurrentWeatherData();

  let imgSrc = require("@/assets/openweathermap/not-available.svg");
  let temperature: number | string = "-";
  let date: Date | null = null;

  if (currentWeatherData) {
    imgSrc = require(`@/assets/openweathermap/${currentWeatherData.weather[0].icon}.svg`);
    temperature = Math.round(currentWeatherData.main.temp);
    date = new Date(currentWeatherData.dt * 1000);
  }

  return (
    <div className={styles["current-weather"]} style={fontDoHyeon.style}>
      <div className={styles["datetime"]}>
        <p className={styles["datetime__date"]}>
          {date ? getFullDate(date) : ""}
        </p>
        <p className={styles["datetime__time"]}>
          {date ? getFullTime(date) : ""}
        </p>
      </div>
      <div className={styles["weather-symbol"]}>
        <Image
          className={styles["weather-icon"]}
          src={imgSrc}
          alt="weather icon"
        />
        <div className={styles["temperature"]}>
          {temperature}
          <span className={styles["temperature__unit"]}>℃</span>
        </div>
      </div>
      <div className={styles["weather-info"]}>
        <table>
          <tbody>
            <tr>
              <td>위치</td>
              <td>{currentWeatherData?.name}</td>
            </tr>
            <tr>
              <td>날씨</td>
              <td>{currentWeatherData?.weather[0].description}</td>
            </tr>
            <tr>
              <td>체감온도</td>
              <td>{currentWeatherData?.main.feels_like}℃</td>
            </tr>
            <tr>
              <td>습도</td>
              <td>{currentWeatherData?.main.humidity}%</td>
            </tr>
            <tr>
              <td>풍향</td>
              <td>{currentWeatherData?.wind.deg}°</td>
            </tr>
            <tr>
              <td>풍속</td>
              <td>{currentWeatherData?.wind.speed}m/s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
