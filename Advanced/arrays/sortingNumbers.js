function sortingNums(arr) {
    let sortedNums = arr.sort((a, b) => a - b);
    let newArr = [];
    // console.log(sortedNums);
    while (sortedNums.length != 0) {
        let smallestNumber = sortedNums.shift();
        newArr.push(smallestNumber);
        if (sortedNums.length === 0) {
            break;
        }
        let biggestNum = sortedNums.pop();
        newArr.push(biggestNum);
    }
    // console.log(newArr);
    return newArr;
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);