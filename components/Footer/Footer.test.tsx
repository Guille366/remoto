import { render } from "@testing-library/react";
import Footer from ".";

jest.useFakeTimers('modern').setSystemTime(new Date(2022, 9, 1, 7));

describe('Loading', () => {
  it('renders properly', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});