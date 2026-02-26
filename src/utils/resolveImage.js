// resolveImage.js
// import { imageRegistry } from "./imageRegistry";
import { imageRegistry } from "../data/imageRegistry";
import { normalizeWord } from "./normalizeWord";
// import { normalizeWord } from "./normalizeWord";

// import { imageRegistry } from "../src/data/imageRegistry";
// import { normalizeWord } from "./normalizeWord";

export function resolveImage(fret, word) {
  const key = normalizeWord(word);

  return imageRegistry[fret][key] ?? null;
}
