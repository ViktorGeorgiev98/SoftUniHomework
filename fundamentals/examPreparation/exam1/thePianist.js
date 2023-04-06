function thePianist(input) {
    // Variables

    let numberOfComposers = Number(input.shift());
    let pianists = new Map();

    // Function to create a pianist

    function createPianist(pianistPiece, pianistComposer, pianistKey) {
        let pianist = {
            piece: pianistPiece,
            composer: pianistComposer,
            key: pianistKey,
            changeKey(newKey) {
                this.key = newKey;
            }
        };
        return pianist;
    }

    // Putting the pianists pieces in a map

    for (let i = 0; i < numberOfComposers; i++) {
        let current = input.shift();
        let [piece, composer, key] = current.split('|');
        let currentPianist = createPianist(piece, composer, key);
        pianists.set(piece, currentPianist);
    }


    // Main logic of the task

    for (let line of input) {
        let currentCommandAndValue = line.split('|');
        let command = currentCommandAndValue.shift();
        if (command === 'Stop') {
            break;
        } else if (command === 'Add') {
            let piece = currentCommandAndValue[0];
            let composer = currentCommandAndValue[1];
            let key = currentCommandAndValue[2];
            if (pianists.has(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                let newPianist = createPianist(piece, composer, key);
                pianists.set(piece, newPianist);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            let piece = currentCommandAndValue[0];
            if (pianists.has(piece)) {
                pianists.delete(piece);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            let piece = currentCommandAndValue[0];
            let newKey = currentCommandAndValue[1];
            if (!pianists.has(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                let currentPiece = pianists.get(piece);
                currentPiece.changeKey(newKey);
                pianists.set(piece, currentPiece);
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
    }

    // Print all the pieces
    // console.log(pianists);

    for (let line of pianists.values()) {
        console.log(`${line.piece} -> Composer: ${line.composer}, Key: ${line.key}`);
    }

}

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'  
//   ]
//   )


thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )