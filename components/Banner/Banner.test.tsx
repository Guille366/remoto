import { render } from "@testing-library/react";
import Banner from ".";

describe('Loading', () => {
  it('renders properly', () => {
    const { container } = render(<Banner />);

    expect(container.firstChild).toMatchSnapshot();
  });
});