import CurrentWeather from "@/components/weather/CurrentWeather";
import styles from "./Home.module.scss";

import Head from "next/head";
import Forecast from "@/components/weather/Forecast";

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
      <main className={styles["page"]}>
        <div className={styles["grid-container"]}>
          <div className={styles["current-weather"]}>
            <CurrentWeather />
          </div>
          <div className={styles["forecast"]}>
            <Forecast />
          </div>
        </div>
      </main>
    </>
  );
}