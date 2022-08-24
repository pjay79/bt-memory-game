import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  test("should dispay the button", async () => {
    render(<Button onClick={() => console.log("New game")} message="Reset" />);

    expect(screen.getByText(/Reset/)).toBeInTheDocument();
  });
});

describe("Button pressed", () => {
  it("should call the `onClick` function", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick} message="Reset" />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });
});
