import { render } from "@testing-library/react";
import LoadingSpinner from ".";

describe('Loading', () => {
  it('renders properly', () => {
    const { container } = render(<LoadingSpinner />);

    expect(container.firstChild).toMatchSnapshot();
  });
});