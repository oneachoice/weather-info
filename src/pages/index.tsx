import { fontDoHyeon } from "@/fonts/dohyeon";
import styles from "./Home.module.scss";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WEATHER INFO</title>
        <meta
          name="description"
          content="This web app informs you of weather information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["page-container"]}>
        <CurrentWeather />
      </main>
    </>
  );
}

function CurrentWeather() {
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
