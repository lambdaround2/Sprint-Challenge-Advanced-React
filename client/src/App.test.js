import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("should render App.js", () => {
  render(<App />);
});

test("should render a header 'Baseball App'", () => {
  const { getByText } = render(<App />);

  getByText(/Women's World Cup/i);
});
