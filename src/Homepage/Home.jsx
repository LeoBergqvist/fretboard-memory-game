import { StrictMode } from "react"
import Navbar from "../components/shared/Navbar"
import WelcomeMessage from "../Homepage/WelcomeMessage"
import '../index.css'
import '../App.css'



function Homepage() {
    return (
        <>
            <StrictMode>
                <Navbar />
                <WelcomeMessage />
            </StrictMode>
        </>
    )
}

export default Homepage