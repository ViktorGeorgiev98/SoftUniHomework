function average(input) {
    let number = Number(input[0]);
    let sum = 0;
    for (let n = 1; n <= number; n++) {
        let currentNumber = Number(input[n]);
        sum += currentNumber;
    }
    console.log((sum / number).toFixed(2));
}
average(["4", "3", "2", "4", "2"]);