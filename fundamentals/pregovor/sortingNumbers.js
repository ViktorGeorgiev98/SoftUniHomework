function sorting(a, b, c) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let middleNumber = 0;
    if (a > maxNumber) {
        maxNumber = a;
    }
    if (b > maxNumber) {
        maxNumber = b;
    }
    if (c > maxNumber) {
        maxNumber = c;
    }
    if (a < minNumber) {
        minNumber = a;
    }
    if (b < minNumber) {
        minNumber = b;
    }
    if (c < minNumber) {
        minNumber = b;
    }
    if ((a === maxNumber && b === minNumber) || (a === minNumber && b === maxNumber)) {
        middleNumber = c;
    }
    if ((b === maxNumber && c === minNumber) || (b === minNumber && c === maxNumber)) {
        middleNumber = a;
    }
    if ((a === maxNumber && c === minNumber) || (a === minNumber && c === maxNumber)) {
        middleNumber = b;
    }
    console.log(maxNumber);
    console.log(middleNumber);
    console.log(minNumber);
}
sorting('0', '0', '2');