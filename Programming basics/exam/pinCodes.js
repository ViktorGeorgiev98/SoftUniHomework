function pinCodes(input) {
    let maxFirstNumber = Number(input[0]);
    let maxSecondNumber = Number(input[1]);
    let maxThirdNumber = Number(input[2]);
    let pinCodeIsValid = false
    for (let firstDigit = 1; firstDigit <= maxFirstNumber; firstDigit++) {
        for (let secondDigit = 1; secondDigit <= maxSecondNumber; secondDigit++) {
            for (let thirdDigit = 1; thirdDigit <= maxThirdNumber; thirdDigit++) {
                let currentNumber = `${firstDigit}` + `${secondDigit}` + `${thirdDigit}`;
                if (Number(currentNumber[0]) % 2 === 0) {
                    if (Number(currentNumber[1]) === 2 
                    || Number(currentNumber[1]) === 3 
                    || Number(currentNumber[1]) === 5 
                    || Number(currentNumber[1]) === 7) {
                        if (Number(currentNumber[2]) % 2 === 0) {
                            pinCodeIsValid = true;
                            console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                        }
                    }
                }
                // if (Number(currentNumber[0]) % 2 === 0
                // && Number(currentNumber[2]) % 2 === 0 
                // && currentNumber[1] === '2' 
                // || currentNumber[1] === '3'
                // || currentNumber[1] === '5' 
                // || currentNumber[1] === '7') {
                //     pinCodeIsValid = true;
                //     console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                // } 
            }
        }
    }
}
pinCodes(["8",
"2",
"8"])

