export interface WeatherRes {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
  daily_units: DailyUnits
  daily: Daily
}

export interface CurrentWeather {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  is_day: number
  time: string
}

export interface DailyUnits {
  time: string
  weathercode: string
  temperature_2m_max: string
  temperature_2m_min: string
  apparent_temperature_max: string
  apparent_temperature_min: string
  sunrise: string
  sunset: string
  uv_index_max: string
  uv_index_clear_sky_max: string
  precipitation_sum: string
  rain_sum: string
  showers_sum: string
  snowfall_sum: string
  precipitation_hours: string
  precipitation_probability_max: string
  windspeed_10m_max: string
  windgusts_10m_max: string
  winddirection_10m_dominant: string
}

export interface Daily {
  time: string[]
  weathercode: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  apparent_temperature_max: number[]
  apparent_temperature_min: number[]
  sunrise: string[]
  sunset: string[]
  uv_index_max: number[]
  uv_index_clear_sky_max: number[]
  precipitation_sum: number[]
  rain_sum: number[]
  showers_sum: number[]
  snowfall_sum: number[]
  precipitation_hours: number[]
  precipitation_probability_max: number[]
  windspeed_10m_max: number[]
  windgusts_10m_max: number[]
  winddirection_10m_dominant: number[]
}

/** WMO Weather interpretation codes (WW) */
export const WeatherCodeDescription = new Map([
  [0, "Clear sky"],
  [1, "Mainly clear"],
  [2, "Partly cloudy"],
  [3, "Overcast"],
  [45, "Fog"],
  [48, "Rime fog"],
  [51, "Drizzle: Light"],
  [53, "Drizzle: Moderate"],
  [55, "Drizzle: Dense"],
  [56, "Freezing Drizzle: Light"],
  [57, "Freezing Drizzle: Dense"],
  [61, "Rain: Slight"],
  [63, "Rain: Moderate"],
  [65, "Rain: Heavy"],
  [66, "Freezing Rain: Light"],
  [67, "Freezing Rain: Heavy"],
  [71, "Snow fall: Slight"],
  [73, "Snow fall: Moderate"],
  [75, "Snow fall: Heavy"],
  [77, "Snow grains"],
  [80, "Rain showers: Slight"],
  [81, "Rain showers: Moderate"],
  [82, "Rain showers: Violent"],
  [85, "Snow showers: Slight"],
  [86, "Snow showers: Heavy"],
  [95, "Thunderstorm: Slight"],
  [96, "Thunderstorm: Moderate"],
  [99, "Thunderstorm: Heavy"]
]);
