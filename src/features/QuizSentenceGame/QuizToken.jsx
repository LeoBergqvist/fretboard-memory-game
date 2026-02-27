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
                <div className="quiz-token-image-container">
                    <img
                        src={token.value}
                        alt=""
                        className="quiz-token-image"
                    />
                    <p className="quiz-token-text-bar"> {token.fallback?.charAt(0).toUpperCase()}...</p>
                </div>

            )}
        </div>
    );
}
