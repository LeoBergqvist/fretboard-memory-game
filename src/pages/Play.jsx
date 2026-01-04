import GuitarFretboard from "../components/GuitarFretboard"
import Navbar from "../components/Navbar"
import MnemonicImage from "../components/MnemonicImage"
import Button from "../components/Button"
import NoteButton from "../components/NoteButton"

export default function About() {
    return (
        <>
            <Navbar />
            <h2>Play Page</h2>
            <GuitarFretboard highlightFret={0} frets={15} />
            {/* <MnemonicImage image="src\assets\images\dynamite.jpeg" />
            <MnemonicImage image="src\assets\images\eddy.png" />
            <MnemonicImage image="src\assets\images\ate.webp" /> */}
            {/* <Button /> */}
            <NoteButton note="C" />
        </>

    )
}