function sum(n) {
    let sum = 0;
    let counter = 0;
    let oddNumber = 1;
    while (counter != n) {
        console.log(oddNumber);
        sum += oddNumber;
        oddNumber += 2;
        counter += 1;
        // if (counter === n) {
        //     break;
        // }
    }
    console.log(`Sum: ${sum}`);
}
sum('5');