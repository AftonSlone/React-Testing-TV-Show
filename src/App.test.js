import React from "react";
import { render, cleanup, waitForElement, wait } from "@testing-library/react";
import App from "./app";
import { seasonData } from "./seasonData";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

afterEach(cleanup);

test("fetches season data and renders", async () => {
  mockFetchShow.mockResolvedValueOnce(seasonData);
  const { getByTestId } = render(<App />);

  expect(getByTestId("fetching")).toHaveTextContent(/fetching data/i);

  const showNameH1 = await waitForElement(() => getByTestId("show"));

  expect(showNameH1).toHaveTextContent(/stranger things/i);

  expect(mockFetchShow).toHaveBeenCalledTimes(1);
});
