function triplesLatinLetters(numberString) {
    for (let syll1 = 0; syll1 < Number(numberString); syll1++) {
        for (let syll2 = 0; syll2 < Number(numberString); syll2++) {
            for (let syll3 = 0; syll3 < Number(numberString); syll3++) {
                let char1 = String.fromCharCode('a'.charCodeAt(0) + syll1);
                let char2 = String.fromCharCode('a'.charCodeAt(0) + syll2);
                let char3 = String.fromCharCode('a'.charCodeAt(0) + syll3);
                console.log(`${char1}${char2}${char3}`);
        }
    }
}
}
triplesLatinLetters('2');
