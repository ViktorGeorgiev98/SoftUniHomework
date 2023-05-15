function extract(arr) {
    let newArr = sortTheNewArr(arr);
    // console.log(newArr);
    return newArr;
    function sortTheNewArr(arr) {
        let currentBiggestNum = arr[0];
        let newArr = [];
        newArr.push(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] >= currentBiggestNum) {
                newArr.push(arr[i]);
                currentBiggestNum = arr[i];
            }
        }

        return newArr;
    }
}

extract([20,
    3,
    2,
    15]);