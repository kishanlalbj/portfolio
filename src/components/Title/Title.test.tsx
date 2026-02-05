import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./Title";

describe("Title component", () => {
  it("renders the title text correctly", () => {
    render(<Title name="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders h2 element with correct text", () => {
    render(<Title name="My Portfolio" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("My Portfolio");
  });

  it("applies correct CSS classes", () => {
    render(<Title name="Skills" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveClass("text-center", "text-3xl", "font-bold");
  });

  it("renders with empty string prop", () => {
    render(<Title name="" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
