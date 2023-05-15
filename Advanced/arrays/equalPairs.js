function equal(arr) {
    // let numberOfPairs = 0;
    // for (let j = 0; j < array.length; j++) {
    //     for (let i = 0; i < array[j].length; i++) {
    //         if (j < array.length - 1 && array[j][i] === array[j + 1][i]) {
    //             numberOfPairs += 1;
    //         }
    //     }
    // }
    // console.log(numberOfPairs);
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
 
            if (i !== arr.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === arr[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

equal([['2', '2', '5', '7', '4'],
       ['4', '0', '5', '3', '4'],
       ['2', '5', '5', '4', '2']]);