import React from "react"; 
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AboutUsPage from "./AboutUsPage";

describe("AboutUsPage", () => {
  it("renders the correct information", () => {
    render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Spark Clothing - Clothes that will talk on your behalf.")).toBeInTheDocument();
    expect(screen.getByText("The History")).toBeInTheDocument();
  });
});
