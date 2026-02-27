import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import QuizSentenceGame from "../QuizSentenceGame/QuizSentenceGame";


export default function Practice() {
    const { sentenceId } = useParams();

    return (
        <div>

            <Navbar />
            <div className="practice-container">
                <QuizSentenceGame fret={sentenceId} />
            </div>
        </div>
    )
}
