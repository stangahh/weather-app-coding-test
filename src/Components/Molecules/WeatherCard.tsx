import type { DailyWeather } from "../../api";

export interface WeatherCardProps extends DailyWeather {}

export const WeatherCard = (props: WeatherCardProps): JSX.Element => {
  return (
    <div className="p-6 m-4 rounded-lg shadow border ">
        {
          Object.keys(props).map((key) => {
            const value = props[key as keyof WeatherCardProps];
            return <p key={key} className="mb-2">{key}: {value}</p>;
          })
        }
    </div>
  );
};

export default WeatherCard;
