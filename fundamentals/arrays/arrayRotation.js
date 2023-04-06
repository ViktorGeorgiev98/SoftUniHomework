function arrayRotation(arr, rotationCount) {
    let newArr = arr;
    for (let i = 0; i < rotationCount; i++) {
        newArr.push(newArr.shift());
    }
    console.log(newArr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);