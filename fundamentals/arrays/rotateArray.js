function rotateArray(arr) {
    let newArr = arr;
    let rotationCount = Number(newArr[newArr.length - 1]);
    newArr.pop();
    for (let i = 0; i < rotationCount; i++) {
        let lastElement = newArr.pop();
        newArr.unshift(lastElement);
    }
    console.log(newArr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])