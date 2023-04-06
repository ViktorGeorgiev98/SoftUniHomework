function replaceRepeatingChars(input) {
    let currentChar = '';
    let chars = [];
    for (let char of input) {
        if (char != currentChar) {
            currentChar = char;
            chars.push(currentChar);
        }
    }
    console.log(chars.join(''));
}

replaceRepeatingChars('qqqwerqwecccwd');