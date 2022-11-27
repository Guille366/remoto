import { render, screen } from "@testing-library/react";
import Alert from ".";
import { AlertContext } from "../../../context/AlertContext";

describe('Alert', () => {
    test('renders properly', () => {
        render(
            <AlertContext.Provider value={{
                alert: {
                    active: true,
                    msg: 'sample message'
                },
                setAlert: jest.fn()
            }}>
                <Alert />
            </AlertContext.Provider>)

        expect(screen.queryByText("sample message")).toBeTruthy()
    })

})