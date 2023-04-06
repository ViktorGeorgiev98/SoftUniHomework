function revealWords(words, sentence) {
    words = words.split(', ');
    let numberOfWords = words.length;
    sentence = sentence.split(' ');
    for (let word of sentence) {
        if (word.includes('*')) {
            for (let currentWord of words) {
                if (currentWord.length === word.length) {
                    let index = sentence.indexOf(word);
                    sentence.splice(index, 1, currentWord);
                }
            }
        }
    }
    console.log(sentence.join(' '));

}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');