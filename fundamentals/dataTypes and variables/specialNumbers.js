function specialNumbers(num) {
    let sum = 0;
    let numberLength = 0;
    let numberToBeChecked = '';
    let numberString = '';
    for (let i = 1; i <= num; i++) {
        numberToBeChecked = i.toString();
        for (let u = 0; u < numberToBeChecked.length; u++) {
            numberString = numberToBeChecked.toString();
            sum += Number(numberString[u]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
}
specialNumbers(15);