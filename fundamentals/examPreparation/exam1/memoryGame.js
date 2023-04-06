function memoryGame(arr) {
    let turns = 0;
    let youWin = false;
    let sequenceOfElements = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        turns += 1;
        if (arr[i] === 'end') {
            break;
        }
        let indexes = arr[i].split(' ');
        let index1 = indexes[0];
        let index2 = indexes[1];
        if (index1 === index2 || index1 < 0 || index2 < 0 || index1 >= sequenceOfElements.length || index2 >= sequenceOfElements.length) {
            let elementtoBeAdded = `-${turns}a`
            sequenceOfElements.splice(Math.floor(sequenceOfElements.length / 2), 0, elementtoBeAdded, elementtoBeAdded);
            console.log('Invalid input! Adding additional elements to the board');
        } else if (sequenceOfElements[index1] === sequenceOfElements[index2]) {
            let foundElement = sequenceOfElements[index1];
            sequenceOfElements.splice(index1, 1);
            let secondFoundElementIndex = sequenceOfElements.indexOf(foundElement);
            sequenceOfElements.splice(secondFoundElementIndex, 1);
            console.log(`Congrats! You have found matching elements - ${foundElement}!`);
        } else if (sequenceOfElements[index1] != sequenceOfElements[index2]) {
            console.log('Try again!');
        } 
        if (sequenceOfElements.length === 0) {
            youWin = true;
            break;
        }

    }
    if (youWin === true) {
        console.log(`You have won in ${turns} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(sequenceOfElements.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    
    
])
