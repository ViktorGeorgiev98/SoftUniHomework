function minNumber(input) {
    let command = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (command !== "Stop") {
        currentNumber = Number(command);
        if (currentNumber < min) {
            min = currentNumber;
        }
        command = input[index];
        index++;
    }
    console.log(min)
}
minNumber(["45", "-20", "7", "99", "Stop"])