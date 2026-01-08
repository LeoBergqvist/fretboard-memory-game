import React, { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/shuffleArray";
import WordList from "./WordList";

const QuizSentenceGame = ({ sentence }) => {
    const originalWords = sentence.split(" ");

    const [availableWords, setAvailableWords] = useState([]);
    const [answerWords, setAnswerWords] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        resetGame();
    }, [sentence]);

    const resetGame = () => {
        setAvailableWords(shuffleArray(originalWords));
        setAnswerWords([]);
        setIsCorrect(null);
    };

    const addWordToAnswer = (word, index) => {
        setAnswerWords((prev) => [...prev, word]);
        setAvailableWords((prev) => prev.filter((_, i) => i !== index));
    };

    const removeWordFromAnswer = (word, index) => {
        setAnswerWords((prev) => prev.filter((_, i) => i !== index));
        setAvailableWords((prev) => [...prev, word]);
    };

    const checkAnswer = () => {
        setIsCorrect(answerWords.join(" ") === sentence);
    };

    return (
        <div className="play-quiz-container">
            <h2 className="quiz-title">Arrange the sentence</h2>

            <section className="quiz-section">
                <h4>Your Answer</h4>
                <WordList
                    words={answerWords}
                    variant="answer"
                    onWordClick={removeWordFromAnswer}
                />
            </section>

            <section className="quiz-section">
                <h4>Words to Pick</h4>
                <WordList
                    words={availableWords}
                    variant="pool"
                    onWordClick={addWordToAnswer}
                />
            </section>

            <div className="quiz-actions">
                <button onClick={checkAnswer}>Check Answer</button>
                <button onClick={resetGame}>Reset</button>
            </div>

            {isCorrect !== null && (
                <div className={`quiz-result ${isCorrect ? "correct" : "incorrect"}`}>
                    {isCorrect ? "✅ Correct!" : "❌ Try Again!"}
                </div>
            )}
        </div>
    );
};

export default QuizSentenceGame;
