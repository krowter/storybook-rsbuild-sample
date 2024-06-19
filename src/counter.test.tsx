import { Counter } from "./counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Counter", () => {
  it("renders without crashing", async () => {
    render(<Counter />);

    const incrementBtn = screen.getByText("Increment");

    expect(screen.getByText("Label 1")).toBeVisible();

    await user.click(incrementBtn);

    expect(screen.getByText("Label 2")).toBeVisible();

    await user.click(incrementBtn);

    expect(screen.getByText("Label Fizz")).toBeVisible();

    await user.click(incrementBtn);

    expect(screen.getByText("Label 4")).toBeVisible();

    await user.click(incrementBtn);

    expect(screen.getByText("Label Buzz")).toBeVisible();
    
    for (let i = 0; i < 10; i++) {
      await user.click(incrementBtn);
    }
    expect(screen.getByText("Label FizzBuzz")).toBeVisible();
  });
});
