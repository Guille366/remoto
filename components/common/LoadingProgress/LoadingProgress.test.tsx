import { render } from "@testing-library/react";
import Progress from "."

jest.mock("@tanem/react-nprogress", () => ({
    useNProgress: jest.fn(() => ({
        animationDuration: 200,
        isFinished: true,
        progress: 0
    }))
}));

describe('Loading', () => {
  it('should render properly', () => {
    const { container } = render(<Progress isAnimating />);

    expect(container.firstChild).toMatchSnapshot();
  });
});