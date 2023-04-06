function mirrorWords(input) {
    let text = input[0];
    let mirroredWords = [];
    let counter = 0;
    let pattern = /([@#])(?<firstWord>[A-z-Z]{3,})\1\1(?<secondWord>[A-z-Z]{3,})\1/g;

    let numberOfPairs = text.match(pattern);
    if (!numberOfPairs) {
        console.log('No word pairs found!');
     } else {
        console.log(`${numberOfPairs.length} word pairs found!`);
        let currentWords = pattern.exec(text);
        while (currentWords) {
            let firstWord = currentWords.groups.firstWord;
            let secondWord = currentWords.groups.secondWord;
            let reversedSecondWord = secondWord.split('').reverse().join('');
            if (firstWord === reversedSecondWord) {
                let currentMirrorWord = firstWord + ' <=> ' + secondWord;
                mirroredWords.push(currentMirrorWord);
            }
           currentWords = pattern.exec(text);
        }

    }

    if (mirroredWords.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${mirroredWords.join(', ')}`);
    }


}

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
    )