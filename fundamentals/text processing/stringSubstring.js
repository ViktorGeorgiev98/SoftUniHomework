function stringSubstring(word, sentence) {
    let data = sentence.split(' ');
    let wordIsPresent = false;
    for (let line of data) {
        if (line.toUpperCase() === word.toUpperCase()) {
            console.log(word);
            wordIsPresent = true;
        }
    }
    if (wordIsPresent === false) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language');

stringSubstring('python', 'JavaScript is the best programming language');