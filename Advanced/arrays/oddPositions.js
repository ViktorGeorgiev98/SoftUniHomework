function odd(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newArr.push(arr[i] * 2);
        } 
    }
    newArr.reverse();
    // console.log(newArr);
    return newArr;
}

odd([10, 15, 20, 25]);