const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const result = [];
    for(let i = 0; i < expr.length; i += 10) {
        const letterMorseArray = [];
        const binLetter = expr.slice(i, i+10);
        if (binLetter === "**********") result.push(" ");
        else {
            for(j = 0; j < 10; j += 2) {
                if (binLetter.slice(j, j+2) === "10") letterMorseArray.push(".");
                else if (binLetter.slice(j, j+2) === "11") letterMorseArray.push("-");
            }
            result.push(MORSE_TABLE[letterMorseArray.join("")]);
        }
    }
    return result.join("");
}

module.exports = {
    decode
}