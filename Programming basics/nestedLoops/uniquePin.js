function pinCodes(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let number3 = Number(input[2]);
    for (let n1 = 1; n1 <= number1; n1++) {
        for (let n2 = 1; n2 <= number2; n2++) {
            for (let n3 = 1; n3 <= number3; n3++) {
                if (n1 % 2 === 0 && n3 % 2 === 0) {
                    if (n2 === 2 || n2 === 3 || n2 === 5 || n2 === 7) {
                        console.log(`${n1} ${n2} ${n3}`);
                    }
                }
            }
        }
    }
}
pinCodes(["8", "2", "8"]);