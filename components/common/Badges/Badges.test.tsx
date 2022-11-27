import { render } from "@testing-library/react";
import Badges from ".";

describe('Loading', () => {
  it('renders properly', () => {
    const { container } = render(<Badges hotOpening newOpening />);

    expect(container.firstChild).toMatchSnapshot();
  });
});