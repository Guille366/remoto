import { render, screen } from "../../tests";
import Header from ".";

describe("Header", () => {
  test("should have navigation links", () => {
    render(<Header />);
    const homeLink = screen.queryByText(/home/i);
    const FavLink = screen.queryByText(/favoritos/i);

    expect(homeLink).toBeInTheDocument();
    expect(FavLink).toBeInTheDocument();
  });
});
