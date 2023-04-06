function magicSum(arr, num) {
    let newArr = [];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        newArr = [];
        for (let h = i + 1; h < arr.length; h++) {
            result = arr[i] + arr[h];
            if (result === num) {
                newArr.push(arr[i], arr[h]);
                console.log(newArr.join(' '));
            }
        }
    }
}
// magicSum([1, 7, 6, 2, 19, 23],

//     8);

// console.log('-------------');


magicSum([14, 20, 60, 13, 7, 19, 8],

    27);

console.log('-----------');

// magicSum([1, 2, 3, 4, 5, 6],

//     6);