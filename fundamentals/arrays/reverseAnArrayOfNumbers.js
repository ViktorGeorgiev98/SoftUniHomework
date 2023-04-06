function reverseNumbers(num, arr) {
    let reversedArr = [];
    // console.log(arr.length);
    for (let i = num - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr.join(' '));
}
reverseNumbers(2, [66, 43, 75, 89, 47])