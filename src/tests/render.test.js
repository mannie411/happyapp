import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Joke from "../components/Joke";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    location: {
      pathname: "localhost:3000/",
    },
  }),
}));

it("should render joke ", () => {
  act(() => {
    render(<Joke type="single" joke="Funny" />, container);
  });
  expect(container.textContent).toBe("Funny");
});
