import React from 'react'
import { render, screen } from "@testing-library/react"
import { JobsContext } from '../../context/JobsContext';
import { jobsData } from "../../tests/utils/mockedData";
import SearchedJobs from '.';

jest.mock("next/router", () => ({
    useRouter: jest.fn(() => ({
        pathname: "/",
        query: {
            id: "1"
        }
  })),
}));

describe('SearchedJobs', () => {
    test('should render properly', () => {
        render(
            <JobsContext.Provider value={{jobs: jobsData, setJobs: jest.fn}}>
                <SearchedJobs searchParam='' data={jobsData} />
            </JobsContext.Provider>
        )

        expect(screen.queryByText("this is text title")).toBeTruthy()
        expect(screen.queryByText("label")).toBeTruthy()
    })
})