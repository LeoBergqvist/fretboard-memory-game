import GuitarFretboard from "../components/GuitarFretboard";
import Navbar from "../components/Navbar";
import CourseDescription from "../components/CourseDescription";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MnemonicDescription from "../components/mnemonicDescription";

export default function Level() {
    const { levelId } = useParams();
    const level = Number(levelId);

    const mnemonics = [
        ["eddy!", "bye", "good-", "dynamite!", "ate", "eddy"]
            .reverse()
            .map(word => word.toUpperCase())
            .join("\n ")
    ];

    const fretNotes = [
        ["E", " A", " D", " G", " B", " E"]
    ];

    const texts = [
        `Let's learn mnemonics for each string on \n fret "${level}"`,
        `A "mnemonic" is a memory trick. We use words and images to remember the note names`,
        `For example: On fret "${level}", the notes for each string are: \n
        ${fretNotes[level]} \n (lowest- to highest string)`,
        `We could use these letters to make a "memorable story"`,
        `For the notes ("${fretNotes[level]}") \n  
        We get: \n
        ${mnemonics[0]}`,
        `This creates a story.\n If we create visual images for it, our brains remember more easily`,
        `To start practicing press the guitar 🎸`,
    ];

    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex(prev => Math.min(prev + 1, texts.length - 1));

    const back = () =>
        setIndex(prev => Math.max(prev - 1, 0));

    return (
        <>
            <Navbar />

            <div className="course-container">
                <MnemonicDescription
                    description={texts[index]}
                    index={index}
                    lengthIndex={texts.length}
                    onNext={next}
                    onBack={back}
                />
                <GuitarFretboard frets={level + 3} highlightFret={level} />
            </div>
        </>
    );
}
