import { useState } from "react";
import OrderQuiz from "./orderQuiz";
import ProgressBar from "./Progressbar";
import { mnemonicsByFret } from "../data/mnemonics";
import { resolveImage } from "../utils/resolveImage";

export default function QuizSentenceGame({ fret }) {
    const words = mnemonicsByFret[fret];

    const [stage, setStage] = useState(0);
    const [stageComplete, setStageComplete] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    if (!words) {
        return <p>No mnemonic found for fret {fret}</p>;
    }

    const stages = [
        {
            title: "Arrange the sentence",
            tokens: words.map((word, index) => ({
                id: index,
                type: "text",
                value: word,
            })),
        },
        {
            title: "Arrange using images",
            tokens: words.map((word, index) => ({
                id: index,
                type: "image",
                value: resolveImage(word),
                fallback: word,
            })),
        },
        {
            title: "Arrange using first letters",
            tokens: words.map((word, index) => ({
                id: index,
                type: "letter",
                value: word[0].toUpperCase(),
            })),
        },
    ];

    const goToNextStage = () => {
        setIsTransitioning(true);

        setTimeout(() => {
            setStage((prev) => prev + 1);
            setStageComplete(false);
            setIsTransitioning(false);
        }, 300); // must match CSS duration
    };

    const currentStage = stages[stage];

    return (
        <div className="quiz-sentence-game">
            {currentStage ? (
                <>
                    <ProgressBar current={stage} total={stages.length} />

                    <h2 className={`stage-title ${isTransitioning ? "fade-out" : "fade-in"}`}>
                        {currentStage.title}
                    </h2>

                    <div className={`stage-content ${isTransitioning ? "fade-out" : "fade-in"}`}>
                        <OrderQuiz
                            quizId={stage}
                            tokens={currentStage.tokens}
                            onCorrect={() => setStageComplete(true)}
                        />
                    </div>

                    {stageComplete && (
                        <button
                            className="navigation-button"
                            onClick={goToNextStage}
                        >
                            Next →
                        </button>
                    )}
                </>
            ) : (
                <div className="quiz-complete fade-in">
                    <h3>🎉 All stages complete!</h3>
                    <p>Great job.</p>
                    <div>
                        <a href="/study/">Go back to study</a>
                        <a href="/play/">Go back to practice</a>
                    </div>
                </div>
            )}
        </div>
    );
}
