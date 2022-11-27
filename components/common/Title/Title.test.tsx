import { render } from "@testing-library/react";
import Title from ".";

describe('Loading', () => {
  it('renders properly', () => {
    const { container } = render(<Title>Test</Title>);

    expect(container.firstChild).toMatchSnapshot();
  });
}); 