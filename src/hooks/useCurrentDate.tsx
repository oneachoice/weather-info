import { useEffect, useState } from "react";

export default function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    window.setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  return currentDate
}