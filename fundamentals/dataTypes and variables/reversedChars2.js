function reversedChars(char1, char2, char3) {
    let text = char1 + char2 + char3
    let splitText = text.split("");
    let reversedText = splitText.reverse();
    let neededText = reversedText.toString(" ");
    // let reversedTextJoined = reversedText.join("");
    console.log(neededText);
}
reversedChars('A',

'B',

'C')