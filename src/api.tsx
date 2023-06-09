import axios from "axios";
import { WeatherCodeDescription, type WeatherRes } from "./api.types";

/**
 * Hardcoded locations in lieu of building full geolocation search functionality.
 */
export const LocationMap = {
  Brisbane: {
    latitude: -27.47,
    longitude: 153.03
  },
  Melbourne: {
    latitude: -37.81,
    longitude: 144.96
  },
  London: {
    latitude: 51.51,
    longitude: -0.13
  },
  "New York": {
    latitude: 40.71,
    longitude: -74.01
  },
  "San Francisco": {
    latitude: 37.77,
    longitude: -122.42
  }
};

export type SUPPORTED_LOCATIONS = keyof typeof LocationMap;

/** A nicer shape than what the API provides */
export interface DailyWeather {
  temp: number
  tempUnit: string
  feelsLike: number
  interpretation: string
  interpretationCode: number
  date: string
  day: string
  windspeed: number
  windspeedUnit: string
  rainfall: number
  rainfallUnit: string
}

export async function getThisWeekWeather(
  location: SUPPORTED_LOCATIONS
): Promise<DailyWeather[]> {
  const search = LocationMap[location];
  const today = new Date();
  const nextWeek = new Date().setDate(new Date().getDate() + 6);

  const start = today.toISOString().split("T")[0];
  const end = new Date(nextWeek).toISOString().split("T")[0];

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${search.latitude}&longitude=${search.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&start_date=${start}&end_date=${end}&timezone=Australia%2FSydney`;
    const { data } = await axios.get<WeatherRes>(url);

    const clean: DailyWeather[] = data.daily.time.map((time, index) => {
      const weatherCode = data.daily.weathercode[index];
      return {
        temp: data.daily.temperature_2m_max[index],
        tempUnit: data.daily_units.temperature_2m_max,
        feelsLike: data.daily.apparent_temperature_max[index],
        interpretation: WeatherCodeDescription.get(weatherCode)?.split(":")[0] ?? "Unknown",
        interpretationCode: weatherCode,
        date: time.split("T")[0],
        day: new Date(time).toLocaleDateString("en-AU", { weekday: "long" }),
        windspeed: data.daily.windspeed_10m_max[index],
        windspeedUnit: data.daily_units.windspeed_10m_max,
        rainfall: data.daily.precipitation_sum[index],
        rainfallUnit: data.daily_units.precipitation_sum
      };
    });

    return clean;
  } catch (err) {
    console.error(err);
    return [];
  }
}
