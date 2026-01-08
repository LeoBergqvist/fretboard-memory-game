// components/WordList.jsx
import WordChip from "./WordChip";

const WordList = ({ words, onWordClick, variant }) => {
    return (
        <div className="word-list">
            {words.map((word, index) => (
                <WordChip
                    key={`${word}-${index}`}
                    word={word}
                    variant={variant}
                    onClick={() => onWordClick(word, index)}
                />
            ))}
        </div>
    );
};

export default WordList;
