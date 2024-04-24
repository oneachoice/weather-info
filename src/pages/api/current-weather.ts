import type { NextApiRequest, NextApiResponse } from "next";
import { extractCoords, fetchCurrentWeather } from "@/control/openweathermap";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const coords = extractCoords(req);

    if (!coords) {
      res.status(400).send("위도, 경도 값을 받지 못했습니다");
      return;
    }

    res.send(
      (await fetchCurrentWeather(coords.latitude, coords.longitude)).data
    );
    
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
