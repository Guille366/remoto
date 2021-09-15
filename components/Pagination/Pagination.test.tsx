import { render, screen } from "../../tests";
import Pagination from ".";

describe("Pagination", () => {
  test("if less than 10 items, dont show pagination", () => {
    render(<Pagination pagesLength={5} page={1} />);
    const item1 = screen.queryByRole("link", { name: "1" });

    expect(item1).not.toBeInTheDocument();
  });

  test("should show page 2 if more than 10 items", async () => {
    render(<Pagination pagesLength={11} page={2} />);
    const item2 = await screen.findByRole("link", { name: "2" });

    expect(item2).toBeInTheDocument();
  });

  test("should not have more pages than necessary", () => {
    render(<Pagination pagesLength={11} page={2} />);
    const item3 = screen.queryByRole("link", { name: "3" });

    expect(item3).not.toBeInTheDocument();
  });
});
