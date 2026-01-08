// components/WordChip.jsx
const WordChip = ({ word, onClick, variant = "default" }) => {
    return (
        <span
            className={`word-chip word-chip--${variant}`}
            onClick={onClick}
        >
            {word}
        </span>
    );
};

export default WordChip;
