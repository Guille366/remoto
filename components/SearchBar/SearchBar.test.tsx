import { render, screen } from "@testing-library/react";
import SearchBar from ".";

jest.mock("../../hooks/useSearch", () => jest.fn(() => ({
    handleInputChange: jest.fn,
    handleSubmit: jest.fn,
    formInput: {
        searchParam: ''
    }
  })),
);

describe('SearchBar', () => {
    test('should render properly', () => {
        render(<SearchBar />)

        expect(screen.queryByPlaceholderText("Procurar Vaga")).toBeTruthy()
    })
})