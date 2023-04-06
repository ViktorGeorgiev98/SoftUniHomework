function wordOccurences(input) {
    let map = new Map();
    for (let word of input) {
        if (!map.has(word)) {
            let quantity = 1;
            map.set(word, quantity);
        } else {
            let currentQuantity = map.get(word);
            let newQuantity = currentQuantity + 1;
            map.set(word, newQuantity);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (let [word, quantity] of sorted) {
        console.log(`${word} -> ${quantity} times`);
    }
}

wordOccurences(["dog", "bye", "city", "dog", "dad",

"boys", "ginger"]);