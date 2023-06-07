import { createContext } from "react"
import { useState } from "react"

export const SampleContext = createContext({})

export const SampleProvider = props => {
    const { children } = props

    const [isAdmin, setIsAdmin] = useState(false)


    return (
        <SampleContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </SampleContext.Provider>
    )
}