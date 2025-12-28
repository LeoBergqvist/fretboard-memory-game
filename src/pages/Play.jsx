import GuitarFretboard from "../components/GuitarFretboard"
import Navbar from "../components/Navbar"


export default function About() {
    return (
        <>
            <Navbar />
            <h2>Play Page</h2>
            <GuitarFretboard highlightFret={0} frets={15} />
        </>

    )
}