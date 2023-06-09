import { FaCloud, FaCloudRain, FaCloudShowersHeavy, FaCloudSun, FaQuestion, FaSmog, FaSnowflake, FaSun } from "react-icons/fa";
import type { DailyWeather } from "../../api";

/**
 * My icon set is incomplete for the amount of weather outcomes, but I at least cover every case in
 * the switch
 */
const determineIcon = (weather: number): JSX.Element => {
  const size = 50;
  switch (weather) {
    case 0:
    case 1:
      return <FaSun size={size}/>; // "Mainly clear"
    case 2:
    case 80:
    case 81:
      return <FaCloudSun size={size}/>; // "Partly cloudy"
    case 3:
      return <FaCloud size={size}/>; // "Overcast"
    case 45:
    case 48:
      return <FaSmog size={size}/>; // "Rime fog"
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 82:
      return <FaCloudRain size={size}/>; // "Drizzle: Dense"
    case 56:
    case 57:
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <FaSnowflake size={size}/>; // "Snow showers: Heavy"
    case 65:
    case 95:
    case 96:
    case 99:
      return <FaCloudShowersHeavy size={size}/>; // "Thunderstorm: Heavy
    default:
      return <FaQuestion size={size}/>;
  }
};

export interface WeatherCardProps extends DailyWeather {}

export const WeatherCard = (props: WeatherCardProps): JSX.Element => {
  return (
    <div className="flex flex-row flex-wrap p-6 m-4 rounded-lg shadow border">
      <div className="w-full sm:w-1/5 grid self-center">
        <span className="block justify-self-center">{determineIcon(props.interpretationCode)}</span>
      </div>
      <div className="w-full sm:w-2/5">
        <span className="text-base md:text-xl mr-2">{props.temp}{props.tempUnit}</span>
        <span className="text-xs">Feels like {props.feelsLike}{props.tempUnit}</span>
        <p className="text-xl md:text-2xl">{props.interpretation}</p>
      </div>
      <div className="w-full sm:w-2/5">
        <div className="block">
          <span className="text-sm font-bold mr-2">{new Date(props.date).toLocaleDateString("en-au", { dateStyle: "long" })}</span>
          <span className="text-xs">{props.day}</span>
        </div>
        <div className="block">
          <span className="text-sm">Rainfall: {props.rainfall}{props.rainfallUnit}</span>
        </div>
        <div className="block">
          <span className="text-sm">Windspeed: {props.windspeed}{props.windspeedUnit}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
