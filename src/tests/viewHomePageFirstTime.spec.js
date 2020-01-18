import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import nock from "nock";
import { TRACKS } from "./fixtures/tracks";
import Index from "../pages";

afterEach(cleanup);

it("fetch successfully tracks", async () => {
  nock("https://myBackEndApi.com")
    .get(`/anything`)
    .reply(200, TRACKS);

  const { findByText } = render(<Index />);
  TRACKS.collection.forEach(track => {
    expect(await findByText(track.name)).toBeInTheDocument();
  });
});
