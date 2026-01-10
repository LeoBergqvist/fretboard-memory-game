import { useState } from "react";
import OrderQuiz from "./orderQuiz";
// import { mnemonicsByFret } from "../data/mnemonicsByFret";
import { mnemonicsByFret } from "../data/mnemonics";
// import { resolveImage } from "../utils/resolveImage";
import { resolveImage } from "../utils/resolveImage";

export default function QuizSentenceGame({ fret }) {
    const words = mnemonicsByFret[fret];
    console.log(words);
    const [stage, setStage] = useState(0);
    const [stageComplete, setStageComplete] = useState(false);

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

    const currentStage = stages[stage];

    const goToNextStage = () => {
        setStage((prev) => prev + 1);
        setStageComplete(false);
    };

    return (
        <div className="quiz-sentence-game">
            <h2>{currentStage?.title}</h2>

            {currentStage ? (
                <>
                    <OrderQuiz
                        tokens={currentStage.tokens}
                        onCorrect={() => setStageComplete(true)}
                    />

                    {stageComplete && (
                        <button
                            className="next-stage-button"
                            onClick={goToNextStage}
                        >
                            Next →
                        </button>
                    )}
                </>
            ) : (
                <div className="quiz-complete">
                    <h3>🎉 All stages complete!</h3>
                    <p>Great job.</p>
                </div>
            )}
        </div>
    );
}
