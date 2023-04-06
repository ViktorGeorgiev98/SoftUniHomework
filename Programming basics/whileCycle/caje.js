function cake(input) {
    let cakeLength = Number(input[0]);
    let cakeWidght = Number(input[1]);
    let index = 2;
    let piecesTaken = input[index];
    let cakeSize = cakeLength * cakeWidght;
    let numberPieces = 0;
    let piecesEaten = 0;
    let cakeSize2 = cakeLength * cakeWidght;
    while (true) {
        if (piecesTaken !== "STOP") {
            numberPieces = Number(piecesTaken);
        } else {
            numberPieces = 0;
        }
        piecesEaten+= numberPieces;
        cakeSize -= numberPieces;
        if (cakeSize <= 0) {
            let diff = Math.abs(piecesEaten - cakeSize2);
            console.log(`No more cake left! You need ${diff} pieces more.`)
            break;
        }
        if (piecesTaken === "STOP") {
            let diff = Math.abs(piecesEaten - cakeSize2);
            console.log(`${diff} pieces are left.`) 
            break;
        }
        index++;
        piecesTaken = input[index];

    }
}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"])