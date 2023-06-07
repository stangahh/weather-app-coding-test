import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const copyrightEl = screen.getByText(/copyright/i);
  expect(copyrightEl).toBeInTheDocument();
});
