function biggerHalf(arr) {
    let sortedArr = arr.sort((a, b) => a- b);
    let counter = Math.floor(sortedArr.length / 2);
    let newArr = [];
    for (let i = counter; i < sortedArr.length; i++) {
        newArr.push(sortedArr[i]);
    }

    // console.log(newArr);
    return (newArr);

}

biggerHalf([4, 7, 2, 5])

biggerHalf([3, 19, 14, 7, 2, 19, 6])