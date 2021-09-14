import { render, screen, userEvent } from "../../tests";
import Filter from ".";

describe("Filter", () => {
  // Starts closed
  test("should start closed", () => {
    render(<Filter />);
    const test = screen.queryByText(/pj/i);

    expect(test).not.toBeInTheDocument();
  });

  // Show options when clicked
  test("show options when clicked", () => {
    render(<Filter />);
    const btn = screen.getByRole("button");

    userEvent.click(btn);

    const test = screen.queryByText(/pj/i);

    expect(test).toBeInTheDocument();
  });
});
