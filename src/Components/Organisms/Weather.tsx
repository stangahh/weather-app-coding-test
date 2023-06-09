import { useEffect, useState } from "react";
import type { DailyWeather } from "../../api";
import { getThisWeekWeather } from "../../api";
import WeatherCard from "../Molecules/WeatherCard";

export const Weather = (): JSX.Element => {
  const [weather, setWeather] = useState<DailyWeather[]>();

  useEffect(() => {
    const fetch = async(): Promise<void> => {
      const thisWeek = await getThisWeekWeather("Brisbane");
      setWeather(thisWeek);
    };

    fetch();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <p className="text-4xl font-extrabold">Shell Weather Forecast</p>
      { weather != null && (
        <div className="transition-all grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            weather.map((weather, index) => {
              return <WeatherCard key={index} {...weather}></WeatherCard>;
            })
          }
        </div>
      )}
    </div>
  );
};

export default Weather;
