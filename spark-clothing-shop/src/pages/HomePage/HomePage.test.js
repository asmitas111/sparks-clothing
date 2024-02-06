import React from "react"; 
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage component", () => {
  it("renders the Carousel component", () => {
    render(<HomePage />);
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });

  it("renders four product images", () => {
    render(<HomePage />);
    expect(screen.getAllByAltText(/prod/).length).toBe(4);
  });
});

