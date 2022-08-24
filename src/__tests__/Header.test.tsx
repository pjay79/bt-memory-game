import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header with props", () => {
  test("should display the title", async () => {
    render(<Header title="The Memory Game" />);

    expect(screen.getByText(/The Memory Game/)).toBeInTheDocument();
  });
});

describe("Header without props", () => {
  test("should display Braintree", async () => {
    render(<Header />);

    expect(screen.getByText(/Braintree/)).toBeInTheDocument();
  });
});
