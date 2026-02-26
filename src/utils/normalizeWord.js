// normalizeWord.js
export function normalizeWord(word) {
    return word
        .toLowerCase()
        // .replace(/\(.*?\)/g, "")   // remove ( # ) etc
        // .replace(/['!",.:;-]/g, "") // remove punctuation
        .trim();
}
