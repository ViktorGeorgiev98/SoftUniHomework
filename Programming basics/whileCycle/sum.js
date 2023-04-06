function sum(input) {
    let number = Number(input[0]);
    let index = 1;
    let sum = 0
    while (true) {
        let currentNumber = Number(input[index]);
        sum += currentNumber
        if (sum >= number) {
            break;
        }
        index ++;
        currentNumber = Number(input[index]);
    }
    console.log(sum);
}
sum(["20", "1", "2", "3", "4", "5", "6"])