function balance(input) {
    let command = input[0];
    let sum = 0;
    let index = 1;
    while (command !== "NoMoreMoney") {
        let deposit = Number(command);
        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += deposit;
        console.log(`Increase: ${deposit.toFixed(2)}`);
        // index ++;
        command = input[index];
        index++;

    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
balance(["5.51",

"69.42",

"100",

"NoMoreMoney"])