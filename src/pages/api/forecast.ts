import { extractCoords, fetchForecast } from "@/control/openweathermap";
import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
  } else {
    if (req.method === "GET") {
      const coords = extractCoords(req);

      if (!coords) {
        res.status(400).send("위도, 경도 값을 받지 못했습니다");
        return;
      }

      res.send(
        (await fetchForecast(coords.latitude, coords.longitude)).data
      );
    } else {
      res.status(405).send("Method Not Allowed");
    }
  }
}
