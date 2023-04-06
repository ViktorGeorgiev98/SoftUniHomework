function countStringRepeats(sentence, char) {
    let counter = 0;
    sentence = sentence.split(' ');
    for (let token of sentence) {
        if (token === char) {
            counter += 1;
        }
    }
    console.log(counter);
}

countStringRepeats('This is a word and it also is a sentence',

'is');