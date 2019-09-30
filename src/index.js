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
    function decodeSymbolInMorse(twoChars){
        switch(twoChars){
            case "10":
                return ".";
            case "11":
                return "-";
            default:
                return "";
        }
    }

    let letters = [];
    for(let i = 0; i < expr.length; i += 10){
        let letterInMorse = "";
        for(let j = i; j < i + 10; j += 2){
            letterInMorse += decodeSymbolInMorse(expr[j] + expr[j + 1]);
        }
        letters.push(letterInMorse);
    }

    let decodedString = letters.map(x => x in MORSE_TABLE ? MORSE_TABLE[x] : " ").join("");
    return decodedString;
}

module.exports = {
    decode
}