import GuitarFretboard from "../components/GuitarFretboard";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuizSentenceGame from "../components/QuizSentenceGame";
import { mnemonicsByFret } from "../data/mnemonics";

export default function Practice() {
    const { sentenceId } = useParams();

    // Convert to number safely
    // const sentenceFret = parseInt(sentenceId, 10);
    // console.log(sentenceId)
    // if (!mnemonicsByFret[sentenceId]) {
    //     return <div>Fret data not found</div>;
    // }

    // const sentence = mnemonicsByFret[sentenceId].join(" ");
    // console.log(sentence)
    return (
        <div>

            <Navbar />
            {/* <GuitarFretboard /> */}
            {/* <QuizSentenceGame sentence={sentence} /> */}
            <QuizSentenceGame fret={sentenceId} />
        </div>
    )
}
