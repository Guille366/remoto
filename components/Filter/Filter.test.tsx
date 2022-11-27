import { render, screen, userEvent } from "../../tests";
import Filter from ".";

jest.mock("next/router");

describe("Filter", () => {
  test("should start closed", () => {
    render(<Filter />);
    const test = screen.queryByText(/pleno/i);

    expect(test).not.toBeInTheDocument();
  });

  test("show options when clicked", () => {
    render(<Filter />);
    const btn = screen.getByRole("button");

    userEvent.click(btn);

    const test = screen.queryByText(/pleno/i);

    expect(test).toBeInTheDocument();
  });

  test("should be checked if clicked", () => {
    render(<Filter />);
    const btn = screen.getByRole("button");

    userEvent.click(btn);

    const test = screen.getAllByRole("checkbox")[0];

    userEvent.click(test);

    expect(test).toBeChecked();
  });

  test("should be unchecked if clicked twice", () => {
    render(<Filter />);
    const btn = screen.getByRole("button");

    userEvent.click(btn);

    const test = screen.getAllByRole("checkbox")[0];

    userEvent.click(test);
    userEvent.click(test);

    expect(test).not.toBeChecked();
  });
});
