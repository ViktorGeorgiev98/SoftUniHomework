function maxNumber(arr) {
    let newArr = arr;
    let arr2 = [];
    for (let i = 0; i < newArr.length; i++) {
        let numberIsMax = true;
        for (let j = i + 1; j <= newArr.length + 1; j++) {
            if (newArr[i] <= newArr[j]) {
                numberIsMax = false;
                break;
            }
        }
        if (numberIsMax === true) {
            arr2.push(newArr[i]);
        } else {
            numberIsMax = false;
        }
    }
    console.log(arr2.join(' '));
}
maxNumber([1, 4, 3, 2]);

console.log('---------------------');

maxNumber([41, 41, 34, 20]);