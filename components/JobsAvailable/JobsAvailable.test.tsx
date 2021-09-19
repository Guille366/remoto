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
});
