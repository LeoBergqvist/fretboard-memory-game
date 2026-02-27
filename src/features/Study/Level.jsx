import Navbar from "../../components/shared/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MnemonicDescription from "./mnemonicDescription";
import { mnemonicsByFret } from "../../data/mnemonics";
import { getTexts } from '../../functions/texts';
import { getFretNotes } from "../../functions/getFretNotes";


export default function Level() {
    const { levelId } = useParams();
    const level = Number(levelId);
    const IndexesFretboardActive = [2, 3, 4,];
    const IndexesImageActive = [4, 5]


    const fretNotes = getFretNotes(level).join(", ");
    const mnemonics = mnemonicsByFret[level]
        .map(word => word.toUpperCase())
        .join(" .. ");

    const texts = getTexts({ level, fretNotes, mnemonics });

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
                    level={level}
                />

            </div>
        </>
    );
}
