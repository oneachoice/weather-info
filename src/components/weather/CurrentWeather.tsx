import styles from "./CurrentWeather.module.scss";

import { fontDoHyeon } from "@/fonts/dohyeon";

export default function CurrentWeather() {
  return (
    <div className={styles["current-weather"]} style={fontDoHyeon.style}>
      <div className={styles["datetime"]}>
        <p className={styles["datetime__date"]}>2024-04-16</p>
        <p className={styles["datetime__time"]}>
          <span>오후</span> 12:06
        </p>
      </div>
      <div className={styles["weather-symbol"]}>
        <img
          className={styles["weather-icon"]}
          src="https://openweathermap.org/img/wn/11d@2x.png"
        />
        <div className={styles["temperature"]}>
          21
          <span className={styles["temperature__unit"]}>℃</span>
        </div>
      </div>
    </div>
  );
}
