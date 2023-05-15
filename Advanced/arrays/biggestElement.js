function biggest(arr) {
    let biggestElement = Number.MIN_SAFE_INTEGER;
    for (let array of arr) {
        for (let el of array) {
            if (el > biggestElement) {
                biggestElement = el;
            }
        }
    }
    return biggestElement;
}

biggest([[20, 50, 10],
    [8, 33, 145]]);