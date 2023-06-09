import { render } from "@testing-library/react";
import type { WeatherCardProps } from "./WeatherCard";
import WeatherCard from "./WeatherCard";

const mockProps: WeatherCardProps = {
  date: "2021-09-01",
  day: "Wednesday",
  feelsLike: 10,
  interpretation: "Good",
  rainfall: 11,
  rainfallUnit: "mm",
  tempUnit: "C",
  temp: 12,
  windspeed: 13,
  windspeedUnit: "km/h"
};

describe("WeatherCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { container } = render(<WeatherCard {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the day", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("Wednesday", { exact: false })).toBeVisible();
  });

  it("renders the feels like", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("10", { exact: false })).toBeInTheDocument();
  });

  it("renders the interpretation", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("Good", { exact: false })).toBeInTheDocument();
  });

  it("renders the rainfall", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("11", { exact: false })).toBeInTheDocument();
  });

  it("renders the rainfall unit", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("mm", { exact: false })).toBeInTheDocument();
  });

  it("renders the temp", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    console.log(getByText)
    expect(getByText("12", { exact: false })).toBeInTheDocument();
  });

  it("renders the temp unit", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("C", { exact: false })).toBeInTheDocument();
  });

  it("renders the windspeed", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("13", { exact: false })).toBeInTheDocument();
  });

  it("renders the windspeed unit", () => {
    const { getByText } = render(<WeatherCard {...mockProps} />);
    expect(getByText("km/h", { exact: false })).toBeInTheDocument();
  });
});
