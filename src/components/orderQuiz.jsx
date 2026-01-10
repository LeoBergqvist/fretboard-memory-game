import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import QuizToken from "./QuizToken";


export default function OrderQuiz({ tokens, quizId, onCorrect }) {
    const [available, setAvailable] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);


    useEffect(() => {
        setAvailable(shuffleArray(tokens));
        setAnswer([]);
        setIsCorrect(null);
    }, [quizId]); // 👈 NOT tokens

    const reset = () => {
        setAvailable(shuffleArray(tokens));
        setAnswer([]);
        setIsCorrect(null);
    };



    const addToken = (token, index) => {
        setAnswer((prev) => [...prev, token]);
        setAvailable((prev) => prev.filter((_, i) => i !== index));
    };

    const removeToken = (token, index) => {
        setAnswer((prev) => prev.filter((_, i) => i !== index));
        setAvailable((prev) => [...prev, token]);
    };

    const check = () => {
        const correct = tokens.map((t) => t.id).join();
        const attempt = answer.map((t) => t.id).join();

        const result = correct === attempt;
        setIsCorrect(result);

        if (result && onCorrect) {
            onCorrect();
        }
    };

    return (
        <div className="order-quiz">
            <section>
                <h4>Your Answer</h4>
                <div className="quiz-row">
                    {answer.map((token, index) => (
                        <QuizToken
                            key={token.id}
                            token={token}
                            onClick={() => removeToken(token, index)}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h4>Choices</h4>
                <div className="quiz-row">
                    {available.map((token, index) => (
                        <QuizToken
                            key={token.id}
                            token={token}
                            onClick={() => addToken(token, index)}
                        />
                    ))}
                </div>
            </section>

            <button className="navigation-button" onClick={check}>Check</button>

            {isCorrect !== null && (
                <p className={isCorrect ? "correct" : "incorrect"}>
                    {isCorrect ? "✅ Correct!" : "❌ Try again"}
                </p>
            )}
        </div>
    );
}
