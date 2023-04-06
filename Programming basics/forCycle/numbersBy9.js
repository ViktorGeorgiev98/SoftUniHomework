function numbersByNine(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let sum = 0;
    for (i = number1; i <= number2; i++) {
        let currentNumber = Number(i);
        if (currentNumber % 9 == 0) {
            sum += currentNumber;
        }
    }
    console.log(`The sum: ${sum}`)
    for (i = number1; i <= number2; i++) {
        if (i % 9 == 0) {
            console.log(i)
        }
    }
}

numbersByNine(["100", "200"]);