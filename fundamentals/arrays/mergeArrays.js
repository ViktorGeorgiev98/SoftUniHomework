function mergeArrays(arr1, arr2) {
    let newArr1 = arr1;
    let newArr2 = arr2;
    let arr3 = [];
    for (let i = 0; i < newArr1.length; i++) {
        let newElement = 0;
        if (i % 2 === 0) {
            newElement = Number(newArr1[i]) + Number(newArr2[i]);
        } else if (i % 2 != 0) {
            newElement = newArr1[i] + newArr2[i];
        }
        arr3.push(newElement);
    }
    console.log(arr3.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);
console.log('---------------------------');

mergeArrays(['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44']);