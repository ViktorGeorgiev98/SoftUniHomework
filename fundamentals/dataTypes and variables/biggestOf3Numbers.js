function biggestNumber(num1, num2, num3) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    if (num1 > maxNumber) {
        maxNumber = num1;
    }
    if (num2 > maxNumber) {
        maxNumber = num2;
    }
    if (num3 > maxNumber) {
        maxNumber = num3;
    }
    console.log(maxNumber);
}
biggestNumber(-2,

7,

3)
biggestNumber(130,

5,

99)
biggestNumber(43,

43.2,

43.1)