import React, { createContext } from "react"
import useContributors from "../hooks/useContributors"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [totalContributors, contributors] = useContributors()

    const contextValues = {
        totalContributors,
        contributors
    }
    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}
