import Image from "next/image";
import styles from "./Forecast.module.scss";
import { useForecastData } from "@/hooks/weather";
import { ForecastItemData } from "@/interfaces/openweathermap-api";
import { getFullTime, getMeridiem, getWeekDay } from "@/util/date";
import { fontDoHyeon } from "@/fonts/dohyeon";

export default function Forecast() {
  const forecastData = useForecastData();

  if (!forecastData) {
    return <div className={styles["forecast"]}>No data</div>;
  }

  return (
    <div className={styles["forecast"]} style={fontDoHyeon.style}>
      <ul className={styles["forecast__list"]}>
        {forecastData.list.map((item) => {
          return <ForecastItem key={item.dt} forecastItemData={item} />;
        })}
      </ul>
    </div>
  );
}

function ForecastItem(props: { forecastItemData: ForecastItemData }) {
  const { forecastItemData } = props;

  const temp = Math.round(forecastItemData.main.temp);
  const feels_like = Math.round(forecastItemData.main.feels_like);
  const probability = forecastItemData.pop * 100;
  const date = new Date(forecastItemData.dt * 1000);

  return (
    <li className={styles["forecast__item"]}>
      <div className={styles["item__head"]}>
        <div className={styles["date"]}>
          <span className={styles["date__day"]}>{`${getWeekDay(date)}`}</span>
          <span className={styles["date__time"]}>{`${getFullTime(date)}`}</span>
        </div>
      </div>
      <div className={styles["item__body"]}>
        <Image
          src={require(`@/assets/openweathermap/${forecastItemData.weather[0].icon}.svg`)}
          alt={`${forecastItemData.weather[0].main}`}
          className={styles["img"]}
        />
        <p className={styles["desc"]}>
            {forecastItemData.weather[0].description}
        </p>
      </div>
      <div className={styles["item__tail"]}>
        <table>
          <tbody>
            <tr>
              <td>기온</td>
              <td>{temp}°</td>
            </tr>
            <tr>
              <td>체감온도</td>
              <td>{feels_like}°</td>
            </tr>
            <tr>
              <td>강수확률</td>
              <td>{probability}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
}
