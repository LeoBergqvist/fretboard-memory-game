// generateImageTokens.js
import { resolveImage } from "./resolveImage";

export function generateImageTokens(wordsArray) {
    return wordsArray.map((word, index) => ({
        id: index,
        type: "image",
        value: resolveImage(word),
        fallback: word, // useful if image missing
    }));
}
