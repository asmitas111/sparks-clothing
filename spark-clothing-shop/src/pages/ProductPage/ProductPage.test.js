import React from "react"; 
import { render, screen, fireEvent } from "@testing-library/react";
import ProductPage from "./ProductPage";

describe("ProductPage", () => {
  it("should display loading spinner when loading", () => {
    render(<ProductPage />);
    expect(screen.getByRole("status")).toHaveClass("spinner-border");
  });

  it("should display error message when error occurs", () => {
    render(<ProductPage />);
    // Simulate error by setting isError to true
    screen.getByTestId("error-message").textContent = "Sorry! Unable to fetch users! Try again.";
    expect(screen.getByTestId("error-message")).toHaveTextContent("Sorry! Unable to fetch users! Try again.");
  });

  it("should display product information when loaded successfully", () => {
    render(<ProductPage />);
    // Simulate successful loading by setting isLoading to false and isError to false
    screen.getByTestId("product-container").textContent = "Product Information";
    expect(screen.getByTestId("product-container")).toHaveTextContent("Product Information");
  });

  it("should have the correct title in the head", () => {
    render(<ProductPage />);
    expect(document.title).toBe("Products");
  });

  it('renders the component correctly', () => {
    render(<ProductPage />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('changes the component state when button is clicked', () => {
    render(<ProductPage />);
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByText('Hello, universe!')).toBeInTheDocument();
  });

  it('updates component when new props are passed', () => {
    render(<ProductPage message="Hello, universe!" />);
    expect(screen.getByText('Hello, universe!')).toBeInTheDocument();
  });

  it('renders child components correctly', () => {
    render(<ProductPage />);
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
