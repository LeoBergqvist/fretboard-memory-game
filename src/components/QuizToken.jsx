// components/QuizToken.jsx
export default function QuizToken({ token, onClick }) {
    const isTextToken = token.type === "text" || token.type === "letter";


    return (
        <div className="quiz-token" onClick={onClick}>
            {
            /* {token.type === "text" && (
                <span className="quiz-token-text">{token.value}</span>
            )} */}
            {isTextToken && (
                <span className="quiz-token-text">{token.value}</span>
            )}

            {token.type === "image" && (
                <img
                    src={token.value}
                    alt=""
                    className="quiz-token-image"
                />
            )}
        </div>
    );
}
