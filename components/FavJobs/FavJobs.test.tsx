import { render, screen } from "@testing-library/react"
import FavJobs from ".";
import { jobsData } from "../../tests/utils/mockedData";

jest.mock("next/router", () => ({
    useRouter: jest.fn(() => ({
        pathname: "/",
  })),
}));

describe('Labels', () => {
    test('should render properly', () => {
        render(<FavJobs favData={jobsData} />)

        expect(screen.queryByText("this is text title")).toBeTruthy()
        expect(screen.queryByText("label")).toBeTruthy()
    })
})