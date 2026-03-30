import { StrictMode } from "react"
import Navbar from "../components/shared/Navbar"
import QuizAuth from "../components/shared/QuizAuth"
import QuizDashboard from "../components/shared/QuizDashboard"
import WelcomeMessage from "../Homepage/WelcomeMessage"
import '../index.css'
import '../App.css'



function Homepage() {
    return (
        <>
            <StrictMode>
                <Navbar />
                <QuizDashboard />
                <WelcomeMessage />
                {/* <QuizAuth /> */}
            </StrictMode>
        </>
    )
}

export default Homepage