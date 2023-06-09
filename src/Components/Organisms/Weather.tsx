import { useEffect, useState } from "react";
import type { DailyWeather, SUPPORTED_LOCATIONS } from "../../api";
import { LocationMap, getThisWeekWeather } from "../../api";
import WeatherCard from "../Molecules/WeatherCard";

export const Weather = (): JSX.Element => {
  const [currentLocation, setCurrentLocation] = useState<SUPPORTED_LOCATIONS>("Brisbane");
  const [weather, setWeather] = useState<DailyWeather[]>();

  const onLocationChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrentLocation(event.target.value as SUPPORTED_LOCATIONS);
  };

  useEffect(() => {
    const fetch = async(): Promise<void> => {
      const thisWeek = await getThisWeekWeather(currentLocation);
      setWeather(thisWeek);
    };

    fetch();
  }, [currentLocation]);

  return (
    <div className="container mx-auto mt-4">
      <p className="text-4xl font-extrabold pb-2">Shell Weather Forecast</p>
      <div className="flex flex-row">
        <label htmlFor="locations" className="basis-3/4 text-right pr-2">Select a Location</label>
        <select id="locations" className="basis-1/4 rounded-lg" onChange={onLocationChange}>
          {
            Object.keys(LocationMap).map((location) => {
              return <option key={location} value={location}>{location}</option>;
            })
          }
        </select>
      </div>
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
