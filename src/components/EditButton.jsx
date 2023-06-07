import { useContext } from "react"
import { SampleContext } from "./providers/SampleProvider"

export const EditButton = () => {
    const { isAdmin } = useContext(SampleContext)
    console.log(isAdmin)
    
    return (
        <button disabled={!isAdmin}>Edit</button>
    )
}