function reverseString(text) {
    let splitString = text.split("");
    let reversedString = splitString.reverse();
    let reversedText = reversedString.join("");
    console.log(reversedText);
}
reverseString('Hello');