import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Labels from ".";

const push = jest.fn();
const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: "/",
  push,
}));

describe('Labels', () => {
    test('renders properly', () => {
        render( <Labels name="query">query</Labels>)

        expect(screen.queryByText("query")).toBeTruthy()
    })

    test('should route when clicked on label', () => {
        render(<Labels name="query">query</Labels>)

        userEvent.click(screen.getByText('query'))

        expect(push).toHaveBeenCalledWith( "/search/query");
        })
})