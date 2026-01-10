export function generateWordTokens(sentence) {
    return sentence.split(" ").map((word, index) => ({
        id: index,
        type: "text",
        value: word,
    }));
}

export function generateImageTokens(sentence, imageMap) {
    return sentence.split(" ").map((word, index) => ({
        id: index,
        type: "image",
        value: imageMap[word], // word → image
    }));
}

export function generateLetterTokens(sentence) {
    return sentence.split(" ").map((word, index) => ({
        id: index,
        type: "letter",
        value: word[0].toUpperCase(),
    }));
}
