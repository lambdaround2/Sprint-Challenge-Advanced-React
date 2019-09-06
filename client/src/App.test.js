import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import NavBar from "./components/NavBar";

test("should render App.js", () => {
  render(<App />);
});

test("should render a header 'Baseball App'", () => {
  const { getByText } = render(<NavBar />);

  getByText(/Women's World Cup/i);
});
