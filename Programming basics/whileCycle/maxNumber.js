function maxNumber(input) {
    let command = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        currentNumber = Number(command);
        if (currentNumber > max) {
            max = currentNumber;
        }
        command = input[index];
        index++;
    }
    console.log(max)
}
maxNumber(["100",

"99",

"80",

"70",

"Stop"])