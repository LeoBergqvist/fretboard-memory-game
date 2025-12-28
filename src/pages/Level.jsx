import GuitarFretboard from "../components/GuitarFretboard"
import Navbar from "../components/Navbar"
import CourseDescription from "../components/CourseDescription";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function Level() {
    const { levelId } = useParams();

    const level = Number(levelId); // convert to int

    const mnemonics = [
        ["eddy", "bye", "good", "dynamite", "ate", "eddy"].reverse().join(" ")
    ]

    const texts = [
        `Learn mnemonics for each string on fret: ${level}`,
        `A mnemonic is a memory trick. We will use words and images to remember the note names`,
        `On fret ${level}, the notes for each string is x... t... .s.. .. (Read from the bottom string)`,
        mnemonics[0],
        "Lesson 3",
        "Lesson 3",
    ];


    const [index, setIndex] = useState(0);
    return (
        <>
            <Navbar />
            {/* <h2>Fret {level}</h2> */}
            <div className="course-container" onClick={() =>
                setIndex(prev => (prev + 1) % texts.length)
            }>
                {/* <CourseDescription description={`Learn mnemonics for each string on fret: ${level}`} /> */}
                <CourseDescription description={texts[index]} />
                <button
                    onClick={() =>
                        setIndex(prev => (prev + 1) % texts.length)
                    }
                >
                    Next
                </button>
            </div>
            <GuitarFretboard highlightFret={level} frets={12} />



        </>

    )
}