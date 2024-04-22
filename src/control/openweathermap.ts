import axios from "axios";
import dotenv from "dotenv";
import { NextApiRequest } from "next";

dotenv.config();

const LANG = "kr";
const UNITS = "metric";
const BASE_URL = "https://api.openweathermap.org";

export async function fetchCurrentWeather(latitude: string, longitude: string) {
  return await axios.get("/data/2.5/weather", {
    baseURL: BASE_URL,
    params: {
      lat: latitude,
      lon: longitude,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      units: UNITS,
      lang: LANG,
    },
  });
}

export async function fetchForecast(latitude: string, longitude: string) {
  return await axios.get("/data/2.5/forecast", {
    baseURL: BASE_URL,
    params: {
      lat: latitude,
      lon: longitude,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      units: UNITS,
      cnt: 10,
      lang: LANG,
    },
  });
}

export function extractCoords(req: NextApiRequest) {
  const { longitude, latitude } = req.query;

  if (typeof longitude === "string" && typeof latitude === "string") {
    return { latitude, longitude };
  }
}
