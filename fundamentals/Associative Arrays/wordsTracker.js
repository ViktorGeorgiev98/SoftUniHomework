function wordsTracker(input) {
    let repeated = new Map();
    let neededWords = input.shift().split(' ');
    for (let word of neededWords) {
        repeated.set(word, 0);
    }
    for (let word of input) {
        if (repeated.has(word)) {
            let currentNumber = repeated.get(word);
            let newNumber = currentNumber + 1;
            repeated.set(word, newNumber);        
        }
    }
    let entries = Array.from(repeated).sort((a, b) => b[1] - a[1]);
    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}

wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])