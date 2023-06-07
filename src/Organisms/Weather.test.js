import { render } from "@testing-library/react";
import Weather from "./Weather";

test("renders learn react link", () => {
  const { container } = render(<Weather />);
  expect(container.firstChild).toBeTruthy();
});
