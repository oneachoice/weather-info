import axios from "axios";
import dotenv from "dotenv";
import { NextApiRequest } from "next";

dotenv.config();

export async function fetchCurrentWeather(latitude: string, longitude: string) {
  const LANG = "kr";
  const UNITS = "metric";

  return await axios.get("/data/2.5/weather", {
    baseURL: "https://api.openweathermap.org",
    params: {
      lat: latitude,
      lon: longitude,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      lang: LANG,
      units: UNITS,
    },
  });
}

export function extractCoords(req: NextApiRequest) {
  const { longitude, latitude } = req.query;

  if (typeof longitude === "string" && typeof latitude === "string") {
    return { latitude, longitude };
  }
}