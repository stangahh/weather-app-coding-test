import { render } from "@testing-library/react";
import type { WeatherCardProps } from "./WeatherCard";
import WeatherCard from "./WeatherCard";

const mockProps: WeatherCardProps = {
  date: "2021-09-01",
  day: "Wednesday",
  feelsLike: 10,
  interpretation: "Good",
  rainfall: 10,
  rainfallUnit: "mm",
  tempUnit: "C",
  temp: 10,
  windspeed: 10,
  windspeedUnit: "km/h"
};

test("renders learn react link", () => {
  const { container } = render(<WeatherCard {...mockProps} />);
  expect(container.firstChild).toBeTruthy();
});
