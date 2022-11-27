import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Fav from ".";

const mockId = 1
const mockHandleGetIcon = jest.fn();
const mockHandleSaveToStorage = jest.fn();
jest.mock("../../../hooks/useFavIcon", () => jest.fn(() => ({
    icon: <div />, 
  handleGetIcon: (arg: string) => mockHandleGetIcon(arg),
})));
jest.mock("../../../hooks/useLocalStorage", () => jest.fn(() => ({
  handleSaveToStorage: (arg: string) => mockHandleSaveToStorage(arg),
})));


describe('Fav', () => {
    beforeEach(jest.clearAllMocks);

    test('should render properly', () => {
        render(<Fav id={mockId} />)

        expect(screen.queryByRole("button")).toBeTruthy()
    })
    test('should save fav when button is clicked', () => {
        render(<Fav id={mockId} />)

        userEvent.click(screen.getByRole('button'))

        expect(mockHandleGetIcon).toHaveBeenCalledWith(mockId);
        expect(mockHandleSaveToStorage).toHaveBeenCalledWith(mockId);
    })

})