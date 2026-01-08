export function getTexts({ level, fretNotes, mnemonics }) {
    return [
        `Let's learn mnemonics for each string on fret "${level}"`,
        `A "mnemonic" is a memory trick. \nWe use words and images to remember the note names`,
        `For example: On fret "${level}", the notes for each string are: \n
${fretNotes} \n (lowest- to highest string)`,
        `We could use these letters to make a "memorable sentence"`,
        `For the notes (${fretNotes}) \n  
        We make the sentence: \n
        ${mnemonics}`,
        `This creates a story. If we create visuals 
        for it too, our brains remember more easily:`,
        `Now we are gonna practice this sentence`,
    ];
}
