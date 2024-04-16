import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { HTTPError } from "@/classes/custom-error";

// Initialize the process.env
dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { latitude, longitude } = getPosition(req);

      const currentWeatherData = await getCurrentWeatherData(
        latitude,
        longitude
      );

      res.send(currentWeatherData);
    } catch (error) {
      if (error instanceof HTTPError) {
        res.status(error.status).send(error.message);
      } else {
        console.error(error);
      }
    }
  }
}

function getPosition(req: NextApiRequest) {
  const { longitude, latitude } = req.query;

  if (!longitude || !latitude) {
    throw new HTTPError("위도 또는 경도 값을 얻지 못하였습니다.", 400);
  }

  if (typeof longitude === "string" && typeof latitude === "string") {
    return { longitude, latitude };
  } else {
    throw new HTTPError("잘못된 위도 값 또는 경도 값입니다.", 400);
  }
}

async function getCurrentWeatherData(latitude: string, longitude: string) {
  // 향후 변경 기능이 추가될 수 있음.
  const LANG = "kr";
  const UNITS = "metric";

  const apiResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_API_KEY}&lang=${LANG}&units=${UNITS}`
  );

  if (apiResponse.status >= 500) {
    throw new HTTPError("openweathermap api 서버 에러", apiResponse.status);
  } else if (apiResponse.status >= 400) {
    throw new Error("openweathermap api로 잘못된 요청을 하였습니다.");
  }

  const currentWeatherData = await apiResponse.json();

  return currentWeatherData;
}
