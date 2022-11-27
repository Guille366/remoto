import { render } from "@testing-library/react";
import BackButton from "./Back";
import LinkButton from "./LinkButton";

describe('Buttons', () => {
    test('renders properly', () => {
        const Link = render( <LinkButton text="example" to="/" />)
        const Back = render( <BackButton />)

        expect(Link.queryByText("example")).toBeTruthy()
        expect(Back.queryByRole("button")).toBeTruthy()
    })
})