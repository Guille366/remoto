import React from 'react'
import { render, screen } from "@testing-library/react"
import Jobs from ".";
import { JobsContext } from '../../context/JobsContext';
import { jobsData } from "../../tests/utils/mockedData";

jest.mock("next/router", () => ({
    useRouter: jest.fn(() => ({
        pathname: "/",
        query: {
            id: "1"
        }
  })),
}));

describe('Jobs', () => {
    test('should render properly', () => {
        render(
            <JobsContext.Provider value={{jobs: jobsData, setJobs: jest.fn}}>
                <Jobs />
            </JobsContext.Provider>
        )

        expect(screen.queryByText("this is text title")).toBeTruthy()
        expect(screen.queryByText("label")).toBeTruthy()
    })
})