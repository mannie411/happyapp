import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Joke from "../components/Joke";

const url = "https://v2.jokeapi.dev/joke/Any?idRange=42";

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

it("should fetch and render joke", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(url),
    })
  );

  await act(async () => {
    render(<Joke joke={json.joke} />, container);
  });

  expect(container.textContent).toBe(
    "Debugging is like being the detective in a crime movie where you're also the murderer at the same time."
  );

  global.fetch.mockRestore();
});
