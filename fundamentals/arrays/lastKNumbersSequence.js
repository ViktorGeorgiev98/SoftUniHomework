function lastKNumbersSequence(num1, num2) {
    let arr = [1, 1, 2];
    for (let i = 1; i < num1 - 2; i++) {
        let numberForAdding = 0;
        for (let j = 0; j < num2; j++) {
            numberForAdding += Number(arr[(arr.length - 1) - j]);
        }
        arr.push(numberForAdding);
    }
    console.log(arr.join(' '));
}
lastKNumbersSequence(8, 2);