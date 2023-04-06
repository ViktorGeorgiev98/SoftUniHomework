function sum(input) {
    let startOfInterval = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let comboCounter = 0;
    let magicNumberIsFound = false;
    for (let number1 = startOfInterval; number1 <= endOfInterval; number1++) {
        for (let number2 = startOfInterval; number2 <= endOfInterval; number2++) {
            comboCounter += 1;
            if (number1 + number2 === magicNumber) {
                console.log(`Combination N:${comboCounter} (${number1} + ${number2} = ${magicNumber})`);
                magicNumberIsFound = true;
                break;
            }
        }
        if (magicNumberIsFound === true) {
            break;
        }
        // if (number1 + number2 === magicNumber) {
        //     break;
        // }
    }
    if (magicNumberIsFound === false) {
        console.log(`${comboCounter} combinations - neither equals ${magicNumber}`);
    }
}
sum(["88", "888", "1000"]);