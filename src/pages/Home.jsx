import { StrictMode } from "react"
import Navbar from "../components/Navbar"
import WelcomeMessage from "../components/WelcomeMessage"
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