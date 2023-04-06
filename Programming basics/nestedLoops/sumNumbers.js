function sum(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let comboCounter = 0;
    let result = 0;
    let currentN1 = 0;
    let currentN2 = 0;
    for (let i1 = n1; i1 <= n2; i1++) {
        for (let i2 = n1; i2 <= n2; i2++) {
            result = i1 + i2;
            comboCounter += 1;
            if (result === magicNumber) {
                currentN1 = i1;
                currentN2 = i2;
                break;
                // currentN1 = i1;
                // currentN2 = i2;
            }
        }
        if (result === magicNumber) {
            break;
        }
    }
    if (result === magicNumber) {
        console.log(`Combination N:${comboCounter} (${currentN1} + ${currentN2} = ${magicNumber})`);
    } else {
        console.log(`${comboCounter} combinations - neither equals ${magicNumber}`);
    }
}
sum(["23",

"24",

"20"])