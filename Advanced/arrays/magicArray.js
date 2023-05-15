function magicArray(arr) {
    let magic = true;
    let sumsArray = [];
    for (let el of arr) {
        let currentSum = 0;
        for (let currEl of el) {
            currentSum += currEl;
        }
        sumsArray.push(currentSum);
    }
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < arr.length; j++) {
            currentSum += arr[j][i]
        }
        sumsArray.push(currentSum);
    }
    let first = sumsArray[0];
    for (let num of sumsArray) {
        if (num != first) {
            magic = false;
        }
    }
    console.log(magic);
}

magicArray([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);