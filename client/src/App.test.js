import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should render App.js", () => {
  render(<App />);
});

test("should render a header 'Baseball App'", () => {
  const { getByText } = render(<App />);

  getByText(/Women's World Cup/i);
});
