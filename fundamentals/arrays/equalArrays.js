function equalArrays(arr1, arr2) {
    let arraysAreEqual = true;
    let sum = 0;
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            arraysAreEqual = true;
            sum += Number(arr1[i]);
        } else {
            arraysAreEqual = false;
            index = i;
            break;
        }
    }
    if (arraysAreEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
}
equalArrays(['1'], ['10'])