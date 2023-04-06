function sorting(arr) {
    let sortedArray = arr.sort((a, b) => b - a);
    let newArr = [];
    while (sortedArray.length > 0) {
        let biggestNumber = sortedArray.shift();
        newArr.push(biggestNumber);
        let smallestNumber = sortedArray.pop();
        newArr.push(smallestNumber);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])