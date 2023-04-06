function printElement(arr) {
    let newArr = [];
    let neededElement = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i+= neededElement) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
printElement(['1', '2', '3', '4', '5', '6']);
