import { render, screen } from "../../tests";
import JobsAvailable from ".";

describe("JobsAvailable", () => {
  test("should have the correct text according to the totalAvailable", () => {
    render(<JobsAvailable totalAvailable={6} />);
    const test = screen.queryByText(/6 vagas disponíveis/i);

    expect(test).toBeInTheDocument();
  });

  test("should render text on singular when have only one totalAvailable", () => {
    render(<JobsAvailable totalAvailable={1} />);
    const test = screen.queryByText(/1 vaga disponível/i);

    expect(test).toBeInTheDocument();
  });

  test("should render fav text if fav option is selected", () => {
    render(<JobsAvailable totalAvailable={1} fav />);
    const test = screen.queryByText(/1 vaga favoritada/i);

    expect(test).toBeInTheDocument();
  });

  test("should render nothing if 0 totalAvailable", () => {
    render(<JobsAvailable totalAvailable={0} />);
    const test = screen.queryByText(/0/i);

    expect(test).not.toBeInTheDocument();
  });
});
