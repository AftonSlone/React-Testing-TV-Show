import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";
import { episodesData } from "../episodesData";

test("renders episodes without errors", () => {
  render(<Episodes episodes={[]} />);
});

test("rerenders correctly when passing in episode data", () => {
  const { rerender } = render(<Episodes episodes={[]} />);
  let episodeObject = screen.queryAllByTestId("episode-test");
  expect(episodeObject).toStrictEqual([]);

  rerender(<Episodes episodes={episodesData} />);
  episodeObject = screen.queryAllByTestId("episode-test");
  expect(episodeObject).toHaveLength(8);
});
