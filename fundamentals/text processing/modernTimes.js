function modernTimes(input) {
    let sentence = input.split(' ');
    for (let word of sentence) {
        let wordIsSpecial = true;
        let currentWord = word;
        if (currentWord.startsWith('#') && currentWord.length > 1) {
            currentWord = currentWord.substring(1, currentWord.length)
            for (let char of currentWord) {
                if (char === '0' 
                || char === '1' 
                || char === '2' 
                || char === '3' 
                || char === '4' 
                || char === '5' 
                || char === '6' 
                || char === '7' 
                || char === '8' 
                || char === '9') {
                    wordIsSpecial = false;
                }
            }
            if (wordIsSpecial === true) {
                console.log(currentWord);
            }
        }
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')