import useCurrentDate from "@/hooks/useCurrentDate";
import styles from "./CurrentWeather.module.scss";

import { fontDoHyeon } from "@/fonts/dohyeon";
import { getFullDate, getFullTime } from "@/util/date";

export default function CurrentWeather() {
  const currentDate = useCurrentDate();
  const fullDate = getFullDate(currentDate);
  const fullTime = getFullTime(currentDate);

  return (
    <div className={styles["current-weather"]} style={fontDoHyeon.style}>
      <div className={styles["datetime"]}>
        <p className={styles["datetime__date"]}>{fullDate}</p>
        <p className={styles["datetime__time"]}>{fullTime}</p>
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