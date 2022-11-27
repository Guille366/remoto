import { render, screen } from "@testing-library/react"
import Details from "."
import { detailsText } from "../../tests/utils/mockedData"

jest.mock("next/router", () => ({
    useRouter: jest.fn(() => ({
        pathname: "/",
  })),
}));

describe('Labels', () => {
    test('should render properly', () => {
        render(<Details data={detailsText} />)

        expect(screen.queryByText("this is text title")).toBeTruthy()
        expect(screen.queryByText("this is text body")).toBeTruthy()
    })
})