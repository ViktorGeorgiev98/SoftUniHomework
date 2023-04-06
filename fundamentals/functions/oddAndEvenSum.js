function oddAndEvenSum(num) {
    let numString = num.toString();
    let numLength = numString.length;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numLength; i ++) {
        if (Number(numString[i]) % 2 === 0) {
            evenSum += Number(numString[i]);
        } else {
            oddSum += Number(numString[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)